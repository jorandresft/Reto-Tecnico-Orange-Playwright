import { pageFixture } from "../hooks/PageFixture";

export class SaveJobOfferedPage {

    private Elements = {
        save_shortlist_loc: '//button[text()=" Save "]'
    }

    async clickOnSaveJobOffer(){
        await pageFixture.page.locator(this.Elements.save_shortlist_loc).click({timeout: 30000});
    }
}