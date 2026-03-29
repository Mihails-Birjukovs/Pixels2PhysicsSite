import { expect, test } from "vitest";
import { page, locators } from "vitest/browser";
import { render } from "vitest-browser-react";
import { getCaseSources } from "../../../src/components/contentComponents/CaseStudies/dataSource/caseStudySource";

//TODO: find a way of properly instantiating this once for all test files.
locators.extend({
    getByTag(tagName){ return `${tagName}`; }
});

test("Should be able to retrieve and render every existing blog", async () => {
    const caseStudies = getCaseSources();

    const titleElement = page.getByTag("title");

    for(let index in caseStudies){
        const caseStudy = caseStudies[index];
        const screen = await render(caseStudy.page);
        //All of the case studies elements should set the title of the Tab to something derived from their title. We can use that to generally see if the component was rendered.
        await expect.element(titleElement).toContainHTML(caseStudy.title);
        await screen.unmount();
    }
});