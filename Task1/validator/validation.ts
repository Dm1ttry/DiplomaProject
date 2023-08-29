export default class ValidationForm {
    constructor(
        public UserName: string,
        public UserEmail: string,
        public UserPassword: string,
        public FirstNameUser: string,
        public LastNameUser: string
    ) {
        this.UserName = UserName;
        this.UserEmail = UserEmail;
        this.UserPassword = UserPassword;
        this.FirstNameUser = FirstNameUser;
        this.LastNameUser = LastNameUser;
    }

    ValidUserName() {
        const UserNameRegex: RegExp = /^[A-Za-z0-9_]{3,16}$/;
        if (UserNameRegex.test(this.UserName) === false) {
            return "Not valid user name";
        } else {
            return "Valid user name";
        }
    }
    ValidUserEmail() {
        const EmailRegex: RegExp =
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

        if (EmailRegex.test(this.UserEmail) === false) {
            return "Not valid user email";
        } else {
            return "Valid user email";
        }
    }
    ValidUserPassword() {
        const UserPassword: RegExp = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

        if (UserPassword.test(this.UserPassword) === false) {
            return "Not valid password";
        } else {
            return "Valid user password";
        }
    }
    ValidFirstNameUser() {
        const FirstNameUser: RegExp = /^[A-Za-z]{3,13}$/;

        if (FirstNameUser.test(this.FirstNameUser) === false) {
            return "Not valid user first name";
        } else {
            return "Valid user first name";
        }
    }
    ValidLastNameUser() {
        const LastNameUser: RegExp = /^[A-Za-z]{3,13}$/;

        if (LastNameUser.test(this.LastNameUser) === false) {
            return "Not valid user last name";
        } else {
            return "Valid user last name";
        }
    }
    NullCheck() {
        const UserNameRegex: RegExp = /^[A-Za-z0-9_]{3,15}$/;
        const EmailRegex: RegExp =
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
        const UserPassword: RegExp = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
        const FirstNameUser: RegExp = /^[a-zA-Z][a-zA-Z-\.]{2,16}$/;
        const LastNameUser: RegExp = /^[A-Za-z]{3,13}$/;

        if (this.UserName === " " || undefined || null) {
            return "User name is null or undefined";
        } else if (this.UserEmail === " " || undefined || null) {
            return "User email is null or undefined";
        } else if (this.UserPassword === " " || undefined || null) {
            return "User password is null or undefined";
        } else if (this.FirstNameUser === " " || undefined || null) {
            return "User first name is null or undefined";
        } else if (this.LastNameUser === " " || undefined || null) {
            return "User last name is null or undefined";
        }
    }
}
