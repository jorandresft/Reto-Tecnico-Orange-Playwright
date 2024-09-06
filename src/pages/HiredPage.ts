import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/PageFixture";

export class HiredPage {

    private Elements = {
        hired_status_loc: '//p[text()="Status: Hired"]'
    }

    async validateStatusHired(status: string){
        await expect(pageFixture.page.locator(this.Elements.hired_status_loc)).toHaveText(status);
    }
}