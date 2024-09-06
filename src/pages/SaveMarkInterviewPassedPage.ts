import { pageFixture } from "../hooks/PageFixture";

export class SaveMarkInterviewPassedPage {

    private Elements = {
        save_mark_interview_passed_loc: '//button[text()=" Save "]'
    }

    async clickOnSaveMarkInterviewPassed(){
        await pageFixture.page.locator(this.Elements.save_mark_interview_passed_loc).click({timeout: 30000});
    }
}