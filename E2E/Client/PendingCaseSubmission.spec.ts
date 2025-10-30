import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Client-Pending Case Subission Candidates", { tag: ['@Client', '@Regression'] }, () => {
    let stepTitle: string;
    test("[T128] Validating Pending case Subission list and view details", async ({ loginPage, page, pendingCaseSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "List Of Pending case Submission Candidates";
        await test.step(stepTitle, async () => {
            await pendingCaseSubmission.viewCandidateDetails()          
        })
    })
    test("[T127] Validating Request For BGC of a candidate", async ({ loginPage, page, pendingCaseSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Request For BGC of a candidate";
        await test.step(stepTitle, async () => {
            await pendingCaseSubmission.requestForBGCForCandidate()
        })
    })
    test("[T173] Validating Request For BGC of a candidate with cancel functionality", async ({ loginPage, page, pendingCaseSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Request For BGC of a candidate with cancel functionality";
        await test.step(stepTitle, async () => {
            await pendingCaseSubmission.requestForBGCForCandidatewithNegativeflow()       
        })
    })
})