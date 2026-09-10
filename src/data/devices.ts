/** 设备展示页数据源（纯内容）。页面展示与筛选规则由 src/config/devicesConfig.ts 控制。 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "redmi-book-pro-14-2024",
		name: "Redmi Book Pro 14 2024",
		brand: "Redmi",
		category: "desk",
		status: "active",
		specs: "32GB / 1TB SSD",
		specDetails: [
			{ key: "memory", label: "内存", value: "32GB" },
			{ key: "storage", label: "硬盘", value: "1TB SSD" },
		],
		description: "日常使用的轻薄笔记本，兼顾学习、写作与移动办公。",
		icon: "material-symbols:laptop-windows-outline-rounded",
		featured: true,
		year: "2024",
	},
	{
		id: "desktop-workstation",
		name: "Desktop Workstation",
		brand: "Custom Build",
		category: "desk",
		status: "active",
		specs: "Core Ultra 9 285K / RTX 5090 32GB / 128GB / 3TB SSD",
		specDetails: [
			{ key: "cpu", label: "处理器", value: "Intel Core Ultra 9 285K" },
			{ key: "gpu", label: "显卡", value: "NVIDIA GeForce RTX 5090 32GB" },
			{ key: "memory", label: "内存", value: "128GB DDR5" },
			{
				key: "storage",
				label: "硬盘",
				value: "ZHITAI Ti600 2TB + Samsung 990 PRO 1TB",
			},
			{ key: "motherboard", label: "主板", value: "GIGABYTE Z890 UD WIFI6E" },
		],
		description: "用于开发、人工智能实验和高性能计算的主力台式工作站。",
		icon: "material-symbols:desktop-windows-outline-rounded",
		featured: true,
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
