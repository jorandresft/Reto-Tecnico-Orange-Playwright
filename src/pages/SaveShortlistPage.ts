import { pageFixture } from "../hooks/PageFixture";

export class SaveShortlistPage {

    private Elements = {
        save_shortlist_loc: '//button[text()=" Save "]'
    }

    async clickOnSaveShortlist(){
        await pageFixture.page.locator(this.Elements.save_shortlist_loc).click({timeout: 30000});
    }
}