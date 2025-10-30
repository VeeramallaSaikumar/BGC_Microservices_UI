import test from "../../fixtures/basepage"
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-web-Client-Login Expired Candidates", { tag: ['@Client', '@Regression'] }, () => {
    let stepTitle: string;
    test("[T151] Validating Login Expired Candidates list", async ({ loginPage, page,loginExpireCan  }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Login Expired Candidates list";
        await test.step(stepTitle, async () => {
            await loginExpireCan.loginExpiredCandidate() 
        })
    })
})