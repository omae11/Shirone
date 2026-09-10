/** 时间线页面数据源（纯内容）。页面展示与筛选规则由 src/config/timelineConfig.ts 控制。 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
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
