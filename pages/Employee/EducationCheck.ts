import { expect, Locator, Page } from "@playwright/test"
import * as path from "path";

class EducationCheck {
    readonly page: Page;
    readonly educationCheck: Locator
    readonly status: Locator
    readonly editButton: Locator
    readonly educationHeader: Locator
    readonly eduHighSchoolHeader: Locator
    readonly eduHigherSecondaryHeader: Locator
    readonly eduDiplomaHeader: Locator
    readonly eduGraduationHeader: Locator
    readonly eduPostGraduationHeader: Locator
    readonly enrollmentNum: Locator
    readonly yearOfEnrollment: Locator
    readonly yearOfPassout: Locator
    readonly qualification: Locator
    readonly institute: Locator
    readonly educationProof: Locator
    readonly higherenrollmentNum: Locator
    readonly higheryearOfEnrollment: Locator
    readonly higheryearOfPassout: Locator
    readonly higherspecialization: Locator
    readonly higherqualification: Locator
    readonly higherinstitute: Locator
    readonly highereducationProof: Locator
    readonly dipenrollmentNum: Locator
    readonly dipyearOfEnrollment: Locator
    readonly dipyearOfPassout: Locator
    readonly dipspecialization: Locator
    readonly dipqualification: Locator
    readonly dipinstitute: Locator
    readonly dipeducationProof: Locator
    readonly ugenrollmentNum: Locator
    readonly ugyearOfEnrollment: Locator
    readonly ugyearOfPassout: Locator
    readonly ugspecialization: Locator
    readonly ugqualification: Locator
    readonly uginstitute: Locator
    readonly ugeducationProof: Locator
    readonly pgenrollmentNum: Locator
    readonly pgyearOfEnrollment: Locator
    readonly pgyearOfPassout: Locator
    readonly pgspecialization: Locator
    readonly pgqualification: Locator
    readonly pginstitute: Locator
    readonly pgeducationProof: Locator
    readonly overallRemarks: Locator
    readonly saveButton: Locator
    readonly cancelButton: Locator
    readonly veriStatus: Locator
    constructor(page: Page) {
        this.page = page;
        this.educationCheck = page.locator("//div[text()='Education Info']")
        this.status = page.locator("//div[text()='Education Info']/../span")
        this.editButton = page.locator("//div[text()='Education Info']/../../div[2]/button")
        this.educationHeader = page.locator("//h2[text()='Education Status']")
        this.eduHighSchoolHeader = page.locator("//h3[text()='HIGH_SCHOOL']")
        this.eduHigherSecondaryHeader = page.locator("//h3[text()='HIGHER_SECONDARY']")
        this.eduDiplomaHeader = page.locator("//h3[text()='DIPLOMA']")
        this.eduGraduationHeader = page.locator("//h3[text()='UNDERGRADUATE']")
        this.eduPostGraduationHeader = page.locator("//h3[text()='POST_GRADUATION']")
        this.enrollmentNum = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[1]/div[1]/input")
        this.yearOfEnrollment = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[1]/div[2]/input")
        this.yearOfPassout = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[2]/div[1]/input")
        this.qualification = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[2]/div[2]/input")
        this.institute = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[3]/div[2]/input")
        this.educationProof = page.locator("//h3[text()='HIGH_SCHOOL']/following-sibling::div[4]/div/input")
        this.overallRemarks = page.locator("//textarea[@name='overallRemarks']")
        this.saveButton = page.locator("button.submit-button")
        this.cancelButton = page.locator("button.cancel-button")
        this.veriStatus = page.locator("//input[@type='checkbox']")
        this.higherenrollmentNum = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[1]/div[1]/input")
        this.higheryearOfEnrollment = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[1]/div[2]/input")
        this.higheryearOfPassout = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[2]/div[1]/input")
        this.higherspecialization = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[3]/div[1]/input")
        this.higherqualification = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[2]/div[2]/input")
        this.higherinstitute = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[3]/div[2]/input")
        this.highereducationProof = page.locator("//h3[text()='HIGHER_SECONDARY']/../div[4]/div/input")
        this.dipenrollmentNum = page.locator("//h3[text()='DIPLOMA']/../div[1]/div[1]/input")
        this.dipyearOfEnrollment = page.locator("//h3[text()='DIPLOMA']/../div[1]/div[2]/input")
        this.dipyearOfPassout = page.locator("//h3[text()='DIPLOMA']/../div[2]/div[1]/input")
        this.dipspecialization = page.locator("//h3[text()='DIPLOMA']/../div[3]/div[1]/input")
        this.dipqualification = page.locator("//h3[text()='DIPLOMA']/../div[2]/div[2]/input")
        this.dipinstitute = page.locator("//h3[text()='DIPLOMA']/../div[3]/div[2]/input")
        this.dipeducationProof = page.locator("//h3[text()='DIPLOMA']/../div[4]/div/input")
        this.ugenrollmentNum = page.locator("//h3[text()='UNDERGRADUATE']/../div[1]/div[1]/input")
        this.ugyearOfEnrollment = page.locator("//h3[text()='UNDERGRADUATE']/../div[1]/div[2]/input")
        this.ugyearOfPassout = page.locator("//h3[text()='UNDERGRADUATE']/../div[2]/div[1]/input")
        this.ugspecialization = page.locator("//h3[text()='UNDERGRADUATE']/../div[3]/div[1]/input")
        this.ugqualification = page.locator("//h3[text()='UNDERGRADUATE']/../div[2]/div[2]/input")
        this.uginstitute = page.locator("//h3[text()='UNDERGRADUATE']/../div[3]/div[2]/input")
        this.ugeducationProof = page.locator("//h3[text()='UNDERGRADUATE']/../div[4]/div/input")
        this.pgenrollmentNum = page.locator("//h3[text()='POST_GRADUATION']/../div[1]/div[1]/input")
        this.pgyearOfEnrollment = page.locator("//h3[text()='POST_GRADUATION']/../div[1]/div[2]/input")
        this.pgyearOfPassout = page.locator("//h3[text()='POST_GRADUATION']/../div[2]/div[1]/input")
        this.pgspecialization = page.locator("//h3[text()='POST_GRADUATION']/../div[3]/div[1]/input")
        this.pgqualification = page.locator("//h3[text()='POST_GRADUATION']/../div[2]/div[2]/input")
        this.pginstitute = page.locator("//h3[text()='POST_GRADUATION']/../div[3]/div[2]/input")
        this.pgeducationProof = page.locator("//h3[text()='POST_GRADUATION']/../div[4]/div/input")
    }
    public async educationCheckFileUpload() {
        if (await this.educationCheck.isVisible()) {
            const edustatus = await this.status.textContent()
            if (edustatus === "Work In Progress") {
                await this.editButton.click()
                await this.page.waitForTimeout(3000)
                await expect(this.educationHeader).toBeVisible()
                let educationType = "";
                const notVisble: string[] = []
                if (await this.eduHighSchoolHeader.isVisible()) {
                    educationType = "High School";
                    const highSchool = [this.enrollmentNum, this.yearOfEnrollment, this.yearOfPassout, this.qualification, this.institute]
                    for (const fiels of highSchool) {
                        await fiels.isDisabled()
                    }
                    const filepathHs = path.resolve("testData/testFiles/Education1.png")
                    await this.educationProof.setInputFiles(filepathHs)
                } else notVisble.push("High School")
                if (await this.eduHigherSecondaryHeader.isVisible()) {
                    educationType = "Higher Secondary";
                    const higherSecondary = [this.higherenrollmentNum, this.higheryearOfEnrollment, this.higheryearOfPassout, this.higherspecialization, this.higherqualification, this.higherinstitute]
                    for (const fields of higherSecondary) {
                        await fields.isDisabled()
                    }
                    const filepathHighs = path.resolve("/testData/testFiles/Education2.png")
                    await this.highereducationProof.setInputFiles(filepathHighs)
                } else notVisble.push("Higher Secondary")
                if (await this.eduDiplomaHeader.isVisible()) {
                    educationType = "Diploma";
                    const diploma = [this.dipenrollmentNum, this.dipyearOfEnrollment, this.dipyearOfPassout, this.dipspecialization, this.dipqualification, this.dipinstitute]
                    for (const fields of diploma) {
                        await fields.isDisabled()
                    }
                    const filepathdip = path.resolve("testData/testFiles/EducationDiploma.png")
                    await this.dipeducationProof.setInputFiles(filepathdip)
                } else notVisble.push("Diploma")
                if (await this.eduGraduationHeader.isVisible()) {
                    educationType = "Graduation";
                    const graduation = [this.ugenrollmentNum, this.ugyearOfEnrollment, this.ugyearOfPassout, this.ugspecialization, this.ugqualification, this.uginstitute]
                    for (const fields of graduation) {
                        await fields.isDisabled()
                    }
                    const filepathug = path.resolve("testData/testFiles/EducationUG.png")
                    await this.ugeducationProof.setInputFiles(filepathug)
                } else notVisble.push("Under Graduation")
                if (await this.eduPostGraduationHeader.isVisible()) {
                    educationType = "Post Graduation";
                    const postGraduation = [this.pgenrollmentNum, this.pgyearOfEnrollment, this.pgyearOfPassout, this.pgspecialization, this.pgqualification, this.pginstitute]
                    for (const fields of postGraduation) {
                        await fields.isDisabled()
                    }
                    const filepathpg = path.resolve("testData/testFiles/EducationPG.png")
                    await this.pgeducationProof.setInputFiles(filepathpg)
                } else notVisble.push("Post Graduation")
                if (notVisble.length > 0) {
                    console.log(`These Education Types are not available ${notVisble}`)
                }
                await this.overallRemarks.fill("Education Details Verified")
                await this.veriStatus.check()
                await expect(this.cancelButton).toBeVisible()
                await expect(this.saveButton).toBeVisible()
                await this.saveButton.click()
                await this.page.waitForTimeout(3000)
                await expect(this.status).toHaveText("Completed")
            }
        }
        else console.log("Education check section is not available")
    }
    public async validatingEducationCheckWithoutVerificationStatus() {
        if (await this.educationCheck.isVisible()) {
            const edustatus = await this.status.textContent()
            if (edustatus === "Work In Progress") {
                await this.editButton.click()
                await this.page.waitForTimeout(3000)
                await expect(this.educationHeader).toBeVisible()
                let educationType = "";
                const notVisble: string[] = []
                if (await this.eduHighSchoolHeader.isVisible()) {
                    educationType = "High School";
                    const highSchool = [this.enrollmentNum, this.yearOfEnrollment, this.yearOfPassout, this.qualification, this.institute]
                    for (const fields of highSchool) {
                        await fields.isDisabled()
                    }
                    const filepathHs = path.resolve("testData/testFiles/Education1.png")
                    await this.educationProof.setInputFiles(filepathHs)
                } else notVisble.push("High School")
                if (await this.eduHigherSecondaryHeader.isVisible()) {
                    educationType = "Higher Secondary";
                    const higherSecondary = [this.higherenrollmentNum, this.higheryearOfEnrollment, this.higheryearOfPassout, this.higherspecialization, this.higherqualification, this.higherinstitute]
                    for (const fields of higherSecondary) {
                        await fields.isDisabled()
                    }
                    const filepathHighs = path.resolve("/testData/testFiles/Education2.png")
                    await this.highereducationProof.setInputFiles(filepathHighs)
                } else notVisble.push("Higher Secondary")
                if (await this.eduDiplomaHeader.isVisible()) {
                    educationType = "Diploma";
                    const diploma = [this.dipenrollmentNum, this.dipyearOfEnrollment, this.dipyearOfPassout, this.dipspecialization, this.dipqualification, this.dipinstitute]
                    for (const fields of diploma) {
                        await fields.isDisabled()
                    }
                    const filepathdip = path.resolve("testData/testFiles/EducationDiploma.png")
                    await this.dipeducationProof.setInputFiles(filepathdip)
                } else notVisble.push("Diploma")
                if (await this.eduGraduationHeader.isVisible()) {
                    educationType = "Graduation";
                    const graduation = [this.ugenrollmentNum, this.ugyearOfEnrollment, this.ugyearOfPassout, this.ugspecialization, this.ugqualification, this.uginstitute]
                    for (const fields of graduation) {
                        await fields.isDisabled()
                    }
                    const filepathug = path.resolve("testData/testFiles/EducationUG.png")
                    await this.ugeducationProof.setInputFiles(filepathug)
                } else notVisble.push("Under Graduation")
                if (await this.eduPostGraduationHeader.isVisible()) {
                    educationType = "Post Graduation";
                    const postGraduation = [this.pgenrollmentNum, this.pgyearOfEnrollment, this.pgyearOfPassout, this.pgspecialization, this.pgqualification, this.pginstitute]
                    for (const fields of postGraduation) {
                        await fields.isDisabled()
                    }
                    const filepathpg = path.resolve("testData/testFiles/EducationPG.png")
                    await this.pgeducationProof.setInputFiles(filepathpg)
                } else notVisble.push("Post Graduation")
                if (notVisble.length > 0) {
                    console.log(`These Education Types are not available ${notVisble}`)
                }
                await this.overallRemarks.fill("Education Details Verified")
                await expect(this.cancelButton).toBeVisible()
                await expect(this.saveButton).toBeVisible()
                await this.saveButton.click()
                await this.page.waitForTimeout(3000)
                await expect(this.status).toHaveText("Work In Progress")
            }
        }
        else console.log("Education check section is not available")
    }
}
export default EducationCheck