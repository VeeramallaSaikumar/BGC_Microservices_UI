import { Locator, Page ,expect} from "@playwright/test";

class ActiveEmployee {
    readonly page:Page
    readonly EmployeeListMenuBtn:Locator
    readonly activeListBtn:Locator
    readonly inActiveListBtn:Locator
    readonly activeEmpHeader:Locator
    readonly inActiveEmpHeader:Locator
    readonly actEmpName:Locator
    readonly actEmpId:Locator
    readonly actAssinedCandidatesBtn:Locator
    readonly editIcon:Locator
    readonly deleteIcon:Locator
    readonly searchBox:Locator
    readonly rows:Locator
    readonly mobileNumber:Locator
    readonly updateBtn:Locator
    readonly cancelBtn:Locator
    readonly yesBtn:Locator
    readonly noBtn:Locator

    constructor(page: Page) {
       this.page=page;
       this.EmployeeListMenuBtn=page.locator('//span[text()="Employee List"]')
       this.activeListBtn=page.locator('//span[text()="Active Employees"]')
       this.inActiveListBtn=page.locator('//span[text()="Inactive Employee"]')
       this.activeEmpHeader=page.locator('//h2[text()="Active Employees"]')
       this.inActiveEmpHeader=page.locator('//h2[text()="Inactive Employees"]')
       this.actEmpName=page.locator('//table[@class="admin-table"]/tbody/tr[1]/td[2]')
       this.actEmpId=page.locator('//table[@class="admin-table"]/tbody/tr[1]/td[1]')
       this.actAssinedCandidatesBtn=page.locator('//table[@class="admin-employee-table"]/tbody/tr[1]/td[5]/button')
       this.editIcon=page.locator("//button[@title='Edit']")
       this.deleteIcon=page.locator("//button[@title='Delete']")
       this.searchBox=page.locator('//input[@placeholder="Search by Employee ID or Name"]')    
       this.rows=page.locator('table tbody tr')
       this.mobileNumber=page.locator('//input[@name="contact"]')
       this.updateBtn=page.locator('//button[text()="Save"]')
       this.cancelBtn=page.locator('//button[text()="Cancel"]') 
       this.yesBtn=page.locator('//button[text()="Yes"]')
       this.noBtn=page.locator('//button[text()="No"]')
    }
    public async validatingListOfActiveEmployee(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.EmployeeListMenuBtn.click()
        await this.activeListBtn.click()
        await this.page.waitForTimeout(3000)
        await this.activeEmpHeader.waitFor({state:"visible"})
        const rowCount= await this.rows.count()
        console.log(`Total Active Employee: ${rowCount}`);
    }
    public async validatingAssignedCandForEmployee(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.EmployeeListMenuBtn.click()
        await this.activeListBtn.click()
        await this.page.waitForTimeout(2000)
        await this.activeEmpHeader.waitFor({state:"visible"})
        await this.page.waitForTimeout(2000)
        await this.actAssinedCandidatesBtn.click()
        const rowCount= await this.rows.count()
        console.log(`Total Assigned Candidates For Employee ID is: ${rowCount}`);        
    }
    public async editingActiveEmployeeInfo(number:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.EmployeeListMenuBtn.click()
        await this.activeListBtn.click()
        await this.page.waitForTimeout(2000)
        await this.activeEmpHeader.waitFor({state:"visible"})
        await this.page.waitForTimeout(2000)
        await this.editIcon.first().click()
        await this.page.waitForTimeout(2000)
        await this.mobileNumber.fill(number)
        await this.updateBtn.click()
        await expect(this.activeEmpHeader).toBeVisible()   
    }
    public async deleteActiveEmployee(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.EmployeeListMenuBtn.click()
        await this.activeListBtn.click()
        await this.page.waitForTimeout(2000)
        await this.activeEmpHeader.waitFor({state:"visible"})
        await this.page.waitForTimeout(2000)
        await this.deleteIcon.first().click()
        await this.page.waitForTimeout(2000)
        //await this.yesBtn.click()
        await this.noBtn.click()
        await this.page.waitForTimeout(2000)
        await expect(this.activeEmpHeader).toBeVisible()
    }
     public async validatingInactiveEmployeesList(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.EmployeeListMenuBtn.click()
        await this.inActiveListBtn.click()
        await this.page.waitForTimeout(3000)
        await this.inActiveEmpHeader.waitFor({state:"visible"})
        const rowCount= await this.rows.count()
        console.log(`Total Inactive Employee: ${rowCount}`);
    }

}
export default ActiveEmployee;