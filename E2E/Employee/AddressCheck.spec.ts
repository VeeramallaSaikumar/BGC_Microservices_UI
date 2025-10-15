import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Employee-Address Check", { tag: ['@Employee', '@Regression'] }, () => {
    test("[T340] Validating Address Check ", async ({ loginPage, page, assignedCandidates, addressCheck }, testInfo) => {
        let stepTitle: string;
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(1000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "Address Check with File upload";
        await test.step(stepTitle, async () => {
            await addressCheck.addressCheckFileUpload()
        })
    })
    test("[T348] Validaing  Check without checking the verification status",async ({ loginPage, page, assignedCandidates, addressCheck }, testInfo) => {
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
        stepTitle = "";
        await test.step(stepTitle, async () => {
            await addressCheck.validaingAddressCheck()
        })
    })
})