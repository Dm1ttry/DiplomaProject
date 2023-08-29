import MainPage from "./main.page";
import { Locator, Page } from "playwright-core";

export default class SingInPage extends MainPage {
    readonly EmailUser: Locator;
    readonly PasswordUser: Locator;
    readonly PhoneUser: Locator;
    readonly ButtonSignIn: Locator;
    readonly ErrorEmail: Locator;
    readonly ErrorPhone: Locator;
    readonly OpenSignIn: Locator;
    readonly UserAvatar: Locator;
    readonly PhoneSignInBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.OpenSignIn = page.locator(
            '//button[@class="styles_loginButton__LWZQp"]'
        );
        this.EmailUser = page.locator('//input[@id="passp-field-login"]');
        this.UserAvatar = page.locator(
            '//div[@class="styles_avatar__C1Xaq styles_avatarDefault__G_Q6U"]'
        );
        this.PasswordUser = page.locator('//input[@id="passp-field-passwd"]');
        this.PhoneUser = page.locator('//input[@id="passp-field-phone"]');
        this.PhoneSignInBtn = page.locator('//button[@data-type="phone"]');
        this.ButtonSignIn = page.locator('//button[@id="passp:sign-in"]');
        this.ErrorEmail = page.locator('//div[@id="field:input-login:hint"]');
        this.ErrorPhone = page.locator('//div[@id="field:input-phone:hint"]');
    }

    async SignInEmail(email: string) {
        await this.page.waitForLoadState();
        await this.EmailUser.type(email);
        await this.ButtonSignIn.click();
    }
    async SignIn(email: string, password: string) {
        await this.EmailUser.type(email);
        await this.ButtonSignIn.click();
        await this.PasswordUser.type(password);
        await this.ButtonSignIn.click();
    }
    async SignInPhone(phone: string) {
        await this.page.waitForLoadState();
        await this.PhoneSignInBtn.click();
        await this.PhoneUser.type(phone);
        await this.ButtonSignIn.click();
    }
    async openSignInPage() {
        await this.OpenSignIn.click();
    }
}
