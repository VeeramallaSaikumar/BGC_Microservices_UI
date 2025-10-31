import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";


test.describe("BGC-WEB-Admin-Add Employee", { tag: ['@Admin', '@Regression'] }, () => {
  let stepTitle: string;
  test("[T138] Validating add Employee", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee";
    await test.step(stepTitle, async () => {
      const randomNumber = helpers.generateRandomThreeDigitNumber();
      const randomNumber1to4 = helpers.generateRandomNumber1to4();
      const Name: any = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 1);
      const company = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 2);
      const employeePhone: any = helpers.generateRandomMobileNumber();
      const employeeEmail = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 3);
      const futureDate = await helpers.setFutureDate2();
      const id = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 4);
      const gender = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', randomNumber1to4, 5);
      const dob = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', randomNumber1to4, 6);
      const email = employeeEmail + randomNumber + id;
      // Print the fetched data to the console
      console.log("Employee Name: ", Name + "Auto");
      console.log("Employee Role: ", company + "Auto");
      console.log("Employee Gender: ", gender)
      console.log("Employee Email: ", email);
      console.log("Employee Phone: ", employeePhone);
      console.log("Date of Birth:", dob);
      await addEmployee.employeeValidDetails(Name + "Auto", company + "Auto", email, employeePhone, dob);
    });
  })
  test("[T140] Validating add Employee with invalid username", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(5000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee with invalid username";
    await test.step(stepTitle, async () => {
      const Name: any = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 4, 1);
      console.log("Employee Name: ", Name);
      await addEmployee.empUsernameinvalid(Name);
    })
  })
  test("[T141] Validating add Employee with invalid Comapnay Name", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(1000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee with invalid Comapnay Name";
    await test.step(stepTitle, async () => {
      const Name = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 1);
      const company: any = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 4, 2);
      console.log("Employee Name: ", Name);
      console.log("Company Name: ", company)
      await addEmployee.empCmpnameinvalid(Name, company)
    })
  })
  test("[T144] Validating add Employee with invalid Email id", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(1000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee with invalid Email id";
    await test.step(stepTitle, async () => {
      const Name = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 1);
      const company = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 2);
      const email = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 4, 4);
      console.log("Employee Name: ", Name);
      console.log("Company Name: ", company)
      console.log("Email id: ", email)
      await addEmployee.empEmailinvalid(Name, company, email)
    })
  })
  test("[T143] Validating add Employee with invalid Phone number", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(1000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee with invalid Phone number";
    await test.step(stepTitle, async () => {
      const Name = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 1);
      const company = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 2);
      const employeeEmail = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 3);
      const id = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 4);
      const randomNumber: any = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 3, 4);
      const email = employeeEmail + randomNumber + id;
      console.log("Employee Name: ", Name);
      console.log("Company Name: ", company)
      console.log("Email id: ", email)
      console.log("Mobile: ", randomNumber)
      await addEmployee.empMobilenumberinvalid(Name, company, email, randomNumber)
    })
  })
  test("[T139] Validating add Employee with invalid Gender", async ({ loginPage, page, addEmployee }, testInfo) => {
    stepTitle = "login";
    await test.step(stepTitle, async () => {
      await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PWD);
      await page.waitForTimeout(1000);
      await helpers.captureScreenshot(page, testInfo, stepTitle);
    });
    stepTitle = "Add Employee with invalid Gender";
    await test.step(stepTitle, async () => {
      const Name = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 1);
      const company = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 2);
      const employeeEmail = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 3);
      const id = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 4);
      const randomNumber = helpers.generateRandomMobileNumber();
      const email = employeeEmail + randomNumber + id;
      const dob = await helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddEmployee', 2, 6);
      console.log("Employee Name: ", Name);
      console.log("Company Name: ", company)
      console.log("Email id: ", email)
      console.log("Mobile: ", randomNumber)
      console.log("DOB: ", dob)
      await addEmployee.empgenderinvalid(Name, company, email, randomNumber, dob)
    })
  })
  //142 is role test case it is removed from UI.
})