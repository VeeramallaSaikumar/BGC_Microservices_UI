import { Locator, Page, expect } from "@playwright/test";

class TotalCandidates {
    readonly page: Page
    readonly caseSubMenuBtn: Locator
    readonly totalCandidates: Locator
    readonly totalHeader: Locator
    readonly showNoEntries: Locator
    readonly candidateID: Locator
    readonly canName: Locator
    readonly caseInitiatedDate: Locator
    readonly caseInitiatedTime: Locator
    readonly bgcStartDate: Locator
    readonly bgcEndDate: Locator
    readonly status: Locator
    readonly viewDetailsIcon: Locator
    readonly finalReport: Locator
    readonly download: Locator
    readonly showingMsgText: Locator
    readonly rows: Locator
    readonly trueFaceLogo: Locator
    readonly repText: Locator
    readonly repPersonal: Locator
    readonly repAddress: Locator
    readonly repEdcuation: Locator
    readonly repCriminal: Locator
    readonly repDownload: Locator
    readonly candidateDetails: Locator
    readonly verifierDetails: Locator

    constructor(page: Page) {
        this.page = page
        this.caseSubMenuBtn = page.locator("//ul[@class='sidebar-menu']/div[5]")
        this.totalCandidates = page.locator("//span[text()='Total Candidates']")
        this.totalHeader = page.locator("p.client-header")
        this.showNoEntries = page.locator("//div[@class='entries-select']/select")
        this.candidateID = page.locator("td:nth-child(1)")
        this.canName = page.locator("td:nth-child(2)")
        this.caseInitiatedDate = page.locator("td:nth-child(6)")
        this.caseInitiatedTime = page.locator("td:nth-child(7)")
        this.bgcStartDate = page.locator("td:nth-child(8)")
        this.bgcEndDate = page.locator("td:nth-child(9)")
        this.status = page.locator("td:nth-child(10)")
        this.viewDetailsIcon = page.locator("td:nth-child(11) button:nth-of-type(1) svg")
        this.finalReport = page.locator("td:nth-child(11) button:nth-of-type(2) svg")
        this.showingMsgText = page.locator("div.pagination-summary")
        this.rows = page.locator("table tbody tr")
        this.trueFaceLogo = page.locator("img.report-logo")
        this.repText = page.locator("div.name-header")
        this.repPersonal = page.locator("//div[@id='personal-report']/h2")
        this.repAddress = page.locator("//div[@id='address-report']/h2")
        this.repEdcuation = page.locator("//div[@id='education-report']/h2")
        this.repCriminal = page.locator("//div[@id='criminal-report']/h2")
        this.repDownload = page.locator("button.report-action-button")
        this.candidateDetails = page.locator("//h3[@class='details-card-title' and text()='Candidate Details:']")
        this.verifierDetails = page.locator("//h3[@class='details-card-title' and text()='Verifier Details : ']")
        this.download = page.locator("")
    }
    public async downloadFinalReport() {
        await this.caseSubMenuBtn.click()
        await this.totalCandidates.click()
        await expect(this.totalHeader).toBeVisible()
        await this.showNoEntries.selectOption("50")
        await this.page.waitForTimeout(2000)
        const details = await this.rows.count()
        console.log("No.of Rows: ",details)
        await this.page.waitForTimeout(3000)
        for (let i = 0; i < details; i++) {
            const state = await this.rows.nth(i).locator(this.status).textContent()
            if (state === "COMPLETED") {
                console.log("one candidate found in completed")
                await this.page.waitForTimeout(2000)
                await this.rows.nth(i).locator(this.finalReport).click()
                await this.page.waitForLoadState("domcontentloaded")
                await expect(this.trueFaceLogo).toBeVisible()
                await expect(this.repText).toBeVisible()
                await expect(this.repPersonal).toBeVisible()
                await expect(this.repAddress).toBeVisible()
                await expect(this.repEdcuation).toBeVisible()
                await expect(this.repCriminal).toBeVisible()
                const [download] = await Promise.all([
                    this.page.waitForEvent('download'),  // waits for download event
                    this.repDownload.click(),            // triggers the download
                ]);
                const path = await download.path();
                console.log('Downloaded file path:', path);
                break
            }
        }
    }
    public async viewDetails(){
        await this.caseSubMenuBtn.click()
        await this.totalCandidates.click()
        await expect(this.totalHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const details = await this.rows.count()
        console.log("No.of Rows: ",details)
        await this.page.waitForTimeout(3000)
        for (let i = 0; i < details; i++) {
            console.log("No.of Rows: ",details)
            const state = await this.rows.nth(i).locator(this.status).textContent()
            await this.page.waitForTimeout(5000)
            if(state=="COMPLETED" || state=="YET_TO_START" || state=="WORK_IN_PROGRESS" || state=="VERIFIED"){
                await this.rows.nth(i).locator(this.viewDetailsIcon).click()
                await this.page.waitForTimeout(5000)
                break
            }
            else console.log("All are in Pending Submission")
        }
    }
    public async eyeIconAvailable(){
        await this.caseSubMenuBtn.click()
        await this.totalCandidates.click()
        await expect(this.totalHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const details = await this.rows.count()
        console.log("No.of Rows: ",details)
        await this.page.waitForTimeout(3000)
        for (let i = 0; i < details; i++) {
            const state = await this.rows.nth(i).locator(this.status).textContent()
            if(state=="PENDING_SUBMISSION")
                await this.rows.nth(i).locator(this.viewDetailsIcon).isDisabled()
            else(state=="COMPLETED" || state=="YET_TO_START" || state=="WORK_IN_PROGRESS" || state=="VERIFIED")
                await this.rows.nth(i).locator(this.viewDetailsIcon).isEnabled()
        }
    }
    public async downloadIconAvailable(){
        await this.caseSubMenuBtn.click()
        await this.totalCandidates.click()
        await expect(this.totalHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const details = await this.rows.count()
        console.log("No.of Rows: ",details)
        await this.page.waitForTimeout(3000)
        for (let i = 0; i < details; i++) {
            const state = await this.rows.nth(i).locator(this.status).textContent()
            if(state=="COMPLETED")
                await this.rows.nth(i).locator(this.finalReport).isEnabled()
            else(state=="PENDING_SUBMISSION" || state=="YET_TO_START" || state=="WORK_IN_PROGRESS" || state=="VERIFIED")
                await this.rows.nth(i).locator(this.finalReport).isDisabled()
        }
    }
}
export default TotalCandidates