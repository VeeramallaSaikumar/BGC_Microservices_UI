import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as path from "path";

const today = new Date();

const resultDir = path.join(
  "Automation_Reports_" +
  String(today.getMonth() + 1).padStart(2, "0") +
  "_" +
  String(today.getDate()).padStart(2, "0") +
  "_" +
  today.getHours() +
  "_" +
  today.getMinutes() +
  "_" +
  today.getSeconds()
);

const config: PlaywrightTestConfig = {
  workers: process.env.CI ? 1:undefined,
  fullyParallel: true,
  retries: process.env.CI ? 0 :0,
  testDir: "./E2E",
  timeout: 1000 * 100,
  expect: {
    timeout: 5000,
  },
  use: {
    viewport: { width: 1800, height: 1000 },
    headless: !true,
    baseURL: "http://98.88.198.253/",
    screenshot: "on",
    video: "on",
    channel: "chrome",
    launchOptions: { args: ["--start-maximized"] },
    actionTimeout: 0,
    //trace: 'on-first-retry',
  },
  testMatch: ["**.spec.ts"],
  reporter: [
    ["html", { outputFolder: `./reports/${resultDir}`, open: "never" }],['allure-playwright', { outputFolder: `./reports/${resultDir}/allure-results` }],["line"],["github"]
  //   ['playwright-zephyr/lib/src/cloud', {

  //     projectKey: 'BGCM', // <-- Replace with your project key

  //     authorizationToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczovL2NsaWVudHNlcnZlcnRlY2guYXRsYXNzaWFuLm5ldCIsInVzZXIiOnsiYWNjb3VudElkIjoiNzEyMDIwOmRhOGE5NjQyLTgyODktNDRiNC05Y2QyLTVlMDgyMjgwYTc0OCIsInRva2VuSWQiOiIxZDE1ZjU0MC02YWFmLTQ5YWItYTA1MC0yMTYxNTM5ZmRhNjIifX0sImlzcyI6ImNvbS5rYW5vYWgudGVzdC1tYW5hZ2VyIiwic3ViIjoiY2VlMmFmN2MtZWMxNC0zNWFlLWE5MDMtYTdjYTQxZDliZWRjIiwiZXhwIjoxNzg5NTQzOTMwLCJpYXQiOjE3NTgwMDc5MzB9.PXAR-4EEXAMgTy1TCMICDR2hktiXaA3en8-Jrjlkwck", // <-- Replace with your authorization token
  //     testCycle: {
  //       name: `Playwright Automation - ${today.toDateString()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
  //       folderId: '20335943',
  //     },

  //   }],
  ],
};
export default config;