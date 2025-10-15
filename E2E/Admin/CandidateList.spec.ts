import test from "../../fixtures/basepage";
import Loginpage from "../../pages/Admin/loginPage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Admin-CandidateList", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T329] Validating Reassiging caniddate to Agent", async ({ loginPage, page, candidateList }, testInfo) => {
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
  test("[T327] Validating Assiging caniddate to Agent", async ({ loginPage, page, candidateList }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Assiging caniddate to Agent";
    await test.step(stepTitle, async () => {
      await candidateList.validatingAssignCandidateToAgent()
    })
  })
  test("[T330] Validating View Report button in Candidate List page", async ({ loginPage, page, candidateList }, testInfo) => {
    stepTitle = "login";  
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "View Report button in Candidate List page";
    await test.step(stepTitle, async () => {
      await candidateList.validatingViewReport()
    })
  })
  test("[T331] Validating Result of verification",async ({ loginPage, page, candidateList }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Result of verification";
    await test.step(stepTitle, async () => {
      await candidateList.validatingResultOfVerification()
    })
  })
  test("[T303] Validating Candidate List page with all Candidates",async ({ loginPage, page, candidateList},testInfo)=>{
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Result of verification";
    await test.step(stepTitle, async () => {
      await candidateList.validatingCandidateList()
    })
  })
  //328 close assign page
})