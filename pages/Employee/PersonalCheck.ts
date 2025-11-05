import { expect, Locator, Page } from "@playwright/test";

class PersonalCheck {
    readonly page: Page;
    readonly perCheck: Locator
    readonly status: Locator
    readonly editBTn: Locator
    readonly perDetailsHeader: Locator
    readonly profilePhoto: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly fatherName: Locator
    readonly email: Locator
    readonly dob: Locator
    readonly phone: Locator
    readonly remarks: Locator
    readonly veriStatus: Locator
    readonly cancelBtn: Locator
    readonly SubmitBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.perCheck = page.locator("//div[text()='Personal Info']")
        this.status = page.locator("//div[@class='candidate-checks-grid']/div[1]/div/span")
        this.editBTn = page.locator("//div[@class='check-actions']/button")
        this.perDetailsHeader = page.locator("//h3[text()='Personal Details']")
        this.profilePhoto = page.locator("img.candidate-profile-image")
        this.firstName = page.locator("input#firstName")
        this.lastName = page.locator("input#lastName")
        this.fatherName = page.locator("input#fatherName")
        this.email = page.locator("input#email")
        this.dob = page.locator("input#dob")
        this.phone = page.locator("input#mobileNumber")
        this.remarks = page.locator("textarea#remarks")
        this.veriStatus = page.locator("//input[@type='checkbox']")
        this.cancelBtn = page.locator("button.cancel-button")
        this.SubmitBtn = page.locator("button.submit-button")
    }
    public async personalCheck() {
        const perStatus = await this.status.textContent()
        if (perStatus === "Work In Progress") {
            await this.editBTn.first().click()
            await expect(this.perDetailsHeader).toBeVisible()
            await expect(this.profilePhoto).toBeVisible()
            await expect(this.firstName).toBeVisible()
            await expect(this.lastName).toBeVisible()
            await expect(this.fatherName).toBeVisible()
            await expect(this.email).toBeVisible()
            await expect(this.dob).toBeVisible()
            await expect(this.phone).toBeVisible()
            const fields = [
                this.firstName,
                this.lastName,
                this.fatherName,
                this.email,
                this.dob,
                this.phone,
            ];
            for (const field of fields) {
                const value = await field.inputValue();
                expect(value.trim()).not.toBe('');
            }
            await this.remarks.fill("Personal Details Verified")
            await this.veriStatus.check()
            await expect(this.cancelBtn).toBeVisible()
            await expect(this.SubmitBtn).toBeVisible()
            await this.SubmitBtn.click()
            await this.page.waitForTimeout(3000)
            await expect(this.status).toHaveText("Completed")
            console.log("Personal Check Completed")
        }
        else {
            console.log("Personal Check is already Completed")
            await this.page.waitForTimeout(3000)
            const status = await this.status.textContent()
            console.log("Status is: " + status)
            await expect(this.status).toHaveText("Completed")
        }
    }
    public async validatingPersonalCheckwithInvalid() {
        const perStatus = await this.status.textContent()
        if (perStatus === "Work In Progress") {
        await this.editBTn.click()
        await expect(this.perDetailsHeader).toBeVisible()
        await expect(this.profilePhoto).toBeVisible()
        await expect(this.firstName).toBeVisible()
        await expect(this.lastName).toBeVisible()
        await expect(this.fatherName).toBeVisible()
        await expect(this.email).toBeVisible()
        await expect(this.dob).toBeVisible()
        await expect(this.phone).toBeVisible()
        await this.remarks.fill("Personal Details Verified")
        await expect(this.cancelBtn).toBeVisible()
        await expect(this.SubmitBtn).toBeVisible()
        await this.SubmitBtn.click()
        await this.page.waitForTimeout(3000)
        await expect(this.status).toHaveText("Work in Progress")
        }
        else console.log("Personal Check is already Completed")
    }
}
export default PersonalCheck