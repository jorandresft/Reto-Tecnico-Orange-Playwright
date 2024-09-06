import { DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/PageFixture";

export class RecruitmentFormPage {
    
    private Elements = {
        firstName_loc: '[name="firstName"]',
        lastName_loc: '[name="lastName"]',
        vacancy_div_loc: '//div[contains(text(),"-- Select --")]',
        email_loc: '//form/div[3]/div/div[1]/div/div[2]/input',
        save_loc: '//button[text()=" Save "]'
    }

    async fillFirstName(firstName: string){
        await pageFixture.page.locator(this.Elements.firstName_loc).fill(firstName);
    }

    async fillLastName(lastName: string){
        await pageFixture.page.locator(this.Elements.lastName_loc).fill(lastName);
    }

    async selectVacancyDiv(){
        await pageFixture.page.locator(this.Elements.vacancy_div_loc).click();
    }

    async selectVacancy(vacancy: string){
        await pageFixture.page.locator(`//span[text()="${vacancy}"]`).click();
    }

    async fillEmail(email: string){
        await pageFixture.page.locator(this.Elements.email_loc).fill(email);
    }

    async clickOnSave(){
        await pageFixture.page.locator(this.Elements.save_loc).click();
    }

    async fillFormDataCandidate (dataCandidate: DataTable){
        const data = dataCandidate.hashes();
        for (const row of data) {
            await this.fillFirstName(row["firstName"]);
            await this.fillLastName(row["lastName"]);
            await this.selectVacancyDiv();
            await this.selectVacancy(row["vacancy"]);
            await this.fillEmail(row["email"]);
        }
    }
}