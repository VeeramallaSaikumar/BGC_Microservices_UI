import { Locator,Page,expect } from "@playwright/test";

class PendingSubmission{
    readonly page:Page
    readonly pendingformBtn:Locator
    readonly pendingSubmissionMenuBtn:Locator
    readonly loginExpiredMenuBtn:Locator
    readonly pendingSubHeader:Locator
    readonly loginExHeader:Locator
    readonly showEntries:Locator
    readonly ShowEntryMessage:Locator
    readonly rows:Locator
    readonly restoreLogin:Locator
    readonly deleteIcon:Locator
    readonly succesHeader:Locator
    readonly yesBtn:Locator
    readonly noBtn:Locator
    readonly ok:Locator

    constructor(page:Page){
        this.page=page
        this.pendingformBtn=page.locator('//span[text()="Pending forms"]')
        this.pendingSubmissionMenuBtn=page.locator("//span[text()='Pending Submission']")
        this.loginExpiredMenuBtn=page.locator("//span[text()='Login Expired Candidates']")
        this.pendingSubHeader=page.locator("//p[text()='Pending Submission Candidates']")
        this.loginExHeader=page.locator("//p[text()='Login Expired Candidates']")
        this.showEntries=page.locator("//div[@class='entries-select']/select")
        this.restoreLogin=page.locator("//span[@title='Restore Login']")
        this.deleteIcon=page.locator("//span[@title='Delete']")
        this.rows=page.locator("div tbody tr")
        this.ShowEntryMessage=page.locator("div.pagination-summary")
        this.succesHeader=page.locator("div.modal-contentt")
        this.yesBtn=page.locator("//button[@class='modal-btn confirm']")
        this.noBtn=page.locator("//button[@class='modal-btn cancel']")
        this.ok=page.locator("//button[@class='modal-btn ok']")
    }
    public async validatinglistOfPendingSubmiison(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.pendingformBtn.click()
        await this.pendingSubmissionMenuBtn.click()
        await expect(this.pendingSubHeader).toBeVisible()
        await this.showEntries.click()
        await this.showEntries.selectOption({value:'50'})
        const showEntrytext= await this.ShowEntryMessage.innerText()
        const Total = showEntrytext.split("of")[1].trim().split(" ")[0];
        console.log("\x1b[33m%s\x1b[0m \x1b[32m%s\x1b[0m","Total list of candidates in pending submission: ",Total)
    }
    public async validatingRestoreLogin(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.pendingformBtn.click()
        await this.pendingSubmissionMenuBtn.click()
        await expect(this.pendingSubHeader).toBeVisible()
        await this.restoreLogin.first().click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.yesBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.ok.click()
        await expect(this.pendingSubHeader).toBeVisible()
    }
    public async validatingDelete(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.pendingformBtn.click()
        await this.pendingSubmissionMenuBtn.click()
        await expect(this.pendingSubHeader).toBeVisible()
        await this.deleteIcon.click()
        await this.page.waitForLoadState("domcontentloaded")
        // await this.yesBtn.click()
        await this.noBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.ok.click()
        await expect(this.pendingSubHeader).toBeVisible()
    }
}
export default PendingSubmission;