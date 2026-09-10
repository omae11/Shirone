/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "shirone",
		title: "Shirone",
		summary:
			"An Astro blog theme shaped around an M3E component system, expressive content, and resilient client navigation.",
		category: "theme",
		phase: "building",
		technologies: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
		icon: "material-symbols:deployed-code-outline-rounded",
		cover: "/assets/projects/shirone.webp",
		coverAlt: "Shirone theme homepage preview",
		featured: true,
		repository: "https://github.com/LyraVoid/Shirone",
		year: "2026",
	},
	{
		key: "folkpatch",
		title: "FolkPatch",
		summary: "A kernel-level root solution for Android, built on APatch.",
		category: "android",
		phase: "building",
		technologies: ["Kotlin", "APatch", "Android"],
		icon: "material-symbols:terminal-rounded",
		repository: "https://github.com/LyraVoid/FolkPatch",
	},
	{
		key: "kernelpatch",
		title: "KernelPatch",
		summary:
			"A kernel patch framework that powers APatch-style root on Android by loading code into the running kernel.",
		category: "android",
		phase: "shipped",
		technologies: ["C", "Linux Kernel", "Android"],
		icon: "material-symbols:extension-outline-rounded",
		repository: "https://github.com/lyravoid/KernelPatch",
	},
	{
		key: "in-class-ai-assistant",
		title: "In-Class AI Assistant",
		summary: "面向课堂场景的 AI 助手项目，用于探索人工智能辅助教学与课堂交互。",
		category: "ai-tools",
		phase: "building",
		technologies: ["AI", "Education", "Assistant"],
		icon: "material-symbols:school-outline-rounded",
		repository: "https://github.com/omae11/in-class-ai-assistant",
	},
	{
		key: "hanako-skills",
		title: "Hanako Skills",
		summary:
			"为 HanaAgent 构建的自定义技能集，包含花瓣图片采集和通用反爬工作流。",
		category: "ai-tools",
		phase: "building",
		technologies: ["Agent Skills", "Python", "Playwright"],
		icon: "material-symbols:extension-outline-rounded",
		repository: "https://github.com/omae11/hanako-skills",
	},
	{
		key: "mstar-dataset",
		title: "MSTAR Dataset",
		summary:
			"面向 SAR 自动目标识别研究的 MSTAR 数据集镜像，包含 SOC 强度图和原始复数数据子集。",
		category: "research",
		phase: "shipped",
		technologies: ["SAR", "MSTAR", "Computer Vision"],
		icon: "material-symbols:database-outline-rounded",
		repository: "https://github.com/omae11/MSTAR-dataset",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
