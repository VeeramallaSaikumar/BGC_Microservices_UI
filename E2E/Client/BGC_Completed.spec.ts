import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-Client-BGC_Completed",{tag:["@Client","@Regression"]},async()=>{
    let stepTitle:string;
    test("[T154] Validating BGC Completed list",async ({ loginPage, page, bgvCompleted }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "BGC Completed list";
        await test.step(stepTitle, async () => {
            await bgvCompleted.bGVCompleted()
        })
    })
})