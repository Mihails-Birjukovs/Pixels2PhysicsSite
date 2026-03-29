import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { App } from "../../src/App";
import { page } from "vitest/browser";


test("Is able to fully render the site", async () => {
    const screen = await render(<App/>)
    const homeButtonBanner = page.getByRole('banner').getByText("Home");
    await expect.element(homeButtonBanner).toBeInTheDocument();
    const homeButtonFooter = page.getByRole('contentinfo').getByText("Home");
    await expect.element(homeButtonFooter).toBeInTheDocument();
    //Switching to the "mobile view" from the default screen size set in the configuration.
    await page.viewport(460, 820);
    //In mobile view, everything is hidden behind the menu, so we shouldn't be able to find existing buttons, but we hsould be able to see menu button.
    await expect.element(homeButtonBanner).not.toBeInTheDocument();
    await expect.element(homeButtonFooter).not.toBeInTheDocument();
    const menuButton = page.getByTitle("Navigation")
    await expect.element(menuButton).toBeInTheDocument();
});