import MainPage from "../pages/main.page";
import { test, expect } from "@playwright/test";
import SingInPage from "../pages/signup.page";
import PageFactory from "../pages/page.factory";
import MoviesPage from "../pages/movies.page";

test.describe("Test signIn Kinopoisk.ru", async () => {
    let main: MainPage;
    let singIn: SingInPage;
    const correctPaswrd = "test1249qwerty";
    const correctEmail = "testkinopoisk123@gmail.com";
    const errEmail = "user@@@@MailComm";
    const errPhone = "3334655555555";


    test.beforeEach(async ({ page }) => {
        main = PageFactory.GetPage(page, "mainPage") as MainPage;
        singIn = PageFactory.GetPage(page, "signin") as SingInPage;
    });

    test("Test1 error email in sign InPage", async () => {
        await main.openKinopoisk();
        await singIn.openSignInPage();
        await singIn.SignInEmail(errEmail);
        await expect(singIn.ErrorEmail).toContainText(
            "Такой логин не подойдет"
        );
    });
    test("Test2 error phone in sign InPage", async () => {
        await main.openKinopoisk();
        await singIn.openSignInPage();
        await singIn.SignInPhone(errPhone);
        await expect(singIn.ErrorPhone).toContainText(
            "Недопустимый формат номера"
        );
    });
    test("Test3  signIn Kinopoisk.ru", async () => {
        await main.openKinopoisk();
        await singIn.openSignInPage();
        await singIn.SignIn(correctEmail, correctPaswrd);
        await expect(singIn.UserAvatar).toBeTruthy();
    });
});
test.describe("Test movies  Kinopoisk.ru", async () => {
    let singIn: SingInPage;
    let movies: MoviesPage;
    const correctPaswrd = "test1249qwerty";
    const correctEmail = "testkinopoisk123@gmail.com";
    // const correctEmail = "dimagaponov78@gmail.com";

    test.beforeEach(async ({ page }) => {
        singIn = PageFactory.GetPage(page, "signin") as SingInPage;
        movies = PageFactory.GetPage(page, "movies") as MoviesPage;
    });

    test("Test4  check add will watch Kinopoisk.ru", async () => {
        test.slow();
        await movies.openMovies();
        await movies.open250Top();
        await movies.openFilmGreenmile();
        await movies.addWillWatch();
        await singIn.SignIn(correctEmail, correctPaswrd);
        await movies.openFolderWillWatch();
        await expect(movies.NameFilmInFolder).toHaveText("Зеленая миля");
    });
    test("Test5  check rate film Kinopoisk.ru", async () => {
        test.slow();
        await movies.openMovies();
        await movies.openBestMovies2022();
        await movies.openFilmLicoricePizza();
        await movies.addRateFilm("6");
        await singIn.SignIn(correctEmail, correctPaswrd);
        await expect(movies.UserFilmRate).toHaveText("6");
    });
});


