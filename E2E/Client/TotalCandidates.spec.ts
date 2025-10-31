import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-Client-Total Candidates",{tag:["@Client","@Regression"]},async()=>{
    let stepTitle:string;
    test("[T156] Validating download final report",async ({ loginPage, page, totalCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "download final report";
        await test.step(stepTitle, async () => {
            await totalCandidate.downloadFinalReport()
        })
    })
    test("[T183] Validating View Candidate submitted details",async ({ loginPage, page, totalCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "View Candidate submitted details";
        await test.step(stepTitle, async () => {
            await totalCandidate.viewDetails()
        })
    })
    test("[T182] Validating the download icon availability",async ({ loginPage, page, totalCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "View Candidate submitted details";
        await test.step(stepTitle, async () => {
            await totalCandidate.downloadIconAvailable()
        })
    })
    test("[T180] Validating the eye icon availability",async ({ loginPage, page, totalCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "View Candidate submitted details";
        await test.step(stepTitle, async () => {
            await totalCandidate.eyeIconAvailable()
        })
    })
})