import { expect,Locator, Page } from "@playwright/test";

class AddCandidate {
    readonly page:Page
    readonly AddCandidateMenuBtn:Locator
    readonly AddCanHeader:Locator
    readonly canName:Locator
    readonly canEmail:Locator
    readonly canContactNum:Locator
    readonly candob:Locator
    readonly registerCanBtn:Locator
    readonly canSuccessMsg:Locator
    readonly okBtn:Locator
    readonly canErrorMsg:Locator
    readonly canNameErrorMsg:Locator
    readonly canEmailErrorMsg:Locator
    readonly canDobErrorMsg:Locator
    readonly canNumErrorMsg:Locator
    readonly addCanErrorMessageHeader:Locator
    readonly addCanErrorMessage:Locator
    constructor(page:Page){
        this.page=page
        this.AddCandidateMenuBtn=page.locator("//span[text()='Add Candidate']")
        this.AddCanHeader=page.locator("p.profile-header")
        this.canName=page.getByPlaceholder("Enter Candidate Name")
        this.canEmail=page.getByPlaceholder("Email Address")
        this.candob=page.locator("//input[@name='dateOfBirth']")
        this.canContactNum=page.getByPlaceholder("Mobile number")
        this.registerCanBtn=page.locator("button.submit-btn")
        this.canSuccessMsg=page.locator("//h3[text()='✅ Candidate registered successfully!']")
        this.okBtn=page.locator("button.ok-btn")
        this.canErrorMsg=page.locator("//h3")
        this.canNameErrorMsg=page.locator("//input[@name='fullname']/following-sibling::p")
        this.canEmailErrorMsg=page.locator("//input[@name='email']/following-sibling::p")
        this.canDobErrorMsg=page.locator("//input[@name='dateOfBirth']/following-sibling::p")
        this.canNumErrorMsg=page.locator("//input[@name='mobileNumber']/following-sibling::p")
        this.addCanErrorMessageHeader=page.locator('//div[@class="add-fail-modal"]/h3')
        this.addCanErrorMessage=page.locator('//div[@class="add-fail-modal"]/p')
    }
    public async validateAddCandidate(name:string,email:string,dob:string,mobile:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.candob.pressSequentially(dob,{delay:100})
        await this.page.waitForTimeout(200)
        await this.canContactNum.fill(mobile)
        await this.registerCanBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.okBtn.click()
        await expect(this.canName).toHaveValue('')
    }   
    public async validatingInvalidName(name:string){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.registerCanBtn.click()
        await expect(this.canNameErrorMsg).toBeVisible()
        await this.page.reload()
        // await expect(this.canName).toHaveValue('')
    }
    public async validatingInvalidEmail(name:string,email:string){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.registerCanBtn.click()
        await expect(this.canEmailErrorMsg).toBeVisible()
        await this.page.reload()
       // await expect(this.canName).toHaveValue('')
    }
    public async validatingInvalidDob(name:string,email:string,dob:string){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.candob.pressSequentially(dob,{delay:100})
        await this.registerCanBtn.click()
        await expect(this.canDobErrorMsg).toBeVisible()
        await this.page.reload()
        //await expect(this.canName).toHaveValue('')
    }
    public async validatingInvalidMobbile(name:string,email:string,dob:string,mobile:string){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.candob.pressSequentially(dob,{delay:100})
        await this.page.waitForTimeout(200)
        await this.canContactNum.fill(mobile)
        await this.registerCanBtn.click()
        await expect(this.canNumErrorMsg).toBeVisible()
        await this.page.reload()
       // await expect(this.canName).toHaveValue('')
    }
     public async validateAddCandidateWithAlreadyExsitEmail(name:string,email:string,dob:string,mobile:any){
        await this.page.waitForLoadState("domcontentloaded")
        await this.AddCandidateMenuBtn.click()
        await expect(this.AddCanHeader).toBeVisible()
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.candob.pressSequentially(dob,{delay:100})
        await this.page.waitForTimeout(200)
        await this.canContactNum.fill(mobile)
        await this.registerCanBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await this.okBtn.click()
        await expect(this.canName).toHaveValue('')
        await this.canName.fill(name)
        await this.canEmail.fill(email)
        await this.candob.pressSequentially(dob,{delay:100})
        await this.page.waitForTimeout(200)
        await this.canContactNum.fill(mobile)
        await this.registerCanBtn.click()
        await this.page.waitForLoadState("domcontentloaded")
        await expect(this.addCanErrorMessageHeader).toBeVisible()
        const ErrorMessage=await this.addCanErrorMessage.innerText()
        console.log("\x1b[33m%s\x1b[0m \x1b[32m%s\x1b[0m", `The Error message is :, ${ErrorMessage}`);
        await this.okBtn.click()
    } 

}
export default AddCandidate;