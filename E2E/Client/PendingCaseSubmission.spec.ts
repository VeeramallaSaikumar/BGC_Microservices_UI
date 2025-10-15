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
            console.log("Started");
            await pendingCaseSubmission.viewCandidateDetails()          
        })
    })
})