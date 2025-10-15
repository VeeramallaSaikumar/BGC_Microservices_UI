import { expect, Locator, Page } from "@playwright/test";

class AssignedCandidates {
    readonly page: Page
    readonly assCanSubMenuBtn: Locator
    readonly assCanListHeader: Locator
    readonly rows: Locator
    readonly viewIcon: Locator
    readonly viewDetailsHeader: Locator
    readonly startBGCBtn: Locator
    readonly status: Locator
    readonly emailIcon: Locator
    readonly uniqueID: Locator
    readonly allDetailsHeader: Locator
    readonly toastMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.assCanSubMenuBtn = page.locator("//a[text()='Assigned Candidates']")
        this.assCanListHeader = page.locator("h2.assigne-candidate-list-header")
        this.rows = page.locator("//table/tbody/tr")
        this.viewIcon = page.locator("//button[@title='View Details']")
        this.viewDetailsHeader = page.locator("h1.report-main-title")
        this.startBGCBtn = page.locator("button.start-bgc-button")
        this.status = page.locator("td:nth-child(4)")
        this.emailIcon = page.locator("//button[@class='action-button mail-button']")
        this.uniqueID = page.locator("td:nth-child(1)")
        this.allDetailsHeader = page.locator("h2.cadidate-details-header")
        this.toastMessage = page.locator("section.Toastify")
    }
    public async ValidatingViewDeatils() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let wip = 0, veri = 0, com = 0, yts = 0;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            if (bgcStatus === "WORK_IN_PROGRESS") {
                wip++;
            } else if (bgcStatus === "VERIFIED") {
                veri++;
            } else if (bgcStatus === "COMPLETED") {
                com++;
            }
            else if (bgcStatus === "YET_TO_START") {
                yts++;
            }
        }
        console.log("Summary of BGC Status:");
        console.log("-----------------------");
        console.log("Work in Progress Candidates:", wip);
        console.log("Verified Candidates:", veri);
        console.log("Completed Candidates:", com);
        if (wip === 0) console.log("No Candidates in Work in Progress");
        if (veri === 0) console.log("No Verified Candidates");
        if (com === 0) console.log("No Completed status Candidates");
        await this.viewIcon.first().click()
        await expect(this.viewDetailsHeader).toBeVisible()
    }
    public async validatingSendMailVisiblity() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let wip = 0, veri = 0, com = 0, yts = 0;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            const canId = await this.rows.nth(i).locator(this.uniqueID).textContent();
            if (bgcStatus === "YET_TO_START") {
                yts++
                const emailIconVisible = await this.rows.nth(i).locator(this.emailIcon).isDisabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Email icon is disabled for the candidate ${canId} with YET_TO_START status`);
            }
            if (bgcStatus === "WORK_IN_PROGRESS") {
                wip++
                const emailIconVisible = await this.rows.nth(i).locator(this.emailIcon).isDisabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Email icon is disabled for the candidate ${canId} with WORK_IN_PROGRESS status`);
            }
            if (bgcStatus === "VERIFIED") {
                veri++
                const emailIconVisible = await this.rows.nth(i).locator(this.emailIcon).isEnabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Email icon is visible for the candidate ${canId} with VERIFIED status`);
            }
            if (bgcStatus === "COMPLETED") {
                com++
                const emailIconVisible = await this.rows.nth(i).locator(this.emailIcon).isDisabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Email icon is disabled for the candidate ${canId} with COMPLETED status`);
            }
        }
        if (yts === 0) console.log("No Candidates in Yet to Start");
        if (wip === 0) console.log("No Candidates in Work in Progress");
        if (veri === 0) console.log("No Verified Candidates");
        if (com === 0) console.log("No Completed status Candidates");

    }
    public async validatingStartBGCButton() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let wip = 0, veri = 0, com = 0, yts = 0;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            const canId = await this.rows.nth(i).locator(this.uniqueID).textContent();
            if (bgcStatus === "YET_TO_START") {
                yts++
                const startBGCBtnVisible = await this.rows.nth(i).locator(this.startBGCBtn).isEnabled()
                expect(startBGCBtnVisible).toBeTruthy()
                console.log(`Start BGC button is visible for the candidate ${canId} with YET_TO_START status`);
            }
            if (bgcStatus === "WORK_IN_PROGRESS") {
                wip++
                const emailIconVisible = await this.rows.nth(i).locator(this.startBGCBtn).isEnabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Start BGC button is visible for the candidate ${canId} with WORK_IN_PROGRESS status`);
            }
            if (bgcStatus === "VERIFIED") {
                veri++
                const emailIconVisible = await this.rows.nth(i).locator(this.startBGCBtn).isDisabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Start BGC button is disabled for the candidate ${canId} with VERIFIED status`);
            }
            if (bgcStatus === "COMPLETED") {
                com++
                const emailIconVisible = await this.rows.nth(i).locator(this.startBGCBtn).isDisabled()
                expect(emailIconVisible).toBeTruthy()
                console.log(`Start BGC button is disabled for the candidate ${canId} with COMPLETED status`);
            }
        }
        if (yts === 0) console.log("No Candidates in Yet to Start");
        if (wip === 0) console.log("No Candidates in Work in Progress");
        if (veri === 0) console.log("No Verified Candidates");
        if (com === 0) console.log("No Completed status Candidates");
    }
    public async validatingStartBGC() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let yts = 0;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            const canId = await this.rows.nth(i).locator(this.uniqueID).textContent();
            if (bgcStatus === "YET_TO_START" || bgcStatus === "WORK_IN_PROGRESS") {
                yts++
                await this.rows.nth(i).locator(this.startBGCBtn).click()
                await expect(this.allDetailsHeader).toBeVisible()
                console.log(`BGC Process started for the candidate ${canId} with ${bgcStatus} status`);
            }
            if (yts === 0) console.log("No Candidates to start BGC");
        }
    }
    public async validatingGenerateReport() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let reportGEn = 0;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            const canId = await this.rows.nth(i).locator(this.uniqueID).textContent();
            if (bgcStatus === "Verified") {
                reportGEn++
                await this.rows.nth(i).locator(this.emailIcon).click()
                await expect(this.toastMessage).toHaveText('Candidate Status updated Successfully')
                console.log(`BGC Process started for the candidate ${canId} with ${bgcStatus} status`);
            }
            if (reportGEn === 0) console.log("No Candidates to Generate Report");
        }
    }
    public async startBGCForCandidate() {
        await this.assCanSubMenuBtn.click()
        await expect(this.assCanListHeader).toBeVisible()
        await this.page.waitForTimeout(3000)
        const rowsCount = await this.rows.count()
        console.log("Total Candidates Assigned are:", rowsCount)
        let isClicked = false;
        for (let i = 0; i < rowsCount; i++) {
            const bgcStatus = (await this.rows.nth(i).locator(this.status).textContent())?.trim().toUpperCase();
            const canId = await this.rows.nth(i).locator(this.uniqueID).textContent();
            if (bgcStatus === "YET_TO_START" || bgcStatus === "WORK_IN_PROGRESS") {
                await this.rows.nth(i).locator(this.startBGCBtn).click()
                await expect(this.allDetailsHeader).toBeVisible()
                console.log(`BGC Process started for the candidate ${canId} with ${bgcStatus} status`);
                isClicked = true;
                break
            }
            if (!isClicked) {
                console.log("⚠️ No candidate found with status 'YET_TO_START' or 'WORK_IN_PROGRESS'.");
            }
        }
    }
}
export default AssignedCandidates