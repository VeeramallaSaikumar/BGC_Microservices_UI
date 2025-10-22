import { Locator, Page, expect } from "@playwright/test"

class CriminalCheck {
    readonly page: Page
    readonly crminalCheck: Locator
    readonly status: Locator
    readonly editIcon: Locator
    readonly backIcon: Locator
    readonly CriminaCheckHeader: Locator
    readonly fullName: Locator
    readonly fatherName: Locator
    readonly year: Locator
    readonly address: Locator
    readonly state: Locator
    readonly submitBtn: Locator
    readonly rows: Locator
    readonly eCourtRecord: Locator
    readonly noResultsMsg: Locator
    readonly yearResult: Locator
    readonly petitioner: Locator
    readonly respondent: Locator
    readonly respondentAddress: Locator
    readonly stateResult: Locator
    readonly actionsSave: Locator
    readonly sucess: Locator
    readonly fail: Locator
    readonly viewMore: Locator

    constructor(page: Page) {
        this.page = page
        this.crminalCheck = page.locator("//div[text()='Criminal Check']")
        this.status = page.locator("//div[text()='Criminal Check']//following-sibling::span")
        this.editIcon = page.locator("//div[text()='Criminal Check']/..//following-sibling::div/button")
        this.backIcon = page.locator("button.criminal-check-cancel-button")
        this.CriminaCheckHeader = page.locator("p.criminal-form-title")
        this.fullName = page.locator("input#fullname")
        this.fatherName = page.locator("input#fathername")
        this.year = page.locator("input#year")
        this.address = page.locator("input#address")
        this.state = page.locator("input#state")
        this.submitBtn = page.locator("//button[@type='submit']")
        this.eCourtRecord = page.locator("h6.criminal-card-title")
        this.noResultsMsg = page.locator("td.criminal-no-data")
        this.yearResult = page.locator("td:nth-child(1)")
        this.petitioner = page.locator("td:nth-child(2)")
        this.respondent = page.locator("td:nth-child(3)")
        this.respondentAddress = page.locator("td:nth-child(4)")
        this.stateResult = page.locator("td:nth-child(5)")
        this.actionsSave = page.locator("td:nth-child(6)")
        this.sucess = page.locator("//button[@class='criminal-btn criminal-btn-success']")
        this.fail = page.locator("//button[@class='criminal-btn criminal-btn-danger']")
        this.viewMore = page.locator("//button[@class='criminal-btn criminal-btn-info']")
        this.rows = page.locator("table tbody tr")
    }
    public async criminalCheckWithFailBtn(fullName: string, fathername: string, year: string, address: string, state: string) {
        const cCStatus = await this.status.textContent()
        if (cCStatus === "Work In Progress") {
            await this.editIcon.click()
            await this.page.waitForTimeout(2000)
            await this.CriminaCheckHeader.isVisible()
            await this.fullName.fill(fullName)
            await this.fatherName.fill(fathername)
            await this.year.fill(year)
            await this.address.fill(address)
            await this.state.fill(state)
            await this.submitBtn.click()
            await this.page.waitForLoadState("domcontentloaded")
            await this.eCourtRecord.isVisible()
            const noOfRows = await this.rows.count()
            for (let i = 0; i < noOfRows; i++) {
                const year = await this.rows.nth(i).locator(this.yearResult).textContent()
                const petitio = await this.rows.nth(i).locator(this.petitioner).textContent()
                const repon = await this.rows.nth(i).locator(this.respondent).textContent()
                const address = await this.rows.nth(i).locator(this.respondentAddress).textContent()
                const stateR = await this.rows.nth(i).locator(this.stateResult).textContent()
                console.log(`Year: ${year}`)
                console.log(`Petitioner: ${petitio}`)
                console.log(`Respondent: ${repon}`)
                console.log(`Respondent Address: ${address}`)
                console.log(`State: ${stateR}`)
            }
            await this.rows.nth(2).locator(this.actionsSave).click()
            await this.fail.click()
            await this.page.waitForTimeout(2000)
            await expect(this.status).toHaveText("Completed")
        }
        else console.log("Criminal Check is completed")
    }
    public async criminalCheckWithSucessBtn(fullName: string, fathername: string, year: string, address: string, state: string) {
        const cCStatus = await this.status.textContent()
        if (cCStatus === "Work In Progress") {
            await this.editIcon.click()
            await this.page.waitForTimeout(2000)
            await this.CriminaCheckHeader.isVisible()
            await this.fullName.fill(fullName)
            await this.fatherName.fill(fathername)
            await this.page.waitForTimeout(2000)
            await this.year.fill(year.toString())
            await this.address.fill(address)
            await this.state.fill(state)
            await this.page.waitForTimeout(2000)
            await this.submitBtn.click()
            await this.page.waitForLoadState("domcontentloaded")
            await this.eCourtRecord.isVisible()
            await this.sucess.click()
            await this.page.waitForTimeout(2000)
            await expect(this.status).toHaveText("Completed")
        }
        else console.log("Criminal Check is completed")
    }
}
export default CriminalCheck