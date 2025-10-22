import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Employee-UAN Check", { tag: ['@Employee', '@Regression'] }, () => {
    test("[T353] Validaing UAN Check without checking the verification status",async ({ loginPage, page, assignedCandidates, uanCheck }, testInfo) => {
        let stepTitle: string;
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(3000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "UAN Check without selecting verification status";
        await test.step(stepTitle, async () => {
            await uanCheck.validatingUANCheckWithoutVeri()
        })
    })
    test("[T345] Validaing UAN Check with all details",async ({ loginPage, page, assignedCandidates, uanCheck }, testInfo) => {
        let stepTitle: string;
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(3000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "UAN Check";
        await test.step(stepTitle, async () => {
            await uanCheck.validateUANCheck()
        })
    })
})