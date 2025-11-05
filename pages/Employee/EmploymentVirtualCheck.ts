import { Locator, Page, expect } from "@playwright/test"
import path from "path"

class EmployeementVirtualCheck {
    readonly page: Page
    readonly virtualEmpHeader: Locator
    readonly attachmentBtn: Locator
    readonly entries: Locator
    readonly status: Locator
    readonly editIcon: Locator
    readonly vitualVeriHeader: Locator
    readonly hrContactHeader: Locator
    readonly candidateName: Locator
    readonly candidareEmail: Locator
    readonly hrNumber: Locator
    readonly radioBtn: Locator
    readonly forms: Locator
    readonly hrEmail: Locator
    readonly mailTriggered: Locator
    readonly lastSentOn: Locator
    readonly cancelBtn: Locator
    readonly sendEmailBtn: Locator
    readonly addVeriHeader: Locator
    readonly companyName: Locator
    readonly chooseFile: Locator
    readonly remarks: Locator
    readonly veriStatus: Locator
    readonly canBtn: Locator
    readonly submBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.virtualEmpHeader = page.locator("//div[text()='Employment Check (Virtual)']")
        this.attachmentBtn = page.locator("button.add-attachment-button")
        this.entries = page.locator("//div[text()='Employment Check (Virtual)']//following-sibling::p")
        this.status = page.locator("//div[text()='Employment Check (Virtual)']//following-sibling::span")
        this.editIcon = page.locator("//div[text()='Employment Check (Virtual)']/..//following-sibling::div/button[2]")
        this.vitualVeriHeader = page.locator("h1.employee-virtual-title")
        this.hrContactHeader = page.locator("div.employee-virtual-section-title")
        this.candidateName = page.locator("//label[text()='Candidate Name']/../input")
        this.candidareEmail = page.locator("//label[text()='Candidate Email']/../input")
        this.hrNumber = page.locator("//span[text()='HR Contact Number']//following-sibling::span")
        this.hrEmail = page.locator("//span[text()='HR Contact Email']//following-sibling::span")
        this.mailTriggered = page.locator("//span[text()='Mail Triggered']//following-sibling::span")
        this.lastSentOn = page.locator("//span[text()='Last Sent On']//following-sibling::span")
        this.cancelBtn = page.locator("button.employee-virtual-cancel-button")
        this.sendEmailBtn = page.locator("button.employee-virtual-send-email-button")
        this.addVeriHeader = page.locator("//h2[text()='Add Verification Proof']")
        this.companyName = page.locator("h3.attachment-upload-section-title")
        this.chooseFile = page.locator("label.attachment-choose-file-button")
        this.remarks = page.locator("textarea.attachment-remarks-textarea")
        this.veriStatus = page.locator("input.attachment-verification-checkbox")
        this.canBtn = page.locator("button.attachment-cancel-button")
        this.submBtn = page.locator("button.attachment-submit-button")
        this.forms = page.locator("//div[@class='attachment-file-uploads-section']")
        this.radioBtn = page.locator("//div[@class='employee-virtual-hr-contacts-list']")
    }
    public async validatingVirtualCheck() {

        if (await this.virtualEmpHeader.isVisible()) {
            if (await this.status.textContent() === "Work In Progress") {
                await this.editIcon.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.vitualVeriHeader.isVisible()
                await this.hrContactHeader.isVisible()
                await this.candidateName.isVisible()
                await this.candidareEmail.isVisible()
                const companies = await this.radioBtn.count()
                for (let i = 0; i < companies; i++) {
                    console.log(`Candidate worked in : ${companies}`)
                    const hrContactNumber = await this.radioBtn.nth(i).locator(this.hrNumber).textContent()
                    console.log(`Hr contact Number: ${hrContactNumber}`)
                    const hrEmailId = await this.radioBtn.nth(i).locator(this.hrEmail).textContent()
                    console.log(`Hr Email ID: ${hrEmailId}`)
                    const emailTriggered = await this.radioBtn.nth(i).locator(this.mailTriggered).textContent()
                    console.log(`No.of times the eamil trrigered is : ${emailTriggered}`)
                    const lastSentDate = await this.radioBtn.nth(i).locator(this.lastSentOn).textContent()
                    console.log(`last email triigered on date: ${lastSentDate}`)
                }
                await this.sendEmailBtn.click()
                console.log("Email Sent Sucessfully")
                await this.page.waitForLoadState("domcontentloaded")
                await this.attachmentBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.addVeriHeader.isVisible()
                const proofs = await this.forms.count()
                for (let j = 0; j < proofs; j++) {
                    await this.forms.nth(j).locator(this.companyName).isVisible()
                    const header = await this.forms.nth(j).locator(this.companyName).textContent()
                    console.log(`Orgnaization name: ${header}`)
                    const filechoose = path.resolve("testData/testFiles/experience_letterc.png")
                    await this.chooseFile.setInputFiles(filechoose)
                }
                await this.remarks.fill("Verified")
                await this.veriStatus.check()
                await this.page.waitForTimeout(3000)
                await this.submBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await expect(this.status).toHaveText('Completed')
            }
            else console.log("Employment Check is already done")
        }
        else console.log("Employment Virtual Check is not available for this candidate is a fresher")
    }
    public async validatingVirtualCheckWithoutVerification() {
        if (await this.virtualEmpHeader.isVisible()) {
            if (await this.status.textContent() === "Work In Progress") {
                await this.editIcon.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.vitualVeriHeader.isVisible()
                await this.hrContactHeader.isVisible()
                await this.candidateName.isVisible()
                await this.candidareEmail.isVisible()
                const companies = await this.radioBtn.count()
                for (let i = 0; i < companies; i++) {
                    console.log(`Candidate worked in : ${companies}`)
                    const hrContactNumber = await this.radioBtn.nth(i).locator(this.hrNumber).textContent()
                    console.log(`Hr contact Number: ${hrContactNumber}`)
                    const hrEmailId = await this.radioBtn.nth(i).locator(this.hrEmail).textContent()
                    console.log(`Hr Email ID: ${hrEmailId}`)
                    const emailTriggered = await this.radioBtn.nth(i).locator(this.mailTriggered).textContent()
                    console.log(`No.of times the eamil trrigered is : ${emailTriggered}`)
                    const lastSentDate = await this.radioBtn.nth(i).locator(this.lastSentOn).textContent()
                    console.log(`last email triigered on date: ${lastSentDate}`)
                }
                await this.sendEmailBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.attachmentBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await this.addVeriHeader.isVisible()
                const proofs = await this.forms.count()
                for (let j = 0; j < proofs; j++) {
                    await this.forms.nth(j).locator(this.companyName).isVisible()
                    const header = await this.forms.nth(j).locator(this.companyName).textContent()
                    console.log(`Orgnaization name: ${header}`)
                    await this.chooseFile.setInputFiles(path.resolve("testData/testFiles/experience_letterc.png"))
                }
                await this.remarks.fill("Verified")
                await this.submBtn.click()
                await this.page.waitForLoadState("domcontentloaded")
                await expect(this.status).toHaveText('Work In Progress')
            }
            else console.log("Employment Check is already done")
        }
        else console.log("Employment Virtual Check is not available for this candidate is a fresher")
    }
}
export default EmployeementVirtualCheck