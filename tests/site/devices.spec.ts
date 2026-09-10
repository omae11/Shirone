import { expect, test } from "@playwright/test";

const DEVICE_COUNT = 2;

test.describe("设备展示页", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/devices/");
		await expect(page.locator(".device-card")).toHaveCount(DEVICE_COUNT);
	});

	test("渲染个人电脑及其核心规格", async ({ page }) => {
		await expect(page.locator("#swup-container")).toHaveAttribute(
			"data-current-page",
			"devices",
		);
		await expect(page.locator(".page-header__title")).toHaveText("My Devices");
		await expect(page.locator(".devices-section__count")).toHaveText(
			"2 devices",
		);

		const redmi = page.locator('[data-device="redmi-book-pro-14-2024"]');
		await expect(redmi.locator("h2")).toHaveText("Redmi Book Pro 14 2024");
		await expect(redmi.locator(".device-card__brand")).toHaveText("Redmi");
		await expect(redmi.locator(".device-card__specs")).toContainText(
			"32GB / 1TB SSD",
		);
		await expect(redmi.locator('[data-status="active"]')).toContainText(
			"Active",
		);
		await expect(redmi).toHaveClass(/device-card--featured/);

		const desktop = page.locator('[data-device="desktop-workstation"]');
		await expect(desktop.locator("h2")).toHaveText("Desktop Workstation");
		await expect(desktop.locator(".device-card__brand")).toHaveText(
			"Custom Build",
		);
		await expect(desktop.locator(".device-card__specs")).toContainText(
			"RTX 5090 32GB",
		);
		await expect(desktop.locator(".device-card__icon")).toBeVisible();
	});

	test("电脑分类筛选和搜索正常工作", async ({ page }) => {
		await page.getByRole("button", { name: "Computers", exact: true }).click();
		await expect(page.locator(".device-card")).toHaveCount(DEVICE_COUNT);
		await expect(page.locator(".devices-section__count")).toHaveText(
			"2 devices",
		);

		const searchInput = page.locator(".devices-section__search input");
		await searchInput.fill("Redmi");
		await expect(page.locator(".device-card")).toHaveCount(1);
		await expect(
			page.locator('[data-device="redmi-book-pro-14-2024"]'),
		).toBeVisible();
		await expect(page).toHaveURL(/[?&]q=Redmi/);

		await page.locator(".devices-section__search-clear").click();
		await expect(page.locator(".device-card")).toHaveCount(DEVICE_COUNT);
	});

	test("直接加载时导航和侧栏状态正确", async ({ page }) => {
		await expect(
			page.locator('[data-nav-key="devices"]').first(),
		).toHaveAttribute("aria-current", "page");
		await expect(
			page.locator('widget-layout[data-id="categories"]'),
		).toBeVisible();
		await expect(page.locator('widget-layout[data-id="tags"]')).toBeVisible();
	});
});

test.describe("设备展示页 Swup 导航", () => {
	test.use({ viewport: { width: 1280, height: 900 } });

	test("从持久顶栏进入后同步页面、导航与侧栏状态", async ({ page }) => {
		await page.goto("/skills/", { waitUntil: "domcontentloaded" });
		await page.getByRole("button", { name: "More", exact: true }).click();
		await page.locator('a[data-nav-key="devices"]').click();

		await expect(page).toHaveURL(/\/devices\/$/);
		await expect(page.locator(".device-card")).toHaveCount(DEVICE_COUNT);
		await expect(page.locator('a[data-nav-key="devices"]')).toHaveAttribute(
			"aria-current",
			"page",
		);
	});
});
