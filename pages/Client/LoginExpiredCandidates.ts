import { Locator, Page, expect } from "@playwright/test";

class LoginExpireCandidates {
    readonly page: Page
    readonly loginExpiredMenuBtn: Locator
    readonly pendingformBtn: Locator
    readonly loginExHeader: Locator
    readonly showEntries: Locator
    readonly ShowEntryMessage: Locator
    readonly rows: Locator
    constructor(page: Page) {
        this.page = page
        this.loginExpiredMenuBtn = page.locator("//span[text()='Login Expired Candidates']")
        this.pendingformBtn = page.locator('//span[text()="Pending forms"]')
        this.loginExHeader = page.locator("//p[text()='Login Expired Candidates']")
        this.showEntries = page.locator("//div[@class='entries-select']/select")
        this.ShowEntryMessage = page.locator("div.pagination-summary")
        this.rows = page.locator("div tbody tr")
    }
    public async loginExpiredCandidate(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.pendingformBtn.click()
        await this.loginExpiredMenuBtn.click()
        await expect(this.loginExHeader).toBeVisible()
        await this.showEntries.click()
        await this.showEntries.selectOption({value:'50'})
        const showEntrytext= await this.ShowEntryMessage.innerText()
        const Total = showEntrytext.split("of")[1].trim().split(" ")[0];
        console.log("\x1b[33m%s\x1b[0m \x1b[32m%s\x1b[0m","Total list of candidates whose login credentails are expired: ",Total)
    }

}
export default LoginExpireCandidates