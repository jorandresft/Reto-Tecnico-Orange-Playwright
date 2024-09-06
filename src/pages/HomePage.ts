import { pageFixture } from "../hooks/PageFixture";

export class HomePage {

    private Elements = {
        recruitment_loc: '//span[text()="Recruitment"]',
        add_loc: '//button[text()=" Add "]'
    }

    async clickOnRecruitment(){
        await pageFixture.page.locator(this.Elements.recruitment_loc).click();
    }

    async clickOnAdd(){
        await pageFixture.page.locator(this.Elements.add_loc).click();
    }
}