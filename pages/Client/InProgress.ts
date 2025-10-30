import { Locator,Page,expect } from "@playwright/test";

class BGCInProgress{
    readonly page:Page
    readonly caseSubMenuBtn:Locator
    readonly inProgress:Locator
    readonly inProgressHeader:Locator
    readonly rows:Locator
    readonly uniqueId:Locator
    readonly caseInitiatedDate:Locator
    readonly caseInitiatedTime:Locator
    readonly show:Locator

    constructor(page:Page){
        this.page=page
        this.caseSubMenuBtn=page.locator("//ul[@class='sidebar-menu']/div[5]")
        this.inProgress=page.locator("//span[text()='BGV In Progress Candidates']")
        this.inProgressHeader=page.locator("p.client-header")
        this.rows=page.locator("table tbody tr")
        this.uniqueId=page.locator("td:nth-child(1)")
        this.caseInitiatedDate=page.locator("td:nth-child(6)")
        this.caseInitiatedTime=page.locator("td:nth-child(7)")
        this.show=page.locator("//div[@class='entries-select']/select")
    }
    public async bGVInprogress(){
        await this.caseSubMenuBtn.click()
        await this.inProgress.click()
        await expect(this.inProgressHeader).toBeVisible()
        await this.page.waitForTimeout(2000)
        const details=await this.rows.count()
        console.log("BGV InProgress Caniddate are")
        console.log(`Candidates details:`)
        for(let i=0;i<details;i++){
            const canUniqueId= await this.rows.nth(i).locator(this.uniqueId).textContent()
            const canDate=await this.rows.nth(i).locator(this.caseInitiatedDate).textContent()
            const canTime=await this.rows.nth(i).locator(this.caseInitiatedTime).textContent()
            console.log(`Candidate Id: ${canUniqueId} | Case Initiated Date: ${canDate} | Case Initiated Time: ${canTime}`)
        }
    }
}
export default BGCInProgress