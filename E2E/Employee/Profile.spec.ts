import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Employee-Profile", { tag: ['@Employee', '@Regression'] }, () => {
    test("[T353] Validating the Update Profile",async ({ loginPage, page,employeeProfile }, testInfo) => {
        let stepTitle: string;
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })   
        stepTitle = "Validating the mobile Number update";
        await test.step(stepTitle, async () => {
            await employeeProfile.validatingUpMobile()
        })
    })
    test("[T345] Validaing the ",async ({ loginPage, page,employeeProfile}, testInfo) => {
        let stepTitle: string;
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "UAN Check";
        await test.step(stepTitle, async () => {
            await employeeProfile.validatingUpMobileWithInVaild()
        })
    })
})