"""Reproduce the article's mathematical figures; no empirical measurements.

Run: python src/content/posts/blog/20260919-assets/generate_figures.py
The two PNG illustrations in this folder are separately AI-generated.
"""
from pathlib import Path
from statistics import NormalDist
import math

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

OUT = Path(__file__).resolve().parent
plt.rcParams.update({
    'font.sans-serif': ['Microsoft YaHei', 'SimHei', 'DejaVu Sans'],
    'axes.unicode_minus': False, 'font.size': 14,
    'axes.spines.top': False, 'axes.spines.right': False,
    'axes.labelcolor': '#263238', 'text.color': '#263238',
    'axes.titleweight': 'bold', 'figure.facecolor': '#fcfbf7',
    'axes.facecolor': '#fcfbf7', 'savefig.facecolor': '#fcfbf7',
    'axes.prop_cycle': plt.cycler(color=['#267c83', '#ce7747', '#7163a5']),
})
norm = NormalDist()
Phi = np.vectorize(norm.cdf)

def save(fig, name):
    fig.savefig(OUT / name, dpi=180, bbox_inches='tight')
    plt.close(fig)

# Equal amplitude, distinct transition widths: original analytic example.
x = np.linspace(-15, 15, 1600)
fig, axes = plt.subplots(2, 1, figsize=(7.2, 7.2), layout='constrained')
for width in [2, 10]:
    y = 40 + 20 * np.clip(x / width + .5, 0, 1)
    axes[0].plot(x, y, label=f'过渡宽度 {width} 像素', lw=2.5)
    axes[1].plot(x, np.gradient(y, x), lw=2.5)
axes[0].set(title='亮度差相同：都是 20', xlabel='位置 / 像素', ylabel='示例亮度 / 相对单位')
axes[1].set(title='变化越集中，局部梯度越大', xlabel='位置 / 像素', ylabel='亮度变化 / 像素')
axes[0].legend(frameon=False)
for ax in axes: ax.grid(alpha=.16)
save(fig, 'edge-gradient.png')

# Exactly matched histograms, with spatial arrangement as the only difference.
stripe = np.tile(np.repeat([40., 60.], 16), 8)
block = np.repeat([40., 60.], 128)
tex_a = np.tile(stripe, (64, 1))
tex_b = np.tile(block, (64, 1))
assert np.array_equal(np.sort(tex_a.ravel()), np.sort(tex_b.ravel()))
assert tex_a.mean() == tex_b.mean() == 50
assert tex_a.var() == tex_b.var() == 100
fig, axes = plt.subplots(3, 1, figsize=(7.2, 7.8),
                         gridspec_kw={'height_ratios':[1,1,1.5]}, layout='constrained')
for ax, tex, title in zip(axes[:2], [tex_a,tex_b], ['A：细条交替','B：大块分区']):
    ax.imshow(tex, cmap='gray', vmin=0, vmax=100, aspect='auto', interpolation='nearest')
    ax.set_title(title)
    ax.set_xticks([])
    ax.set_yticks([])
axes[2].bar(np.array([40,60])-2, [.5,.5], width=4, label='A')
axes[2].bar(np.array([40,60])+2, [.5,.5], width=4, label='B')
axes[2].set(title='直方图相同，排列不同', xlabel='灰度值', ylabel='像素比例',
            xticks=[40,60], yticks=[0,.25,.5], ylim=(0,.65))
axes[2].legend(frameon=False, ncol=2, loc='upper right', fontsize=11)
axes[2].grid(axis='y',alpha=.15)
save(fig, 'matched-histograms.png')

# g(r) teaching sketches only, explicitly not fitted or estimated point processes.
r = np.linspace(.01, 180, 1600)
fig, ax = plt.subplots(figsize=(7.2, 5.3), layout='constrained')
exclusion = 1 - np.exp(-(r / 8)**4)
cluster = 1 + 1.3 * np.exp(-(r / 24)**2)
period = 1 + .75 * np.cos(2*np.pi*r/40) * np.exp(-r/100)
ax.plot(r, exclusion, lw=2.4, label='近邻抑制：短距离低于 1')
ax.plot(r, cluster, lw=2.4, label='局部聚集：宽范围高于 1')
ax.plot(r, period, lw=2.4, label='近似周期：反复峰谷（方向性示意）')
ax.axhline(1, color='#6b7278', ls='--', lw=1)
ax.set(xlabel='间距 r / 任意单位', ylabel='相对点对密度 g', ylim=(0, 2.6),
       title='配对相关：随机基线 g = 1')
ax.legend(frameon=False, loc='upper right', fontsize=10)
ax.grid(alpha=.15)
fig.text(.5, -.035, '教学函数示意，非实测估计；周期线表示方向性重复。', ha='center', fontsize=10)
save(fig, 'pair-correlation.png')

# Exact covariance of a sum of two random-phase orthogonal sinusoids.
t = np.linspace(0, 210, 1500)
cx = .5 * (np.cos(2*np.pi*t/70) + 1)
cy = .5 * (1 + np.cos(2*np.pi*t/35))
angle = np.linspace(0, 2*np.pi, 1500, endpoint=False)
rad = (.5*(np.cos(2*np.pi*t[:,None]*np.cos(angle)/70)
           +np.cos(2*np.pi*t[:,None]*np.sin(angle)/35))).mean(axis=1)
fig, axes = plt.subplots(2, 1, figsize=(7.2, 10), layout='constrained')
xx, yy = np.meshgrid(np.linspace(0, 210, 420), np.linspace(0, 210, 420))
texture = .5 + .2*np.cos(2*np.pi*xx/70) + .2*np.cos(2*np.pi*yy/35)
axes[0].imshow(texture, cmap='gray', vmin=0, vmax=1, extent=[0,210,0,210], origin='lower')
axes[0].set(title='构造纹理：水平周期 70，垂直周期 35', xlabel='水平位置 / 任意单位', ylabel='垂直位置 / 任意单位')
for a, label in [(cx,'水平方向'), (cy,'垂直方向'), (rad,'所有方向平均')]:
    axes[1].plot(t,a,lw=2,label=label)
axes[1].axhline(0,color='#6b7278',lw=.8,ls='--')
axes[1].set(title='方向自相关与径向平均', xlabel='位移长度 r / 任意单位', ylabel='C', xticks=[0,35,70,105,140,175,210])
axes[1].legend(frameon=False, fontsize=10)
axes[1].grid(alpha=.15)
save(fig, 'direction-correlation.png')

# Original illustrative reaction time data, including both absent and present cases.
n = np.array([20,40,60,80,100])
fig, ax = plt.subplots(figsize=(7.2,5.3),layout='constrained')
ax.plot(n,390+.5*n,'o-',lw=2.3,label='A：目标存在，斜率 0.5 ms/项')
ax.plot(n,200+10*n,'o-',lw=2.3,label='B：目标存在，斜率 10 ms/项')
ax.plot(n,190+20*n,'o--',lw=2.3,label='B：目标不存在，假设斜率 20 ms/项')
ax.set(xlabel='项目数量 N',ylabel='平均反应时间 / ms',title='项目数量如何影响搜索时间',xticks=n)
ax.legend(frameon=False,fontsize=10)
ax.grid(alpha=.15)
fig.text(.5,-.035,'构造数据；虚线为完整检查的模型预测，非普遍规律。',ha='center',fontsize=10)
save(fig,'search-slopes.png')

x = np.linspace(-3.5, 6.5, 1800)
pdf0 = np.exp(-x*x/2)/math.sqrt(2*math.pi)
pdf3 = np.exp(-(x-3)**2/2)/math.sqrt(2*math.pi)
fig, axes = plt.subplots(3,1,figsize=(7.2,9.2),sharex=True,sharey=True,layout='constrained')
for ax,k,label in zip(axes,[.5,1.5,2],['宽松','中点','保守']):
    h,fa = norm.cdf(3-k),norm.cdf(-k)
    ax.plot(x,pdf0,color='#267c83',lw=2,label='无目标 N(0,1)')
    ax.plot(x,pdf3,color='#ce7747',lw=2,label='有目标 N(3,1)')
    ax.fill_between(x,0,pdf0,where=x>=k,color='#267c83',alpha=.3)
    ax.fill_between(x,0,pdf3,where=x>=k,color='#ce7747',alpha=.22)
    ax.axvline(k,color='#7163a5',ls='--',lw=1.8)
    ax.set(title=f'{label} k={k:.1f}：H={h:.2%}，FA={fa:.2%}',ylabel='概率密度',ylim=(0,.48))
    ax.text(k+.12,.435,'回答“有” →',fontsize=10)
    ax.grid(alpha=.12)
axes[0].legend(frameon=False,loc='upper right',fontsize=10)
axes[-1].set_xlabel('内部证据 x（标准化单位）')
save(fig,'sdt-thresholds.png')

fa = np.linspace(.00001,.99999,2000)
z = np.array([norm.inv_cdf(float(v)) for v in fa])
fig,ax=plt.subplots(figsize=(7,6.5),layout='constrained')
for d in [1,2,3]:
    ax.plot(fa,Phi(z+d),lw=2.4,label=f"d′ = {d}；AUC = {norm.cdf(d/math.sqrt(2)):.3f}")
ax.plot([0,1],[0,1],'--',color='#92999f',label="d′ = 0；AUC = 0.500")
for k in [.5,1.5,2]:
    ax.scatter(norm.cdf(-k),norm.cdf(3-k),s=40,color='#7163a5',zorder=5)
    ax.annotate(f'k={k}',(norm.cdf(-k),norm.cdf(3-k)),xytext=(8,-17),textcoords='offset points',fontsize=10)
ax.set(xlabel='虚警率 FA',ylabel='命中率 H',title='等方差高斯模型的 ROC',xlim=(0,1),ylim=(0,1.035))
ax.legend(frameon=False,loc='lower right',fontsize=10)
ax.grid(alpha=.18)
save(fig,'roc-curves.png')

# Check every model number used in the article independently of rounded display.
for k in [.5,1,1.5,2]:
    h,fa=norm.cdf(3-k),norm.cdf(-k)
    d=norm.inv_cdf(h)-norm.inv_cdf(fa)
    c=-(norm.inv_cdf(h)+norm.inv_cdf(fa))/2
    assert abs(d-3)<1e-12 and abs(c-(k-1.5))<1e-12
    print(f'k={k}: H={h:.6f}, FA={fa:.6f}, d={d:.6f}, c={c:.6f}, beta={math.exp(d*c):.6f}')
for d in [1,2,3]:
    print(f"d={d}: AUC={norm.cdf(d/math.sqrt(2)):.6f}, H_at_FA_0.1={norm.cdf(norm.inv_cdf(.1)+d):.6f}")
assert np.allclose(190+20*(n+1)/2, 200+10*n)
assert np.allclose(cx[[0]], [1]) and np.allclose(cy[[0]], [1])
assert abs(norm.cdf(3/math.sqrt(2))-.9830525732)<1e-9
print('Saved 7 mathematical figures; model and histogram checks passed.')
