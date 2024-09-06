import { pageFixture } from "../hooks/PageFixture";

export class ShortlistedPage {

    private Elements = {
        schedule_interview_loc: '//button[text()=" Schedule Interview "]'
    }

    async clickOnScheduleInterview(){
        await pageFixture.page.locator(this.Elements.schedule_interview_loc).click({timeout: 30000});
    }
}