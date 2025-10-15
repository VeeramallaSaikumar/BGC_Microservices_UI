import { expect,Locator,Page } from "@playwright/test";

class Profile {
    readonly page:Page
    readonly profileMenuBtn:Locator
    readonly userName:Locator
    readonly email:Locator
    readonly company:Locator
    readonly contactNumber:Locator
    readonly updateBtn:Locator
    readonly cancelBtn:Locator
    readonly okayBtn:Locator
    readonly errorHeader:Locator
    readonly errorMsg:Locator

    constructor(page:Page){
        this.page=page
        this.profileMenuBtn=page.locator('//span[text()="View Profile"]')
        this.userName=page.locator('#username')
        this.email=page.locator('#email')
        this.company=page.locator('#companyName')
        this.contactNumber=page.locator('#contactNumber')
        this.updateBtn=page.locator('//button[@class="admin-submit-button"]')
        this.cancelBtn=page.locator('//button[@class="admin-cancel-button"]')
        this.okayBtn=page.locator('//button[text()="OK"]')
        this.errorHeader=page.locator('//h2[text()="Validation Error"]')
        this.errorMsg=page.locator('//p[text()="Please enter a valid 10-digit mobile number."]')
    }
    public async validatingProfileDetails(contactNum:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0,0)
        await this.profileMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.userName).toBeDisabled()
        await expect(this.email).toBeDisabled()
        await expect(this.company).toBeDisabled()
        await this.contactNumber.fill(contactNum)
        await this.updateBtn.click()
        await this.page.waitForTimeout(2000)
        await this.okayBtn.click()
        await this.page.waitForTimeout(2000)
        expect(await this.contactNumber.inputValue()).toBe(contactNum)
    }
    public async validatingInvalidMobileNumber(contactNum:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0,0) 
        await this.profileMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.userName).toBeDisabled()
        await expect(this.email).toBeDisabled()
        await expect(this.company).toBeDisabled()
        await this.contactNumber.fill(contactNum)
        await this.updateBtn.click()
        await this.page.waitForTimeout(2000)
        await expect(this.errorHeader).toBeVisible()
        const errorMsg=await this.errorMsg.innerText()
        expect(errorMsg).toContain("Please enter a valid 10-digit mobile number.")
        await this.okayBtn.click()
    }
}
export default Profile;