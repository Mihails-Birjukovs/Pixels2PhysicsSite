import { expect, test } from "vitest";
import { page, locators } from "vitest/browser";
import { getBlogSources } from "../../../src/components/contentComponents/Blog/dataSource/blogDataSource";
import { render } from "vitest-browser-react";

//TODO: find a way of properly instantiating this once for all test files.
locators.extend({
    getByTag(tagName){ return `${tagName}`; }
});

test("Should be able to retrieve and render every existing blog", async () => {
    const blogs = getBlogSources();

    const titleElement = page.getByTag("title");

    for(let index in blogs){
        const blog = blogs[index];
        const screen = await render(blog.page);
        //All of the blog elements should set the title of the Tab to something derived from their title. We can use that to generally see if the component was rendered.
        await expect.element(titleElement).toContainHTML(blog.title);
        await screen.unmount();
    }
});