import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Admin-CandidateList", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T329] Validating Reassiging caniddate to Agent", async ({ loginPage,page,candidateList }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Reassiging caniddate to Agent";
    await test.step(stepTitle, async () => {
    await candidateList.validatingReassignCandidateToAgent()
    })
  })
test("[T327] Validating Assiging caniddate to Agent", async ({ loginPage,page,candidateList }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Assiging caniddate to Agent";
    await test.step(stepTitle, async () => {
    await candidateList.validatingAssignCandidateToAgent()
    })
  })
})