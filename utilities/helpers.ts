import { Locator, Page, TestInfo } from "@playwright/test";
import * as XLSX from 'xlsx';


export function randomString(length: number, chars: string) {
    let result = "";
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export async function setFutureDate1() {
    const date = new Date();
    const day = 1;
    const month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    const year = date.getFullYear();
    if (date.getMonth() + 1 > 10) {
        const m = month[0];
        const year2 = year + 1;
        const futureDate = m + ' ' + day + ', ' + year2;
        return futureDate;
    } else {
        const m = month[date.getMonth() + 1];
        const year = date.getFullYear();
        const futureDate = m + ' ' + day + ', ' + year;
        return futureDate;
    }
}
export async function setFutureDate2() {
    const date = new Date();
    const day = date.getDate() + 7;
    const month = [];
    month[0] = '01';
    month[1] = '02';
    month[2] = '03';
    month[3] = '04';
    month[4] = '05';
    month[5] = '06';
    month[6] = '07';
    month[7] = '08';
    month[8] = '09';
    month[9] = '10';
    month[10] = '11';
    month[11] = '12';
    const year = date.getFullYear();
    if (date.getMonth() + 1 > 10) {
        const m = month[0];
        const year2 = year + 1;
        const futureDate = m + ' ' + day + ', ' + year2;
        return futureDate;
    } else {
        const m = month[date.getMonth() + 1];
        const year = date.getFullYear();
        const futureDate = year + '-' + m + '-' + day;
        return futureDate;
        //  2024-03-18
    }
}

export async function captureScreenshot(page: Page, testInfo: TestInfo, stepTitle: string) {
    // Generate a sanitized version of the stepTitle (remove spaces, replace with underscores)
    const screenshotTitle = stepTitle.replace(/\s+/g, '_'); // Replace spaces with underscores
    // Take a screenshot and save it to a buffer (no need to save to a file)
    const screenshotBuffer = await page.screenshot();
    await page.waitForTimeout(2000);
    // Attach the screenshot to the report using the testInfo object
    testInfo.attach(`${screenshotTitle}`, {
        body: screenshotBuffer,      // Screenshot content as buffer
        contentType: 'image/png',    // Content type for image
    });
}

export function excelfetch(path: string, sheetName: string, rowNumber: number, columnNumber: number) {
    const workbook = XLSX.readFile(path);
    const worksheet = workbook.Sheets[sheetName];
    const cellAddress = { c: columnNumber - 1, r: rowNumber - 1 }; // Convert to zero-based index
    const cellRef = XLSX.utils.encode_cell(cellAddress);
    const cell = worksheet[cellRef];
    return cell ? cell.v : null; // Return cell value or null if cell is empty
}
export function generateRandomMobileNumber() {
    const prefix = '9'; // Ensuring the number starts with 9 for a valid mobile number format
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000; // Generate a random 9-digit number
    return prefix + randomNumber.toString().slice(1); // Combine prefix with the random number
}
export function generateRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100; 
}
export function extratingFromString(Showing: string) {
           const str = Showing;
           const regex = /of (\d+) entries/;
           const match = str.match(regex);
           if (match) {
               var numberOfEntries = parseInt(match[1], 10);
               console.log(numberOfEntries);
           } else {
               console.log("Number not found");
           }
}
export function generateRandomNumber1to4() {
    return Math.floor(Math.random() * 3) + 2; 
}  
