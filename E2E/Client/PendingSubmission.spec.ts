import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Client-Pending Subission Candidates", { tag: ['@Client', '@Regression'] }, () => {
    let stepTitle: string;
    test("[T150] Validating Pending Subission list", async ({ loginPage, page, pendingSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "List Of Pending Submission Candidates";
        await test.step(stepTitle, async () => {
            await pendingSubmission.validatinglistOfPendingSubmiison()
        })
    })
    test("[T169] Validating Restore Login ", async ({ loginPage, page, pendingSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Restore Login in Pending Submission Candidates";
        await test.step(stepTitle, async () => {
            await pendingSubmission.validatingRestoreLogin()
        })
    })
    test("[T171] Validating delete ", async ({ loginPage, page, pendingSubmission }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "deleting Functionality";
        await test.step(stepTitle, async () => {
            await pendingSubmission.validatingDelete()
        })
    })
})
