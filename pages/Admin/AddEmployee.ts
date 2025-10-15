import { Locator, Page, expect } from "@playwright/test";

class AddEmployee {
    readonly page: Page;
    readonly addEmployeeBtn: Locator
    readonly employeeName: Locator
    readonly employeeCompany: Locator
    readonly employeeEmail: Locator
    readonly mobileNumber: Locator
    readonly employeeGender: Locator
    readonly dateofbirth: Locator
    readonly registorAddEmployee: Locator
    readonly empNameError: Locator
    readonly empCmpError: Locator
    readonly empNumberError: Locator
    readonly empEmailError: Locator
    readonly cancelBtn: Locator
    readonly SucessMessage: Locator
    readonly okabtn: Locator
    readonly empGenderError: Locator

    constructor(page: Page) {
        this.page = page;
        this.addEmployeeBtn = page.locator('//span[text()="Add Employee"]')
        this.employeeName = page.locator('#username')
        this.employeeCompany = page.locator('#companyname')
        this.employeeEmail = page.locator('#email')
        this.mobileNumber = page.locator('#contactNumber')
        this.employeeGender = page.locator('#gender')
        this.dateofbirth = page.locator('#dateOfBirth')
        this.registorAddEmployee = page.locator('//button[text()="Add Employee"]');
        this.empNameError = page.locator('//p[text()="Username must contain only alphabets and spaces, up to 40 characters."]')
        this.empCmpError = page.locator('//p[text()="Company name must contain only alphabets and spaces, up to 40 characters."]')
        this.empNumberError = page.locator('//p[text()="Phone number must be exactly 10 digits."]')
        this.empEmailError = page.locator('//p[text()="Invalid email format."]')
        this.cancelBtn = page.locator("//input[@value='Cancel']")
        this.SucessMessage = page.locator('//h2[text()="Success"]')
        this.empGenderError = page.locator('//p[text()="Gender is required."]')
        this.okabtn = page.locator('//button[text()="OK"]')
    }
    public async employeeValidDetails(name: string, company: string, Emailid: string, mobileNumber: string, dob: number) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.employeeCompany.fill(company);
        await this.employeeEmail.fill(Emailid);
        await this.mobileNumber.fill(mobileNumber);
        await this.page.waitForTimeout(5000);
        await this.employeeGender.click();
        await this.employeeGender.selectOption({ index: 2 });
        await this.dateofbirth.pressSequentially(dob.toString(), { delay: 500 });
        await this.page.waitForTimeout(2000);
        await this.registorAddEmployee.click();
        await this.SucessMessage.waitFor({ state: "visible" });
        expect(await this.SucessMessage.isVisible()).toBeTruthy();
        await this.okabtn.click()
        expect(await this.employeeName.inputValue()).toBe("");
    }
    public async empUsernameinvalid(name: any) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.page.waitForTimeout(2000)
        await this.empNameError.waitFor({ state: "visible" });
        expect(await this.empNameError.isVisible())
    }
    public async empCmpnameinvalid(name: string, company: any) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.page.waitForTimeout(2000)
        await this.employeeCompany.fill(company);
        await this.page.waitForTimeout(1000)
        await this.empCmpError.waitFor({ state: "visible" });
        expect(await this.empCmpError.isVisible())
    }
    public async empEmailinvalid(name: string, company: string, Emailid: string) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.employeeCompany.fill(company);
        await this.employeeEmail.fill(Emailid);
        await this.empEmailError.waitFor({ state: "visible" });
        expect(await this.empEmailError.isVisible())
    }
    public async empMobilenumberinvalid(name: string, company: string, Emailid: string, mobile: any) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.employeeCompany.fill(company);
        await this.employeeEmail.fill(Emailid);
        await this.mobileNumber.fill(mobile.toString());
        await this.empNumberError.waitFor({ state: "visible" });
        expect(await this.empNumberError.isVisible())

    }
    public async dateofbirthinvalid(name: string, company: string, Emailid: string, mobileNumber: string, date: string) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.employeeCompany.fill(company);
        await this.employeeEmail.fill(Emailid);
        await this.mobileNumber.fill(mobileNumber);
        await this.dateofbirth.fill(date);
    }
    public async empgenderinvalid(name: string, company: string, Emailid: string, mobileNumber: string, dob: any) {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.mouse.move(0, 0)
        await this.addEmployeeBtn.waitFor({ state: "visible" });
        await this.addEmployeeBtn.click();
        await this.employeeName.waitFor({ state: "visible" });
        await this.employeeName.fill(name);
        await this.employeeCompany.fill(company);
        await this.employeeEmail.fill(Emailid);
        await this.mobileNumber.fill(mobileNumber);
        await this.dateofbirth.pressSequentially(dob.toString(), { delay: 500 });
        await this.registorAddEmployee.click();
        await this.page.waitForTimeout(2000)
        await this.okabtn.click();
        await this.empGenderError.waitFor({ state: "visible" });
        expect(await this.empGenderError.isVisible())
    }
}
export default AddEmployee;