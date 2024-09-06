import { pageFixture } from "../hooks/PageFixture";

export class SaveHirePage {

    private Elements = {
        save_hire_loc: '//button[text()=" Save "]'
    }

    async clickOnSaveHire(){
        await pageFixture.page.locator(this.Elements.save_hire_loc).click({timeout: 30000});
    }
}