import test from "../../fixtures/basepage"
import ENV from "../../utilities/env"
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-EmployeeEmployment Check Virtaul", { tag: ["@Employee", "@Regression"] }, async () => {
    let stepTitle: string;
    test("[T352] Validating Employment Check (Virtaul) without Verification Status", async ({ loginPage, page, assignedCandidates, employmentVirtualCheck}, testInfo) => {
        stepTitle="Login"
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
        stepTitle = "Employment Check (Virtaul) without Verification Status";
        await test.step(stepTitle, async () => {
            await employmentVirtualCheck.validatingVirtualCheckWithoutVerification()
        })
    })
    test("[T343] Validating Employment Check (Virtaul)", async ({ loginPage, page, assignedCandidates, employmentVirtualCheck }, testInfo) => {
        stepTitle="Login"
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(2000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(1000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "Employment Check (Virtaul)";
        await test.step(stepTitle, async () => {
            await employmentVirtualCheck.validatingVirtualCheck()
        })
    })
})