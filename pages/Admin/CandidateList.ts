import { expect, Locator, Page } from "@playwright/test";

class CandidateList {
    readonly page: Page 
    readonly clientListMenubtn: Locator
    readonly clientName: Locator
    readonly clientEmail: Locator
    readonly clinetCompany: Locator
    readonly assignCandidatebtn: Locator
    readonly assignBtn:Locator
    readonly closeBtn:Locator
    readonly reassignBtn:Locator
    readonly rows:Locator
    readonly nthColumn:Locator
    readonly search:Locator
    readonly empAssignBtn:Locator
    readonly okayBtn:Locator

    
  constructor(page: Page) {
        this.page = page;
        this.clientListMenubtn= page.locator('//span[text()="Client List"]')    
        this.clientName= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[1]')
        this.clientEmail= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[3]')
        this.clinetCompany= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[2]')
        this.assignCandidatebtn= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[5]/button[1]')
        this.assignBtn=page.locator('//div[@class="admin-table-container"]/table/tbody/tr[1]/td[5]/button')
        this.reassignBtn=page.locator('')
        this.closeBtn=page.locator('')
        this.rows=page.locator('table tbody tr')
        this.nthColumn=page.locator('td:nth-child(5) button')
        this.search=page.locator('//input[@placeholder="Search by Employee ID or Name"]')
        this.empAssignBtn=page.locator('//button[@class="admin-assign-btn admin-assign-confirm-modal"]')
        this.okayBtn=page.locator('//button[text()="OK"]')
}  
    public async validatingAssignCandidateToAgent(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0,0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        const rowCount=await this.rows.count()
        
        for(let i=0;i<rowCount;i++){
            const button=this.rows.nth(i).locator(this.nthColumn)
            const btnText=await button.innerText() 

            if(btnText==="Assign"){
                await this.nthColumn.nth(i).click()
                await this.search.pressSequentially("vikas",{delay:1000})
                await this.empAssignBtn.click()
                await this.page.waitForTimeout(2000)
                await this.okayBtn.click()
                expect(await button.innerText()).toBe("Reassign")
                break;
            }
            else{
                console.log("No more candidates to assign");
                break;
            }
        }
    }
    public async validatingReassignCandidateToAgent(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0,0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        const rowCount=await this.rows.count()
        
        for(let i=0;i<rowCount;i++){
            const button=this.rows.nth(i).locator(this.nthColumn)
            const btnText=await button.innerText() 

            if(btnText==="Reassign"){
                await this.nthColumn.nth(i).click()
                await this.search.pressSequentially("vikas",{delay:1000})
                await this.empAssignBtn.click()
                 await this.page.waitForLoadState("domcontentloaded")
                await this.okayBtn.click()
                expect(await button.innerText()).toBe("Reassign")
                break;
            }
            else{
                console.log("No more candidates to Reassign");
                break;
            }
        }
    }
    
}
export default CandidateList;