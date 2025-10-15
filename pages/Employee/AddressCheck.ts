import { expect, Locator, Page } from "@playwright/test"

class AddressCheck {
    readonly page: Page
    readonly addressCheck: Locator
    readonly status: Locator
    readonly editIcon: Locator
    readonly currentAddressHeader: Locator
    readonly perAddressHeader: Locator
    readonly cAddressLine1: Locator
    readonly cAddressLine2: Locator
    readonly cCountry: Locator
    readonly cState: Locator
    readonly cZipCode: Locator
    readonly cCity: Locator
    readonly cAddressFileUpload: Locator
    readonly pAddressLine1: Locator
    readonly pAddressLine2: Locator
    readonly pCounrty: Locator
    readonly pCity: Locator
    readonly pState: Locator
    readonly pZipCode: Locator
    readonly pAddressFileUpload: Locator
    readonly remarks: Locator
    readonly veriStatus: Locator
    readonly cacelBtn: Locator
    readonly submitBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.addressCheck = page.locator("//div[text()='Address Info']")
        this.status = page.locator("//div[text()='Address Info']/../span")
        this.editIcon = page.locator("//div[text()='Address Info']/../../div[2]/button")
        this.currentAddressHeader = page.locator("//h3[text()='Current Address']")
        this.perAddressHeader = page.locator("//h3[text()='Permanent Address']")
        this.cAddressLine1 = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[1]/textarea")
        this.cAddressLine2 = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[2]/textarea")
        this.cCountry = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[3]/input")
        this.cState = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[4]/input")
        this.cCity = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[5]/input")
        this.cZipCode = page.locator("//h3[text()='Current Address']/../div[1]/div[1]/div[6]/input")
        this.cAddressFileUpload = page.locator("label.choose-file-button")
        this.pAddressLine1 = page.locator("//h3[text()='Permanent Address']/../div[2]/div[1]/div[1]/textarea")
        this.pAddressLine2 = page.locator("//h3[text()='Permanent Address']/../div[2]/div[1]/div[2]/textarea")
        this.pCounrty = page.locator("//h3[text()='Permanent Address']/../div[1]/div[1]/div[3]/input")
        this.pState = page.locator("//h3[text()='Permanent Address']/../div[1]/div[1]/div[4]/input")
        this.pCity = page.locator("//h3[text()='Permanent Address']/../div[1]/div[1]/div[5]/input")
        this.pZipCode = page.locator("//h3[text()='Permanent Address']/../div[1]/div[1]/div[6]/input")
        this.pAddressFileUpload = page.locator("label.choose-file-button")
        this.remarks = page.locator("//div[@class='remarks-section']/textarea")
        this.veriStatus = page.locator("//input[@type='checkbox']")
        this.cacelBtn = page.locator("button.cancel-button")
        this.submitBtn = page.locator("button.submit-button")
    }
    public async addressCheckFileUpload() {
        const address = await this.addressCheck.textContent()
        if (address === "Address Info") {
            const addrStatus = await this.status.textContent()
            if (addrStatus === "Work In Progress") {
                await this.editIcon.click()
                await expect(this.currentAddressHeader).toBeVisible()
                await expect(this.cAddressLine1).toBeDisabled()
                await expect(this.cAddressLine2).toBeDisabled()
                await expect(this.cCountry).toBeDisabled()
                await expect(this.cState).toBeDisabled()
                await expect(this.cCity).toBeDisabled()
                await expect(this.cZipCode).toBeDisabled()
                await this.cAddressFileUpload.first().setInputFiles("C:/Users/SaikumarVeeramalla/OneDrive - Client Server Technology Solutions LLC/Desktop/Files Dummy/AddressElectricity.jpg")
                await expect(this.perAddressHeader).toBeVisible()
                await expect(this.pAddressLine1).toBeDisabled()
                await expect(this.pAddressLine2).toBeDisabled()
                await expect(this.pCounrty).toBeDisabled()
                await expect(this.pState).toBeDisabled()
                await expect(this.pCity).toBeDisabled()
                await expect(this.pZipCode).toBeDisabled()
                await this.pAddressFileUpload.last().setInputFiles("C://Users//SaikumarVeeramalla//OneDrive - Client Server Technology Solutions LLC//Desktop//Files Dummy//AddressElectricity.jpg")
                await this.remarks.fill("Verified Address Details")
                const isChecked=await this.veriStatus.isChecked()
                if(isChecked) await this.veriStatus.uncheck()         
                await this.submitBtn.click()
                await this.page.waitForTimeout(3000)
                await expect(this.status).toHaveText("Work In Progress")
                console.log("Files Uploaded Successfully")
            }
            else {
                console.log("Address Check is already Completed")
            }
        }
        else {
            console.log("Address Check section is not available")
        }
    }
    public async validaingAddressCheck(){
        const address = await this.addressCheck.textContent()
        if (address === "Address Info") {
            const addrStatus = await this.status.textContent()
            if (addrStatus === "Work In Progress") {
                await this.editIcon.click()
                await expect(this.currentAddressHeader).toBeVisible()
                await expect(this.cAddressLine1).toBeDisabled()
                await expect(this.cAddressLine2).toBeDisabled()
                await expect(this.cCountry).toBeDisabled()
                await expect(this.cState).toBeDisabled()
                await expect(this.cCity).toBeDisabled()
                await expect(this.cZipCode).toBeDisabled()
                await this.cAddressFileUpload.first().setInputFiles("C://Users//SaikumarVeeramalla//OneDrive - Client Server Technology Solutions LLC//Desktop//Files Dummy//AddressElectricity.jpg")
                await expect(this.perAddressHeader).toBeVisible()
                await expect(this.pAddressLine1).toBeDisabled()
                await expect(this.pAddressLine2).toBeDisabled()
                await expect(this.pCounrty).toBeDisabled()
                await expect(this.pState).toBeDisabled()
                await expect(this.pCity).toBeDisabled()
                await expect(this.pZipCode).toBeDisabled()
                await this.pAddressFileUpload.last().setInputFiles("C://Users//SaikumarVeeramalla//OneDrive - Client Server Technology Solutions LLC//Desktop//Files Dummy//AddressElectricity.jpg")
                await this.remarks.fill("Verified Address Details")
                const isChecked=await this.veriStatus.isChecked()
                if(!isChecked) await this.veriStatus.check()
                else console.log("Verification Status is already checked")
                await this.submitBtn.click()
                await this.page.waitForTimeout(3000)
                await expect(this.status).toHaveText("Completed")
                console.log("Address Check is Completed Successfully")
            }
            else {
                console.log("Address Check is already Completed")
            }
        }
        else {
            console.log("Address Check section is not available")
        }
    }
}
export default AddressCheck