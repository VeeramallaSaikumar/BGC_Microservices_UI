import test from "../../fixtures/basepage"
import ENV from "../../utilities/env"
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Employee-Assigned Candidates",{ tag: ['@Employee','@Regression'] },()=>{
     let stepTitle:string;
    test("[T149] Validating list of Assigned Candidates", async ({ loginPage, page, assignedCandidates }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Validating list of Assigned Candidatess";
        await test.step(stepTitle, async () => {
            await assignedCandidates.ValidatingViewDeatils()
        })
    })
    test("[T337] Validating Email is disabled or Enabled for different BGC Status", async ({ loginPage, page, assignedCandidates }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Validating Email is disabled or Enabled for different BGC Status";
        await test.step(stepTitle, async () => {
            await assignedCandidates.validatingSendMailVisiblity()
        })
    })
    test("[T336] Validating Start BGC button is disabled or Enabled for different BGC Status", async ({ loginPage, page, assignedCandidates }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Validating Start BGC button is disabled or Enabled for different BGC Status";
        await test.step(stepTitle, async () => {
            await assignedCandidates.validatingStartBGCButton()
        })
    })
    test("[T332] Validating Start BGC button", async ({ loginPage, page, assignedCandidates }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Validating Start BGC button";
        await test.step(stepTitle, async () => {
            await assignedCandidates.validatingStartBGC()
        })
    })
    test("[T339] Validating Generate Report to Admin", async ({ loginPage, page, assignedCandidates }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Validating generate Report";
        await test.step(stepTitle, async () => {
            await assignedCandidates.validatingGenerateReport()
        })
    })
})