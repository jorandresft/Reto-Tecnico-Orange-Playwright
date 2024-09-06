import { pageFixture } from "../hooks/PageFixture";

export class LoginPage {

    private Elements = {
        username_loc: '[name= "username"]',
        password_loc: '[name="password"]',
        login_loc: '//button[text()=" Login "]'
    }

    async fillUsername(username: string){
        await pageFixture.page.locator(this.Elements.username_loc).fill(username);
    }

    async fillPassword(password: string){
        await pageFixture.page.locator(this.Elements.password_loc).fill(password);
    }

    async clickOnLogin(){
        await pageFixture.page.locator(this.Elements.login_loc).click();
    }

    async enterUsernameAndPassword (username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }
}