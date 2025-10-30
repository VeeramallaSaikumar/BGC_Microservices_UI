import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-Client-InProgress List",{tag:["@Client","@Regression"]},async()=>{
    let stepTitle:string;
    test("[T156] Validating BGC In Progress list",async ({ loginPage, page, bgvInProgress }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "BGC In Progress list";
        await test.step(stepTitle, async () => {
            await bgvInProgress.bGVInprogress()
        })
    })
})