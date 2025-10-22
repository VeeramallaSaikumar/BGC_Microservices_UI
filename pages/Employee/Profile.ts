import { Locator, Page, expect } from "@playwright/test"

class EmployeeProfile {
    readonly page: Page
    readonly profileMenuBtn: Locator
    readonly profileInfoHeader: Locator
    readonly name: Locator
    readonly email: Locator
    readonly empCode: Locator
    readonly phoneNumber: Locator
    readonly update: Locator
    readonly cancelBtn: Locator
    readonly saveBtn: Locator
    readonly errorMsg:Locator
    readonly tostifyMsg:Locator
    constructor(page: Page) {
        this.page = page
        this.profileMenuBtn = page.locator("//a[text()='Profile']")
        this.profileInfoHeader = page.locator("div.emp-profile-info-header")
        this.name = page.locator("//label[text()='Name']//following-sibling::input")
        this.email = page.locator("//label[text()='Email']//following-sibling::input")
        this.empCode = page.locator("//label[text()='Employee Code']//following-sibling::input")
        this.phoneNumber = page.locator("//div[@class='emp-profile-phone-input-wrapper']/input")
        this.update = page.locator("button.emp-profile-field-edit-button")
        this.cancelBtn = page.locator("button.emp-profile-field-cancel-button")
        this.saveBtn = page.locator("button.emp-profile-field-save-button")
        this.errorMsg=page.locator("p.emp-profile-field-error-message")
        this.tostifyMsg=page.locator("//div[text()='Profile Updated Successfully']")
    }
    public async validatingUpMobile() {
        await this.profileMenuBtn.click()
        await this.profileInfoHeader.isVisible()
        await this.name.isVisible()
        await this.email.isVisible()
        await this.empCode.isVisible()
        await this.phoneNumber.isVisible()
        await this.update.click()
        await this.phoneNumber.fill("8984439844")
        await this.saveBtn.click()
        await expect(this.tostifyMsg).toBeVisible()
        await this.page.waitForTimeout(2002)
    }
    public async validatingUpMobileWithInVaild() {
        await this.profileMenuBtn.click()
        await this.profileInfoHeader.isVisible()
        await this.name.isVisible()
        await this.email.isVisible()
        await this.empCode.isVisible()
        await this.phoneNumber.isVisible()
        await this.update.click()
        await this.phoneNumber.fill("89844")
        await this.saveBtn.click()
        await expect(this.errorMsg).toBeVisible()
        await this.page.waitForTimeout(2002)
    }
}
export default EmployeeProfile