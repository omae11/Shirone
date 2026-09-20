import { expect, test } from "@playwright/test";

const article = "/posts/blog/20260919/";

for (const width of [320, 1440]) {
	for (const theme of ["light", "dark"]) {
		test(`boxed formulas retain their frame at ${width}px in ${theme}`, async ({
			page,
		}) => {
			await page.setViewportSize({ width, height: 1000 });
			await page.addInitScript(
				(value) => localStorage.setItem("theme", value),
				theme,
			);
			await page.goto(article, { waitUntil: "domcontentloaded" });
			await page.waitForFunction(() =>
				document.documentElement.style.getPropertyValue("--mc-primary"),
			);
			await page.evaluate(() => document.fonts.ready);
			const boxes = page.locator(".markdown-content .fbox");
			await expect(boxes).toHaveCount(3);
			for (const box of await boxes.all()) {
				await expect
					.poll(() =>
						box.evaluate((element) => {
							const frame = element.getBoundingClientRect();
							const row = element.parentElement!.getBoundingClientRect();
							const style = getComputedStyle(element);
							return (
								frame.width > 40 &&
								Math.abs(frame.width - row.width) < 2 &&
								[
									style.borderTopStyle,
									style.borderRightStyle,
									style.borderBottomStyle,
									style.borderLeftStyle,
								].every((side) => side === "solid")
							);
						}),
					)
					.toBe(true);
			}
			await expect(page.locator(".katex-error")).toHaveCount(0);
		});
	}
}
