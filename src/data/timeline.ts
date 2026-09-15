/** 时间线页面数据源（纯内容）。页面展示与筛选规则由 src/config/timelineConfig.ts 控制。 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "整理 Mavic 3T 视频接入 YOLO 的方案",
		date: "2026.09.15",
		category: "project",
		subtitle: "无人机目标检测研究笔记",
		description:
			"从遥控器 HDMI 输出与电脑输入的区别出发，整理通过采集卡或 RTMP 将 Mavic 3T 图传接入 YOLO 的方法，为后续设备实测准备操作步骤。",
		highlights: [
			"梳理局域网组网、RTMP 收流与播放器验证流程",
			"整理 YOLO11 命令行和 Python 接入示例",
			"区分推理速度与端到端延迟，记录断流和画面异常的排查方法",
		],
		tags: ["无人机", "Mavic 3T", "YOLO", "RTMP"],
		links: [
			{
				label: "阅读文章",
				url: "/posts/blog/20260915/",
				icon: "material-symbols:article-outline-rounded",
			},
		],
		icon: "material-symbols:videocam-outline-rounded",
		featured: true,
	},
	{
		title: "记录 GAN 迷彩生成项目阶段进展",
		date: "2026.09.13",
		category: "project",
		subtitle: "项目阶段记录",
		description:
			"围绕“类别控制图案结构、背景控制配色”的目标，记录 GAN 迷彩生成原型的实现思路、对比结果与尚未解决的问题。",
		highlights: [
			"明确迷彩类别与背景颜色的条件输入",
			"探索保留图案结构和纹理尺度的生成方式",
			"整理当前原型结果与后续改进方向",
		],
		tags: ["GAN", "迷彩", "人工智能", "研究笔记"],
		links: [
			{
				label: "阅读阶段记录",
				url: "/posts/blog/202609122/",
				icon: "material-symbols:article-outline-rounded",
			},
		],
		icon: "material-symbols:code-rounded",
	},
	{
		title: "记录 DeepSeek 与 GPT 的一次问答对比",
		date: "2026.09.12",
		category: "life",
		subtitle: "学习随记",
		description:
			"学习 Haar 级联人脸检测时，围绕特征数量的计算过程，对比 DeepSeek 与 GPT 的回答，并用截图记录这次具体问答的体验。",
		tags: ["人工智能", "DeepSeek", "GPT", "学习笔记"],
		links: [
			{
				label: "阅读文章",
				url: "/posts/blog/20260912/",
				icon: "material-symbols:article-outline-rounded",
			},
		],
		icon: "material-symbols:forum-outline-rounded",
	},
	{
		title: "梳理对抗性伪装的发展脉络",
		date: "2026.09.11",
		category: "project",
		subtitle: "研究笔记",
		description:
			"整理对抗性伪装的概念、发展阶段与开放挑战，关注从物理贴片到三维纹理、跨模态和生成式方法的技术演进。",
		highlights: [
			"区分对抗性伪装与伪装物体检测",
			"梳理代表方法与技术演进主线",
			"总结自然性、鲁棒性和跨环境泛化等研究挑战",
		],
		tags: ["对抗性伪装", "人工智能", "国防科技", "研究笔记"],
		links: [
			{
				label: "阅读文章",
				url: "/posts/blog/20260911/",
				icon: "material-symbols:article-outline-rounded",
			},
		],
		icon: "material-symbols:neurology-rounded",
	},
	{
		title: "整理 SAR 目标识别学习资源",
		date: "2026.09.09",
		category: "life",
		subtitle: "学习动态",
		location: "南京",
		description:
			"整理了 SAR 目标识别、属性散射中心与可解释人工智能方向的开源项目、轻量级基线和文献导航，作为后续学习与实验的资料索引。",
		highlights: [
			"收集 XAI4SAR、PIHA、PGIL 等物理可解释方法",
			"整理基于 MSTAR 数据集的轻量级分类基线",
			"汇总 SAR-HUB 等复现与文献导航资源",
		],
		tags: ["SAR", "MSTAR", "可解释人工智能", "学习笔记"],
		links: [
			{
				label: "查看动态",
				url: "/moments/",
				icon: "material-symbols:forum-outline-rounded",
			},
		],
		icon: "material-symbols:radar-rounded",
		featured: true,
	},
	{
		title: "人工智能领域世界国防科技发展与作战运用研究",
		date: "2026.09.07",
		category: "project",
		subtitle: "研究笔记",
		description:
			"梳理世界主要国家国防人工智能的研发部署、关键技术与作战运用，并总结其影响和未来发展趋势。",
		highlights: [
			"主要国家国防人工智能研发与部署",
			"关键技术及作战运用方式",
			"国防人工智能影响与发展趋势",
		],
		tags: ["人工智能", "国防科技", "研究笔记"],
		links: [
			{
				label: "阅读文章",
				url: "/posts/blog/20260907/",
				icon: "material-symbols:article-outline-rounded",
			},
		],
		icon: "material-symbols:neurology-rounded",
	},
	{
		title: "发布第一篇 Blog",
		date: "2026.09.05",
		category: "milestone",
		subtitle: "个人博客正式上线",
		description:
			"写下《这是我的第一个blog》，记录学习使用 Cloudflare 部署网站、绑定自定义域名以及搭建图床的过程。",
		highlights: [
			"个人网站 258931.xyz 上线",
			"完成 Cloudflare 部署与自定义域名配置",
			"搭建并启用个人图床",
		],
		tags: ["Blog", "Cloudflare", "建站记录"],
		links: [
			{
				label: "阅读第一篇 Blog",
				url: "/posts/blog/1/",
				icon: "material-symbols:article-outline-rounded",
			},
			{
				label: "访问个人网站",
				url: "https://258931.xyz/",
				icon: "material-symbols:language-rounded",
			},
		],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
