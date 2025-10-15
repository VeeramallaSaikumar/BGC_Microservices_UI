import { Locator,Page,expect } from "@playwright/test";

class PendingCaseSubmission{
    readonly page:Page
    readonly caseSubMenuBtn:Locator
    readonly pendingCaseSubMenuBtn:Locator
    readonly pendingCaseSubHeader:Locator
    readonly showEntries:Locator
    readonly ShowEntryMessage:Locator
    readonly rows:Locator
    readonly viewIcon:Locator
    readonly requestForBGC:Locator
    readonly deleteIcon:Locator
    readonly succesHeader:Locator
    readonly yesBtn:Locator
    readonly cancelBtn:Locator
    readonly ok:Locator
    readonly viewDetailsHeader:Locator

    constructor(page:Page){
        this.page=page
        this.caseSubMenuBtn=page.locator("//ul[@class='sidebar-menu']/div[5]")
        this.pendingCaseSubMenuBtn=page.locator("//span[text()='Pending Case Submission']")
        this.pendingCaseSubHeader=page.locator("//p[text()='Pending Case Submission Candidates']")
        this.showEntries=page.locator("//div[@class='entries-select']/select")
        this.ShowEntryMessage=page.locator("")
        this.rows=page.locator("//table/tbody/tr")
        this.viewIcon=page.locator("//button[@class='icon-btn text-indigo-600']")
        this.requestForBGC=page.locator("//button[@class='bgc-request-btn']")
        this.deleteIcon=page.locator("(//tbody/tr[1]//td[7]//i)[2]")
        this.succesHeader=page.locator("//h1[text()='Success']")
        this.yesBtn=page.locator("//button[text()='Yes']")
        this.cancelBtn=page.locator("//button[text()='Cancel']")
        this.ok=page.locator("//button[text()='OK']")
        this.viewDetailsHeader=page.locator("//p[text()='View Candidate Details']")
    }
    public async viewCandidateDetails(){
        await this.caseSubMenuBtn.click()
        // await this.page.waitForTimeout(5000)
        await this.pendingCaseSubMenuBtn.click()
        await expect(this.pendingCaseSubHeader).toBeVisible()
        await this.page.waitForLoadState("domcontentloaded")
        await this.showEntries.selectOption("50")
        const rowCount=await this.rows.count()
        console.log("No of rows in the table: "+rowCount)
        if(rowCount>0){
        await this.viewIcon.first().click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.viewDetailsHeader).toBeVisible()
        }
        else{
            console.log("No Candidates to view details")
        }
    }
    public async requestForBGCForCandidate(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.caseSubMenuBtn.click()
        await this.pendingCaseSubMenuBtn.click()
        await expect(this.pendingCaseSubHeader).toBeVisible()
        await this.page.waitForLoadState("domcontentloaded")
        await this.showEntries.selectOption("50")
        const rowCount=await this.rows.count()
        console.log("No of rows in the table: "+rowCount)
        if(rowCount>0){
        await this.requestForBGC.first().click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.yesBtn.click()
        await this.ok.click()
        }
        else{
            console.log("No Candidates to Request for BGC")
        }
    }

}
export default PendingCaseSubmission