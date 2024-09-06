import { DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/PageFixture";

export class ScheduleInterviewFormPage {

    private Elements = {
        date_loc: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[3]/div/div[2]/div/div/input',
        interview_loc: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input',
        interviewer_loc: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div/div[2]/div/div/input',
        save_loc: '//button[text()=" Save "]'
    }

    async fillDate(date: string){
        await pageFixture.page.locator(this.Elements.date_loc).fill(date);
    }

    async fillInterviewTitle(interviewTitle: string){
        await pageFixture.page.locator(this.Elements.interview_loc).fill(interviewTitle);
    }

    async fillInterviewer(interviewer: string){
        await pageFixture.page.locator(this.Elements.interviewer_loc).fill(interviewer);
        await pageFixture.page.waitForTimeout(5000);
        await pageFixture.page.keyboard.press('ArrowDown');
        await pageFixture.page.keyboard.press('Enter');
    }

    async fillFormDataInterview (dataInterview: DataTable){
        const data = dataInterview.hashes();
        for (const row of data) {
            await this.fillDate(row["date"]);
            await this.fillInterviewer(row["interviewer"]);
            await this.fillInterviewTitle(row["interviewTitle"]);
        }
    }

    async clickOnSave(){
        await pageFixture.page.locator(this.Elements.save_loc).click();
    }
}