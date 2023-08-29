import { Page } from "@playwright/test";
import MainPage from "./main.page";
import SingInPage from "./signup.page";
import MoviesPage from "./movies.page";

export default class PageFactory {
    static GetPage(page: Page, NamePage: string) {
        switch (NamePage) {
            case "signin":
                return new SingInPage(page);
            case "mainPage":
                return new MainPage(page);
            case "movies":
                return new MoviesPage(page);
        }
    }
}
