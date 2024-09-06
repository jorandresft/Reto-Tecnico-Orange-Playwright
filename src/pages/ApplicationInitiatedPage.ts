import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/PageFixture";

export class ApplicationInitiatedPage {

    private Elements = {
        shortlist_loc: '//button[text()=" Shortlist "]',
        reject_loc: '//button[text()=" Reject "]'
    }

    async clickOnShortlist(){
        await expect(pageFixture.page.locator(this.Elements.shortlist_loc)).toBeVisible({timeout: 30000});
        await pageFixture.page.locator(this.Elements.shortlist_loc).click({timeout: 30000});
    }

    async clickOnReject(){
        await pageFixture.page.locator(this.Elements.reject_loc).click({timeout: 30000});
    }
}