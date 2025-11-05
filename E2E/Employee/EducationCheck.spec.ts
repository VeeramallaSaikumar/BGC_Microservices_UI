import test from "../../fixtures/basepage"
import ENV from "../../utilities/env"
import * as helpers from "../../utilities/helpers"

test.describe("BGC-WEB-Employee-Education Check",{tag:["@Employee","@Regression"]},async()=>{
    
    test("[T342] Education check Process",async({loginPage, page, assignedCandidates, educationCheck},testInfo)=>{
        let stepTitle:string
        stepTitle = "login";
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
        stepTitle="Validaing Education Check Process";
        await test.step(stepTitle,async()=>{
            await educationCheck.educationCheckFileUpload()
        })
    })
    test("[T350] Validating Education check without Verification Status",async({loginPage, page, assignedCandidates, educationCheck},testInfo)=>{
        let stepTitle:string
        stepTitle = "login";
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
        stepTitle="Validaing Education Check without Verification Status";
        await test.step(stepTitle,async()=>{
            await educationCheck.validatingEducationCheckWithoutVerificationStatus()
        })
    })
})