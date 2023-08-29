import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        viewport: { width: 1200, height: 1000 },
        actionTimeout: 50 * 2000,
        navigationTimeout: 50 * 2000,
        screenshot: 'on'
    },
    timeout: 50 * 2000,
    expect: {
        timeout: 50 * 2000,
    },
    workers: 1,
    projects: [
        {
            name: "chrome",
            use: { ...devices["Desktop Chrome"] },
        },
        // {
        //     name: "firefox",
        //     use: { ...devices["Desktop Firefox"]}
        // },
        // {
        //     name: "Mobile",
        //     use: { ...devices["iPhone 12"]}
        // }
    ],
    fullyParallel: true,
    reporter: [
        ['html'],
        ["allure-playwright",]
    ]
};
export default config;
