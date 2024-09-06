import { pageFixture } from "../hooks/PageFixture";

export class JobOfferedPage {

    private Elements = {
        hire_loc: '//button[text()=" Hire "]'
    }

    async clickOnHire(){
        await pageFixture.page.locator(this.Elements.hire_loc).click({timeout: 30000});
    }
}