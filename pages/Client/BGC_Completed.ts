import { Locator,Page,expect } from "@playwright/test";

class BGCCompoleted{
    readonly page:Page
    readonly caseSubMenuBtn:Locator
    readonly completedMenu:Locator
    readonly completedMenuHeader:Locator
    readonly rows:Locator
    readonly uniqueId:Locator
    readonly caseInitiatedDate:Locator
    readonly bgvCompletedDate:Locator
    readonly show:Locator

    constructor(page:Page){
        this.page=page
        this.caseSubMenuBtn=page.locator("//ul[@class='sidebar-menu']/div[5]")
        this.completedMenu=page.locator("//span[text()='BGV Completed Candidates']")
        this.completedMenuHeader=page.locator("p.client-header")
        this.rows=page.locator("table tbody tr")
        this.uniqueId=page.locator("td:nth-child(1)")
        this.caseInitiatedDate=page.locator("td:nth-child(6)")
        this.bgvCompletedDate=page.locator("td:nth-child(7)")
        this.show=page.locator("//div[@class='entries-select']/select")
    }
    public async bGVCompleted(){
        await this.caseSubMenuBtn.click()
        await this.completedMenu.click()
        await expect(this.completedMenuHeader).toBeVisible()
        await this.page.waitForTimeout(2000)
        const details=await this.rows.count()
        console.log("BGV Completed Caniddate are")
        console.log(`Candidates details`)
        for(let i=0;i<details;i++){
            const canUniqueId= await this.rows.nth(i).locator(this.uniqueId).textContent()
            const canDate=await this.rows.nth(i).locator(this.caseInitiatedDate).textContent()
            const bgvDate=await this.rows.nth(i).locator(this.bgvCompletedDate).textContent()
            console.log(`Candidate Id: ${canUniqueId} | Case initiated Date: ${canDate} | BGV Completed Date: ${bgvDate}`)
        }
    }
}
export default BGCCompoleted