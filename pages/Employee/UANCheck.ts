import { Page, expect, Locator } from "@playwright/test"

class UANCheck {
    readonly page: Page
    readonly uanCheck: Locator
    readonly status: Locator
    readonly editIcon: Locator
    readonly employmentCheckHeader: Locator
    readonly employmentCheckRecordHeader: Locator
    readonly uanNumber: Locator
    readonly fetchDetails: Locator
    readonly rows: Locator
    readonly veriStatus: Locator
    readonly cancelBtn: Locator
    readonly submitBtn: Locator
    readonly toastMessage:Locator

    constructor(page: Page) {
        this.page = page
        this.uanCheck = page.locator("//div[text()='UAN Check']")
        this.status = page.locator("//div[text()='UAN Check']//following-sibling::span")
        this.editIcon = page.locator("//div[text()='UAN Check']/../../div[2]/button")
        this.employmentCheckHeader = page.locator("//h2[text()='Employment Check']")
        this.employmentCheckRecordHeader = page.locator("//h2[text()='Employment Check Records']")
        this.uanNumber = page.locator("input#uanNumber")
        this.fetchDetails = page.locator("button.uan-fetch-button")
        this.rows = page.locator("table thead tr")
        this.veriStatus = page.locator("input.uan-verification-checkbox")
        this.cancelBtn = page.locator("button.uan-cancel-button")
        this.submitBtn = page.locator("button.uan-submit-button")
        this.toastMessage=page.locator("//div[text()='Please check Verification Status before submitting.']")
    }
    public async validateUANCheck() {
        if (await this.uanCheck.isVisible()) {
            const uanStatus = await this.status.textContent()
            if (uanStatus === "Work in Progress") {
                await this.editIcon.click()
                await this.page.waitForTimeout(2000)
                expect(await this.employmentCheckHeader.isVisible())
                expect(await this.employmentCheckRecordHeader.isVisible())
                await this.uanNumber.fill("123213432234")
                await this.fetchDetails.click()
                await this.page.waitForTimeout(2000)
                const rowCount = await this.rows.count()
                console.log("UAN Check Details")
                console.log("-----------------")
                for (let i = 0; i < rowCount; i++) {
                    const comapnyName = this.rows.nth(i).locator("td:nth-child(8)").textContent()
                    const workingFrom = this.rows.nth(i).locator("td:nth-child(4)").textContent()
                    const workingTo = this.rows.nth(i).locator("td:nth-child(5)").textContent()
                    console.log(`${comapnyName}: ${workingFrom} - ${workingTo}`)
                }
                await this.veriStatus.check()
                await this.submitBtn.click()
                await this.page.waitForTimeout(2220)
                await expect(this.status).toHaveText("Completed");
            }
            else console.log("UAN Check is completed for this Candidate")
        }
        else console.log("UAN Check is not available for this Candidate")
    }
    public async validatingUANCheckWithoutVeri(){
        if (await this.uanCheck.isVisible()) {
            const uanStatus = await this.status.textContent()
            if (uanStatus === "Work in Progress") {
                await this.editIcon.click()
                await this.page.waitForTimeout(2000)
                expect(await this.employmentCheckHeader.isVisible())
                expect(await this.employmentCheckRecordHeader.isVisible())
                await this.uanNumber.fill("123213432234")
                await this.fetchDetails.click()
                await this.page.waitForTimeout(2000)
                await this.submitBtn.click()
                await this.page.waitForTimeout(220)
                await expect(this.toastMessage).toBeVisible()               
            }
            else console.log("UAN Check is completed for this Candidate")
        }
        else console.log("UAN Check is not available for this Candidate")
    }
}
export default UANCheck
