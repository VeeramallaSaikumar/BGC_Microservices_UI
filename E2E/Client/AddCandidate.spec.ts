import test from "../../fixtures/basepage";
import ENV from "../../utilities/env";
import * as helpers from "../../utilities/helpers";

test.describe("BGC-WEB-Client-Add Candidate", { tag: ['@Client', '@Regression'] }, () => {
    let stepTitle: string;
    test("[T122] Validating Add Candidate", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 1)
            const CanEmail = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 2) + helpers.generateRandomThreeDigitNumber() + helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 3)
            const CanDob: any = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 4).toString()
            const CanMobile: any = helpers.generateRandomMobileNumber().toString()
            console.log("Name:", CanName);
            console.log("Email:", CanEmail);
            console.log("CanDob:", CanDob);
            console.log("Contact:", CanMobile);

            await addCandidate.validateAddCandidate(CanName, CanEmail, CanDob, CanMobile)
        })
    })
    test("[T123] Validating Add Candidate with invlaid Name", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate with invalid name";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 3, 1)
            await addCandidate.validatingInvalidName(CanName)
        })
    })
    test("[T124] Validating Add Candidate with invlaid Email", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate with invalid Email";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 1)
            const CanEmail = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 3,3) 
            await addCandidate.validatingInvalidEmail(CanName,CanEmail)
        })
    })
    test("[T125] Validating Add Candidate with invlaid DOB", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate with invalid DOB";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 1)
            const CanEmail = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 2) + helpers.generateRandomThreeDigitNumber() + helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 3)
            const dob=helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 3, 4).toString()
            await addCandidate.validatingInvalidDob(CanName,CanEmail,dob)
        })
    })
    test("[T126] Validating Add Candidate with invlaid Mobile number", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate with invalid Mobile number";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 1)
            const CanEmail = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 2) + helpers.generateRandomThreeDigitNumber() + helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 3)
            const dob=helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 4).toString()
            const num=helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 3, 5).toString()
            await addCandidate.validatingInvalidMobbile(CanName,CanEmail,dob,num)
        })
    }) 
    test("[T360] Validating Add Candidate with already Exist Email", async ({ loginPage, page, addCandidate }, testInfo) => {
        stepTitle = "login";
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.CLIENT_EMAIL, ENV.CLIENT_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        });
        stepTitle = "Add Candidate";
        await test.step(stepTitle, async () => {
            const CanName = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 1)
            const CanEmail = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 2) + helpers.generateRandomThreeDigitNumber() + helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 3)
            const CanDob: any = helpers.excelfetch('./testData/sai_TestData.xlsx', 'AddCandidate', 2, 4).toString()
            const CanMobile: any = helpers.generateRandomMobileNumber().toString()
            console.log("Name:", CanName);
            console.log("Email:", CanEmail);
            console.log("CanDob:", CanDob);
            console.log("Contact:", CanMobile);

            await addCandidate.validateAddCandidateWithAlreadyExsitEmail(CanName, CanEmail, CanDob, CanMobile)
        })
    })
})