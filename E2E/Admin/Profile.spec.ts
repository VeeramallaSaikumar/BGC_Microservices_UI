import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Admin-Profile", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T330] Validating Profile Details", async ({ loginPage, page, profile }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "update profile details";
    await test.step(stepTitle, async () => {
      const number: any = helpers.generateRandomMobileNumber();
      console.log("Contact Number: ", number);
      await profile.validatingProfileDetails(number)
    })
  })
  test("[T330] Validating Profile Details with invalid data", async ({ loginPage, page, profile }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "updating profile with invalid details";
    await test.step(stepTitle, async () => {
      const number: any = helpers.generateRandomThreeDigitNumber();
      console.log("Contact Number: ", number);
      await profile.validatingInvalidMobileNumber(number.toString())
    })
  })
})