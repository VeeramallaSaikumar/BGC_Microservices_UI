import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Admin-Active Employee", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T358] Validating Active Employee", async ({ loginPage, page,activeEmployee  }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Active Employee";
    await test.step(stepTitle, async () => {
    await activeEmployee.validatingListOfActiveEmployee()
    })
  })
  test("[T137] Validating Assigned Candidates to Active Employee", async ({ loginPage, page,activeEmployee  }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Assigned Candidates to Active Employee";
    await test.step(stepTitle, async () => {
    await activeEmployee.validatingAssignedCandForEmployee()
    })
  })
  test("[T356] Validating Editing Active Employee info", async ({ loginPage, page, activeEmployee  }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Editing Active Employee info";
    await test.step(stepTitle, async () => {
    const randomMobile=helpers.generateRandomMobileNumber()
    await activeEmployee.editingActiveEmployeeInfo(randomMobile)
    })
  })
  test("[T357] Validating deleting of Active Employee", async ({ loginPage, page, activeEmployee  }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "deleting Active Employee";
    await test.step(stepTitle, async () => {
    await activeEmployee.deleteActiveEmployee()
    })
  })
  test("[T359] Validating Temporary deleted Employee in Inactive Employee List",async ({ loginPage, page, activeEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(3000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Temporary deleted candidates";
    await test.step(stepTitle, async () => {
      await activeEmployee.validatingInactiveEmployeesList()
    })
  })
})