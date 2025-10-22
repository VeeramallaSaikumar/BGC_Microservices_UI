import test from "../../fixtures/basepage"
import ENV  from "../../utilities/env"
import * as helpers from "../../utilities/helpers"

test.describe("BGC-Web-Employee-Criminal Check",{tag:["@Employee","@Regression"]},async ()=>{
    let stepTitle:string;
    test("[T354] Validating Criminal check without record",async ({loginPage, page, assignedCandidates, criminalCheck},testInfo)=>{
        stepTitle="Login"
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(1000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "Criminal Check with no records found";
        await test.step(stepTitle, async () => {
            const name=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 1)
            const fname=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 2)
            const yea=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 3)
            const addres=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 4)
            const statee=await helpers.excelfetch('./testData/sai_TestData.xlsx','Employee',2,5)
            await criminalCheck.criminalCheckWithSucessBtn(name,fname,yea,addres,statee)
        })
    })
    test("[T346] Validating Criminal check with records ",async ({loginPage, page, assignedCandidates, criminalCheck},testInfo)=>{
        stepTitle="Login"
        await test.step(stepTitle, async () => {
            await loginPage.login(ENV.EMPLOYEE_EMAIL, ENV.EMPLOYEE_PWD);
            await page.waitForTimeout(3000);
            await helpers.captureScreenshot(page, testInfo, stepTitle);
        })
        stepTitle = "Start BGC";
        await test.step(stepTitle, async () => {
            await page.waitForTimeout(1000)
            await assignedCandidates.startBGCForCandidate()
        })
        stepTitle = "Criminal Check with records found";
        await test.step(stepTitle, async () => {
            const name=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 1)
            const fname=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 2)
            const yea=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 3)
            const addres=await helpers.excelfetch('./testData/sai_TestData.xlsx', 'Employee', 2, 4)
            const statee=await helpers.excelfetch('./testData/sai_TestData.xlsx','Employee',2,5)
            await criminalCheck.criminalCheckWithSucessBtn(name,fname,yea,addres,statee)
        })
    })
})