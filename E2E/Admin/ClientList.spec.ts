import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Admin-ClientList", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T136] Validating Assigned Candidates button for a clent", async ({ loginPage, page, clientList }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "validating assigned candidates button";
    await test.step(stepTitle, async () => {
      await clientList.validatingAssignedCandidatesforClient()
    })
  })
})