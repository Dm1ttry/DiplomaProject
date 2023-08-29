import { expect } from "@playwright/test";
import { Page } from "playwright-core";

export default class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openKinopoisk() {
        await this.page.goto("https://www.kinopoisk.ru/");
        // await expect(this.page.url()).toContain("https://www.kinopoisk.ru/");ы
    }
}
