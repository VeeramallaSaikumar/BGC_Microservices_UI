import { Locator, Page } from "@playwright/test";

class Loginpage {
    readonly page: Page;
    readonly email: Locator
    readonly password: Locator
    readonly loginBtn: Locator
    readonly logo: Locator
    readonly invalidLoginMsg: Locator
    readonly userNotFound: Locator
    constructor(page: Page) {
        this.page = page;
        this.email = page.getByPlaceholder('Enter email or username')
        this.password = page.getByPlaceholder('Password')
        this.loginBtn = page.locator('//button[text()="Login"]')
        this.logo = page.locator('//img[@class="logo-image"]')
        this.invalidLoginMsg = page.locator("//div[text()='Invalid password']")
        this.userNotFound = page.locator("//div[text()='User not found with this email']")
    }
    public async login(username: string, pwd: string) {
        await this.page.goto('/');
        await this.page.waitForLoadState("domcontentloaded")
        await this.email.waitFor({ state: "visible" });
        await this.email.fill(username);
        await this.password.fill(pwd);
        await this.loginBtn.click();
        await this.logo.waitFor({ state: "visible" });
    }
    public async invalidLogin(username: string, pwd: string, validationMsg: string) {
        await this.page.goto('/');
        await this.page.waitForLoadState("domcontentloaded")
        await this.email.waitFor({ state: "visible" });
        await this.email.fill(username);
        await this.password.fill(pwd);
        await this.loginBtn.click();
        await this.invalidLoginMsg.waitFor({ state: "visible" });
        const errorMessage = await this.invalidLoginMsg.textContent();
    }
}
export default Loginpage;