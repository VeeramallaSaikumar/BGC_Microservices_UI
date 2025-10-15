import { expect, Locator, Page } from "@playwright/test";

class CandidateList {
    readonly page: Page
    readonly clientListMenubtn: Locator
    readonly clientName: Locator
    readonly clientEmail: Locator
    readonly clinetCompany: Locator
    readonly candidatelistpageheader:Locator
    readonly assignCandidatebtn: Locator
    readonly assignBtn: Locator
    readonly closeBtn: Locator
    readonly reportBtn: Locator
    readonly viewReportBtn: Locator
    readonly reportDetailsHeader: Locator
    readonly veiwDetailsHeader: Locator
    readonly rows: Locator
    readonly nthColumn: Locator
    readonly search: Locator
    readonly empAssignBtn: Locator
    readonly okayBtn: Locator
    readonly resultOfVerification: Locator
    readonly submitBtn: Locator
    readonly cancelBtn: Locator
    readonly verificationReportBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.clientListMenubtn = page.locator('//span[text()="Client List"]')
        this.clientName = page.locator('//table[@class="client-table"]/tbody/tr[1]/td[1]')
        this.clientEmail = page.locator('//table[@class="client-table"]/tbody/tr[1]/td[3]')
        this.clinetCompany = page.locator('//table[@class="client-table"]/tbody/tr[1]/td[2]')
        this.candidatelistpageheader = page.locator('h2')
        this.assignCandidatebtn = page.locator('//table[@class="client-table"]/tbody/tr[1]/td[5]/button[1]')
        this.assignBtn = page.locator('//div[@class="admin-table-container"]/table/tbody/tr[1]/td[5]/button')
        this.closeBtn = page.locator('')
        this.viewReportBtn = page.locator('//div[@class="admin-table-container"]/table/tbody/tr[1]/td[6]/button[2]')
        this.reportBtn = page.locator('//div[@class="admin-table-container"]/table/tbody/tr[1]/td[6]/button[2]')
        this.reportDetailsHeader = page.locator("//h1[@class='admin-main-heading']")
        this.veiwDetailsHeader= page.locator("//h1[@class='admin-main-heading']")
        this.rows = page.locator('table tbody tr')
        this.nthColumn = page.locator('td:nth-child(5) button')
        this.search = page.locator('//input[@placeholder="Search by Employee ID or Name"]')
        this.empAssignBtn = page.locator('//button[@class="admin-assign-btn admin-assign-confirm-modal"]')
        this.okayBtn = page.locator('//button[text()="OK"]')
        this.resultOfVerification = page.locator('//select[@class="select-box"]')
        this.verificationReportBtn= page.locator('//button[@class="icon-btn" and @title="View Candidate Report"]')
        this.submitBtn = page.locator('//button[text()="Submit"]')
        this.cancelBtn = page.locator('//button[text()="Cancel"]')
    }
    public async validatingAssignCandidateToAgent() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(3000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(5000)
        const rowCount = await this.rows.count()
        console.log(`Total rows: ${rowCount}`);
        let assignedcount = 0
        for (let i = 0; i < rowCount; i++) {
            const button = this.rows.nth(i).locator('td:nth-child(5) button')
            const btnText = await button.innerText()
            const candidateName= await this.rows.nth(i).locator('td:nth-child(2)').innerText()
            const canStatus=await this.rows.nth(i).locator('td:nth-child(4)').innerText()

            if (btnText === "Assign") {
                await this.nthColumn.nth(i).click()
                await this.search.pressSequentially("vikas", { delay: 1000 })
                await this.empAssignBtn.click()
                await this.page.waitForTimeout(2000)
                await this.okayBtn.click()
                expect(await button.innerText()).toBe("Reassign")
                assignedcount++;
            }
            if (assignedcount === 0) {
                console.log(`already assigned ant the Candidate status is: ${canStatus}`);
            } else {
                console.log(`${candidateName} candidate(s) assigned successfully`);
            }
        }
    }
    public async validatingReassignCandidateToAgent() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(3000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(3000)
        const rowCount = await this.rows.count()
        await this.rows.first().waitFor({ state: 'visible', timeout: 5000 });
        console.log(`Total rows: ${rowCount}`);
        let assignedcount = 0
        for (let i = 0; i < rowCount; i++) {
            const button = this.rows.nth(i).locator('td:nth-child(5) button')
            const btnText = await button.innerText()
            const candidateName= await this.rows.nth(i).locator('td:nth-child(2)').innerText()
            const canStatus=await this.rows.nth(i).locator('td:nth-child(4)').innerText()

            if (btnText === "Reassign") {
                await this.nthColumn.nth(i).click()
                await this.search.pressSequentially("vikas", { delay: 1000 })
                await this.empAssignBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.okayBtn.click()
                expect(await button.innerText()).toBe("Reassign")
                assignedcount++;
            }
            if (assignedcount === 0) {
                console.log(`${candidateName} already ${canStatus}`);
            } else {
                console.log(`${candidateName} assigned successfully`);
            }
        }
    }
    public async validatingViewReport() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(3000)
        await this.viewReportBtn.click()
        await this.page.waitForTimeout(2000)
        expect(await this.veiwDetailsHeader.innerText()).toBe("Review Candidate Details")
    }
    public async validatingResultOfVerification() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(3000)
        const rowCount= await this.rows.count()
        console.log(`Total rows: ${rowCount}`);
        for(let i=0;i<rowCount;i++){
            const resultButton= this.rows.nth(i).locator(this.verificationReportBtn)
            if(await resultButton.isVisible()){
                await resultButton.click()
                await this.page.waitForTimeout(2000)
                await this.resultOfVerification.click()
                await this.resultOfVerification.selectOption({ index: 6})
                await this.cancelBtn.scrollIntoViewIfNeeded()
                await this.cancelBtn.click()
                await this.page.waitForTimeout(2000)
                expect(this.candidatelistpageheader).toBeVisible()
                break
            }
            else{
                console.log("row: "+(i+1)+" does not have verification report button");
            }
        }         
    }
    public async validatingCandidateList(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(3000)
        expect(this.candidatelistpageheader).toBeVisible()
        const rowCount= await this.rows.count()
        console.log(`Total Candidates are: ${rowCount}`);
        if(rowCount==0){
            console.log("No candidates available for this client");
        }
    }
    public async validatingAssignCandidateToAgentInvalid(){
     await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(3000)
        await this.assignCandidatebtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForTimeout(5000)
        const rowCount = await this.rows.count()
        console.log(`Total rows: ${rowCount}`);
        let assignedcount = 0
        for (let i = 0; i < rowCount; i++) {
            const button = this.rows.nth(i).locator('td:nth-child(5) button')
            const btnText = await button.innerText()
            const candidateName= await this.rows.nth(i).locator('td:nth-child(2)').innerText()
            const canStatus=await this.rows.nth(i).locator('td:nth-child(4)').innerText()

            if (btnText === "Assign") {
                await this.nthColumn.nth(i).click()
                await this.search.pressSequentially("vikas", { delay: 1000 })
                // await this.
                await this.page.waitForTimeout(2000)
                await this.okayBtn.click()
                expect(await button.innerText()).toBe("Reassign")
                assignedcount++;
            }
            if (assignedcount === 0) {
                console.log(`already assigned ant the Candidate status is: ${canStatus}`);
            } else {
                console.log(`${candidateName} candidate(s) assigned successfully`);
            }
        }
    }
}
export default CandidateList;