import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Employee-personal Check", { tag: ['@Employee', '@Regression'] }, () => {
    test("[T340] Validating Personal Check ", async ({ loginPage, page, assignedCandidates, personalCheck }, testInfo) => {
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
        stepTitle = "Personal Check";
        await test.step(stepTitle, async () => {
            await personalCheck.personalCheck()
        })
    })
    test("[T348] Validaing Personal Check without checking the verification status",async ({ loginPage, page, assignedCandidates, personalCheck }, testInfo) => {
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
        stepTitle = "Personal Check";
        await test.step(stepTitle, async () => {
            await personalCheck.validatingPersonalCheckwithInvalid()
        })
    })
})
