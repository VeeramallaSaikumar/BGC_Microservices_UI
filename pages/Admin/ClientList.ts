import { expect, Locator, Page } from "@playwright/test";

class ClientList {
    readonly page: Page 
    readonly clientListMenubtn: Locator
    readonly clientName: Locator
    readonly clientEmail: Locator
    readonly clinetCompany: Locator
    readonly assignCandidatebtn: Locator
    readonly canliClientName:Locator
    readonly canliClinetCompany:Locator
    readonly canliClientEmail:Locator

  constructor(page: Page) {
        this.page = page;
        this.clientListMenubtn= page.locator('//span[text()="Client List"]')    
        this.clientName= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[1]')
        this.clientEmail= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[3]')
        this.clinetCompany= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[2]')
        this.assignCandidatebtn= page.locator('//table[@class="client-table"]/tbody/tr[1]/td[5]/button[1]')
        this.canliClientName=page.locator('//div[@class="client-info-section"]/p[1]')
        this.canliClinetCompany=page.locator('//div[@class="client-info-section"]/p[2]')
        this.canliClientEmail=page.locator('//div[@class="client-info-section"]/p[3]')
}  
    public async validatingAssignedCandidatesforClient(){
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0,0)
        await this.clientListMenubtn.click()
        await this.page.waitForTimeout(2000)
        const Name=await this.clientName.innerText()
        const company=await this.clinetCompany.innerText()
        const email=await this.clientEmail.innerText()
        await this.page.waitForTimeout(2000)
        await this.assignCandidatebtn.click()
        await this.page.waitForTimeout(2000)
        expect(await this.canliClientName.innerText()).toContain(Name)
        expect(await this.canliClinetCompany.innerText()).toContain(company);
        expect(await this.canliClientEmail.innerText()).toContain(email);

    }
}
export default ClientList;