import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-Client-Submiited for Verification",{tag:["@Client","@Regression"]},async()=>{
    let stepTitle:string;
    test("[T152] Validating Submiited for Verification",async ({ loginPage, page, submittedforVerification }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Submiited for Verification";
        await test.step(stepTitle, async () => {
            await submittedforVerification.validatingSubmittedForVerification()
        })
    })
    test("[T174] Validating View Report in Submiited for Verification",async ({ loginPage, page, submittedforVerification }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "View Report";
        await test.step(stepTitle, async () => {
            await submittedforVerification.viewdetailsfromSubittedForVerifcation()
        })
    })
})