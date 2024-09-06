import { pageFixture } from "../hooks/PageFixture";

export class InterviewScheduledPage {

    private Elements = {
        mark_interview_passed_loc: '//button[text()=" Mark Interview Passed "]'
    }

    async clickOnMarkInterviewPassed(){
        await pageFixture.page.locator(this.Elements.mark_interview_passed_loc).click({timeout: 30000});
    }
}