import {Locator,Page,expect } from "@playwright/test"

class EmploymentPhyCheck {
      readonly page:Page
      readonly empmCheckPhy:Locator
      readonly status:Locator
      readonly editICon:Locator
      readonly employmentCheck:Locator
      readonly employmentHeader:Locator
      readonly empCode:Locator
    //   readonly comName:Locator
    //   readonly designation:Locator
    //   readonly location:Locator
    //   readonly hrContactNumber:Locator
    //   readonly hrContactEmail:Locator
    //   readonly workingFrom:Locator
    //   readonly workingTo:Locator
    //   readonly empProof:Locator
      constructor(page:Page){
        let i:number=0
        this.page=page
        this.empmCheckPhy=page.locator("//div[text()='Employment Check (Physical)']")
        this.status=page.locator("//div[text()='Employment Check (Physical)']/../span")
        this.editICon=page.locator("//div[text()='Employment Check (Physical)']/../../div[2]/button")
        this.employmentCheck=page.locator("//h2[text()='Employment Verification']")
        this.employmentHeader=page.locator(`(//h3[text()='Employment Details '])[${i}]/../div[1]/div[1]/input`)
        this.empCode=page.locator("//h3[text()='Employment Details ']")
      }
      public async validateEmployment(){
       if(await this.employmentCheck.isVisible())
        await this.employmentHeader
      }
}
export default EmploymentPhyCheck