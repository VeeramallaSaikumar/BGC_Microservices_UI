import { Locator,Page,expect } from "@playwright/test";

class SubmittedForVerification{
    readonly page:Page
    readonly caseSubMenuBtn:Locator
    readonly submittedForVerification:Locator
    readonly submittedForVerifcationHeader:Locator
    readonly rows:Locator
    readonly status:Locator
    readonly show:Locator
    readonly action:Locator
    readonly reportHeader:Locator

    constructor(page:Page){
        this.page=page
        this.caseSubMenuBtn=page.locator("//ul[@class='sidebar-menu']/div[5]")
        this.submittedForVerification=page.locator("//span[text()='Submitted Verification']")
        this.submittedForVerifcationHeader=page.locator("p.client-header")
        this.rows=page.locator("table tbody tr")
        this.status=page.locator("td:nth-child(8)")
        this.show=page.locator("//div[@class='entries-select']/select")
        this.action=page.locator("td:nth-child(9) button")
        this.reportHeader=page.locator("h1.report-main-title")
    }
    public async validatingSubmittedForVerification(){
        await this.caseSubMenuBtn.click()
        await this.submittedForVerification.click()
        await expect(this.submittedForVerifcationHeader).toBeVisible()
        await this.show.selectOption("50")
        await this.page.waitForTimeout(2000)
        const count=await this.rows.count()
        console.log("No.of rows",count)
        let veri=0,com=0,wip=0,yts=0,ps=0
        for(let i=0;i<count;i++){
            const state=await this.rows.nth(i).locator(this.status).textContent()
            if(state=="VERIFIED") veri++
            if(state=="WORK_IN_PROGRESS") wip++
            if(state=="YET_TO_START") yts++
            if(state=="COMPLETED") com++
            if(state=="PENDING_SUBMISSION") ps++
        }
        console.log("VERIFIED: ",veri)
        console.log("WORK_IN_PROGRESS: ",wip)
        console.log("COMPLETED: ",com)
        console.log("YET_TO_START: ",yts)
        expect(ps,"Pending Submission").toBe(0)
    }
    public async viewdetailsfromSubittedForVerifcation(){
        await this.caseSubMenuBtn.click()
        await this.submittedForVerification.click()
        await expect(this.submittedForVerifcationHeader).toBeVisible()
        await this.show.selectOption("50")
        await this.page.waitForTimeout(2000)
        await this.action.first().click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.reportHeader).toBeVisible()
        await this.page.waitForTimeout(2220)
    }
}
export default SubmittedForVerification