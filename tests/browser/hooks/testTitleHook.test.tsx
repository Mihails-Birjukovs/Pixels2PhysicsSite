import { renderHook } from "vitest-browser-react";
import { expect, test } from "vitest";
import { useTitleHook } from "../../../src/hooks/useTitleHook";
import { page, locators } from "vitest/browser";

//TODO: find a way of properly instantiating this once for all test files.
locators.extend({
    getByTag(tagName){ return `${tagName}`; }
})

test("Should change title of the tab", async () => {
    //Running the hook and ensuring that title element got its value set.
    const titleString = "The title of new window.";
    //Rendering title component to ensure that there is something to change fo the hook itself.
    const hook = await renderHook((title:string = titleString) => {
        useTitleHook(title);
    });
    //Inbuild 'vitest/browser' locators do not allow us to search by actual element type. The 'title' is hidden for normal
    const titleElement = page.getByTag("title");
    await expect.element(titleElement).toBeInTheDocument();
    await expect.element(titleElement).toContainHTML(titleString);
    //Rerunning the hook to ensure that change is also successfull.
    const titleString2 = "New title of the new window";
    await hook.rerender(titleString2);
    await expect.element(titleElement).toBeInTheDocument();
    await expect.element(titleElement).toContainHTML(titleString2);
    hook.unmount();
});