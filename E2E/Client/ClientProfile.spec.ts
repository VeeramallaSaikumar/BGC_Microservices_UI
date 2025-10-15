import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Client-Profile", { tag: ['@Client', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T120] Validating client Profile Details", async ({ loginPage, page, clientProfile }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "update profile details";
    await test.step(stepTitle, async () => {
      const number: any = helpers.generateRandomMobileNumber();
      console.log("Contact Number: ", number);
      await clientProfile.validatingProfileDetails(number)
    })
  })
  test("[T121] Validating client Profile Details with invalid data", async ({ loginPage, page, clientProfile }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {    
      await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "updating profile with invalid details";
    await test.step(stepTitle, async () => {
      const number: any = helpers.generateRandomThreeDigitNumber();
      console.log("Contact Number: ", number);
      await clientProfile.validatingInvalidMobileNumber(number.toString())
    })
  })
})