import { expect,Locator,Page } from "@playwright/test";

class ClientProfile {
    readonly page:Page
    readonly profileMenuBtn:Locator
    readonly userName:Locator
    readonly email:Locator
    readonly company:Locator
    readonly contactNumber:Locator
    readonly editIcon:Locator
    readonly updateBtn:Locator
    readonly cancelBtn:Locator
    readonly okayBtn:Locator
    readonly errorHeader:Locator
    readonly errorMsg:Locator
    readonly oldContactNumber:Locator

    constructor(page:Page){
        this.page=page
        this.profileMenuBtn=page.locator('//span[text()="Profile"]')
        this.userName=page.locator("//label[text()='Name:']/following-sibling::p")
        this.email=page.locator("//label[text()='Email Id:']/following-sibling::p")
        this.company=page.locator("//label[text()='Company Name:']/following-sibling::p")
        this.contactNumber=page.locator("//input[@name='phonenumber']")
        this.oldContactNumber=page.locator("//div[@class='phone-display']/span")
        this.editIcon=page.locator('svg.edit-pen-icon')
        this.updateBtn=page.locator('button.save-btn')
        this.cancelBtn=page.locator('button.cancel-btn')
        this.okayBtn=page.locator('//button[text()="OK"]')
        this.errorHeader=page.locator('//h2[text()="Validation Error"]')
        this.errorMsg=page.locator('//p[text()="Please enter a valid 10-digit mobile number."]')
    }
    public async validatingProfileDetails(contactNum:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.profileMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.editIcon.click()
        await this.contactNumber.pressSequentially(contactNum,{delay:100})
        await this.updateBtn.click()
        await this.okayBtn.click()
        await this.page.waitForTimeout(5000)
        expect(await this.oldContactNumber.textContent()).toBe(contactNum)
    }
    public async validatingInvalidMobileNumber(contactNum:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.profileMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.editIcon.click()
        await this.contactNumber.pressSequentially(contactNum,{delay:100})
        await this.updateBtn.click()
        await this.page.waitForTimeout(2000)
        await expect(this.errorHeader).toBeVisible()
        const errorMsg=await this.errorMsg.innerText()
        expect(errorMsg).toContain("Please enter a valid 10-digit mobile number.")
        await this.okayBtn.click()
    }
}
export default ClientProfile;