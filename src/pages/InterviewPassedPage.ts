import { pageFixture } from "../hooks/PageFixture";

export class InterviewPassedPage {

    private Elements = {
        offer_job_loc: '//button[text()=" Offer Job "]'
    }

    async clickOnOfferJob (){
        await pageFixture.page.locator(this.Elements.offer_job_loc).click({timeout: 30000});
    }
}