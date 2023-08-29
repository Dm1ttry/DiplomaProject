import MainPage from "./main.page";
import { expect } from "@playwright/test";
import { Locator, Page } from "playwright-core";

export default class MoviesPage extends MainPage {
    readonly titlePage: Locator;
    readonly MoviesPage: Locator;
    readonly Top250: Locator;
    readonly BestMovies2022: Locator;
    readonly filmGreenmile: Locator;
    readonly titleFilm: Locator;
    readonly WillWatch: Locator;
    readonly NameFilmInFolder: Locator;
    readonly WillWatchAdd: Locator;
    readonly AllFolder: Locator;
    readonly filmLicoricePizza: Locator;
    readonly FilmRate: Locator;
    readonly UserFilmRate: Locator;

    constructor(page: Page) {
        super(page);
        this.MoviesPage = page.locator(
            '//li[@data-tid="f76ee5ab"]//a[@href="/lists/categories/movies/1/"]'
        );
        this.Top250 = page.locator(
            '//div[@data-tid="e560f111"]//a[@href="/lists/movies/top250/"]'
        );
        this.BestMovies2022 = page.locator(
            '//div[@data-tid="e560f111"]//a[@href="/lists/movies/best_movies_2022_editorialchoice/"]'
        );
        this.titlePage = page.locator('//div[@data-tid="bb6db913"]//h1');
        this.filmLicoricePizza = page.locator(
            '//div[@data-tid="8a6cbb06"]//span[contains(text(), "Лакричная пицца")]'
        );

        this.filmGreenmile = page.locator(
            '//div[@data-tid="8a6cbb06"]//span[contains(text(), "Зеленая миля")]'
        );
        this.titleFilm = page.locator('//h1[@itemprop="name"]//span');
        this.WillWatch = page.locator('//button[@title="Буду смотреть"]');
        this.WillWatchAdd = page.locator('//button[@title="Добавить в папку"]');
        this.AllFolder = page.locator(
            '//a[@href="/mykp/movies/list/type/3575/"]'
        );
        this.NameFilmInFolder = page.locator('//a[@class="name"]');
        this.FilmRate = page.locator('//div[@data-tid="410c06ef"]//button');
        this.UserFilmRate = page.locator(
            '//span[@class="styles_value__dffT9"]'
        );
    }

    async openFilmLicoricePizza() {
        await this.page.mouse.move(0, 350);
        await this.filmLicoricePizza.click();
        await expect(this.titleFilm).toHaveText("Лакричная пицца (2021)");
    }
    async addRateFilm(numberRate: string) {
        await this.FilmRate.click();
        await this.page
            .locator(
                `//button[@data-tid="97d3f69e"]//span[contains(text(), ${numberRate})]`
            )
            .click();
    }
    async openFilmGreenmile() {
        await this.filmGreenmile.click();
        await expect(this.titleFilm).toHaveText("Зеленая миля (1999)");
    }
    async openMovies() {
        await this.page.goto(
            "https://www.kinopoisk.ru/lists/categories/movies/1/"
        );
        // await expect(this.page.url()).toContain(
        //     "https://www.kinopoisk.ru/lists/categories/movies/1/"
        // );
    }
    async open250Top() {
        await this.Top250.click();
        await expect(this.titlePage).toHaveText("250 лучших фильмов");
    }
    async openBestMovies2022() {
        await this.BestMovies2022.click();
        await expect(this.titlePage).toHaveText(
            "Лучшие фильмы-2022 по версии редакции"
        );
    }
    async addWillWatch() {
        await this.WillWatch.click();
    }
    async openFolderWillWatch() {
        await this.WillWatchAdd.click();
        await this.AllFolder.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain(
            "https://www.kinopoisk.ru/mykp/folders/3575/"
        );
        await this.page.waitForLoadState();
    }
}
