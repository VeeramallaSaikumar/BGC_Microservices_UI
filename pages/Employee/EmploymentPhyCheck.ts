import { Locator, Page, expect } from "@playwright/test"
import path from "path"

class EmploymentPhyCheck {
  readonly page: Page
  readonly empmCheckPhy: Locator
  readonly status: Locator
  readonly editICon: Locator
  readonly employmentCheck: Locator
  readonly employmentHeader: Locator
  readonly empCode: (idx: number) => Locator
  readonly entries: Locator
  readonly comName: (idx: number) => Locator
  readonly designation: (idx: number) => Locator
  readonly location: (idx: number) => Locator
  readonly hrContactNumber: (idx: number) => Locator
  readonly hrContactEmail: (idx: number) => Locator
  readonly workingFrom: (idx: number) => Locator
  readonly workingTo: (idx: number) => Locator
  readonly empProof: (idx: number) => Locator
  readonly remarks: Locator
  readonly veriStatus: Locator
  readonly cancelBtn: Locator
  readonly submitBtn: Locator
  readonly tosfify:Locator
  constructor(page: Page) {
    this.page = page
    this.empmCheckPhy = page.locator("//div[text()='Employment Check (Physical)']")
    this.status = page.locator("//div[text()='Employment Check (Physical)']/../span")
    this.entries = page.locator("//div[text()='Employment Check (Physical)']/../p")
    this.editICon = page.locator("//div[text()='Employment Check (Physical)']/../../div[2]/button")
    this.employmentCheck = page.locator("//h2[text()='Employment Verification']")
    this.employmentHeader = page.locator(`(//h3[text()='Employment Details'])`)
    this.empCode = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[1]/div[1]/input`)
    this.comName = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[1]/div[2]/input`)
    this.designation = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[2]/div[1]/input`)
    this.location = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[2]/div[2]/input`)
    this.hrContactNumber = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[3]/div[1]/input`)
    this.hrContactEmail = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[3]/div[2]/input`)
    this.workingFrom = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[4]/div[1]/input`)
    this.workingTo = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[4]/div[2]/input`)
    this.empProof = (idx: number) => page.locator(`(//h3[text()='Employment Details '])[${idx}]/../div[5]/div[1]/input`)
    this.remarks = page.locator("//textarea[@placeholder='Add remarks here...']")
    this.cancelBtn = page.locator("button.cancel-button")
    this.veriStatus = page.locator("//input[@type='checkbox']")
    this.submitBtn = page.locator("button.submit-button")
    this.tosfify=page.locator("//div[text()='Employment verification submitted successfully!']")
  }
  public async validateEmployment() {
    if (await this.empmCheckPhy.isVisible()) {
      const empPhyStatus = await this.status.textContent()
      const totalEmployment = await this.entries.textContent()
      console.log(totalEmployment)
      if (empPhyStatus === "Work In Progress") {
        await this.editICon.click()
        await this.page.waitForTimeout(2000)
        await this.employmentCheck.isVisible()
        const totalEmploymentText = totalEmployment ?? ""
        const parts = totalEmploymentText.split(":")
        const count = parts.length > 1 ? parseInt(parts[1].trim()) : 0
        for (let i = 1; i <=count; i++) {
          await this.employmentHeader.isVisible()
          await this.empCode(i).isDisabled()
          await this.comName(i).isDisabled()
          await this.designation(i).isDisabled()
          await this.location(i).isDisabled()
          await this.page.waitForTimeout(2323)
          await this.hrContactNumber(i).isDisabled()
          await this.hrContactEmail(i).isDisabled()
          await this.workingFrom(i).isDisabled()
          await this.workingTo(i).isDisabled()
          await this.page.waitForTimeout(2323)
          await this.empProof(i).setInputFiles(path.resolve("testData/testFiles/experience_letterc.png"))    
          await this.page.waitForTimeout(2323)
          console.log("One file is uploaded")
        }
        await this.remarks.fill("Verified")
        await this.veriStatus.check()
        await this.submitBtn.click()
        await expect(this.tosfify).toBeVisible()
      }
      else console.log("Employment Phsical is Completed")
    }
    else console.log("Employment is not avaiable, is a fresher")
  }
  public async validatingWithoutVeriStatus(){
    if (await this.empmCheckPhy.isVisible()) {
      const empPhyStatus = await this.status.textContent()
      const totalEmployment = await this.entries.textContent()
      console.log(totalEmployment)
      if (empPhyStatus === "Work In Progress") {
        await this.editICon.click()
        await this.page.waitForTimeout(2000)
        await this.employmentCheck.isVisible()
        const totalEmploymentText = totalEmployment ?? ""
        const parts = totalEmploymentText.split(":")
        const count = parts.length > 1 ? parseInt(parts[1].trim()) : 0
        for (let i = 1; i <=count; i++) {
          await this.employmentHeader.isVisible()
          await this.empCode(i).isDisabled()
          await this.comName(i).isDisabled()
          await this.designation(i).isDisabled()
          await this.location(i).isDisabled()
          await this.page.waitForTimeout(2323)
          await this.hrContactNumber(i).isDisabled()
          await this.hrContactEmail(i).isDisabled()
          await this.workingFrom(i).isDisabled()
          await this.workingTo(i).isDisabled()
          await this.page.waitForTimeout(2323)
          await this.empProof(i).setInputFiles(path.resolve("testData/testFiles/experience_letterc.png"))   
          await this.page.waitForTimeout(2323)
          console.log("One file is uploaded")
        }
        await this.remarks.fill("Verified")
        await this.submitBtn.click()
        await expect(this.tosfify).toBeVisible()
      }
      else console.log("Employment Phsical is Completed")
    }
    else console.log("Employment is not avaiable, is a fresher")
  }
}
export default EmploymentPhyCheck