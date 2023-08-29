import ValidationForm from "../validator/validation";

describe("Positive test validation", () => {
    const value = {
        validUserName: "Valid user name",
        validEmail: "Valid user email",
        validPassword: "Valid user password",
        validFirstNameUser: "Valid user first name",
        validLastNameUser: "Valid user last name",
    };
    test(" Check for permissible max length user name ", () => {
        const validation = new ValidationForm(
            "User12345678900",
            "test@mail.com",
            "Pass12grg34",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.validUserName);
    });
    test(" Check for permissible minimal length user name ", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "Pass12grg34",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.validUserName);
    });
    test(" Check for permissible max length in password ", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "PaswOrd1234567800000",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserPassword()).toEqual(value.validPassword);
    });
    test(" Check for permissible minimal length in password ", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "123456",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserPassword()).toEqual(value.validPassword);
    });
    test(" Check for permissible max length in first name", () => {
        const validation = new ValidationForm(
            "user123",
            "test@mail.com",
            "PaswOrd1000",
            "IvanIvannn",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toEqual(
            value.validFirstNameUser
        );
    });
    test(" Check for permissible min length in first name", () => {
        const validation = new ValidationForm(
            "user123",
            "test@mail.com",
            "PaswOrd1200000",
            "Iva",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toEqual(
            value.validFirstNameUser
        );
    });
    test(" Check for permissible min length in last name", () => {
        const validation = new ValidationForm(
            "user123",
            "test@mail.com",
            "PaswOrd1234",
            "Ivan",
            "Iva"
        );
        expect(validation.ValidLastNameUser()).toEqual(value.validLastNameUser);
    });
    test(" Check for permissible max length in last name", () => {
        const validation = new ValidationForm(
            "user123",
            "test@mail.com",
            "PaswOrd",
            "Ivan",
            "IvanovIvanovv"
        );
        expect(validation.ValidLastNameUser()).toEqual(value.validLastNameUser);
    });
    test(" Check for use symbols in password ", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "Pass@$$44",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserPassword()).toContain(value.validPassword);
    });
    test(" Check for use different text case in user name ", () => {
        const validation = new ValidationForm(
            "AnTon",
            "test@mail.com",
            "PaswOrd1234567800000",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toBe(value.validUserName);
        expect(validation.ValidUserPassword()).toBe(value.validPassword);
        expect(validation.ValidFirstNameUser()).toBe(value.validFirstNameUser);
    });
    test(" Check for use different text case in password", () => {
        const validation = new ValidationForm(
            "Anton",
            "test@mail.com",
            "PaswOrdF7$$",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserPassword()).toBe(value.validPassword);
        expect(validation.ValidFirstNameUser()).toBe(value.validFirstNameUser);
    });
    test(" Check for use different text case in first name", () => {
        const validation = new ValidationForm(
            "Anton",
            "test@mail.com",
            "PaswOrdF7$$",
            "IvAnN",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toBe(value.validFirstNameUser);
    });
    test(" Check for use different text case in last name", () => {
        const validation = new ValidationForm(
            "Anton",
            "test@mail.com",
            "PaswOrdF7$$",
            "Ivan",
            "IvAnOvVV"
        );
        expect(validation.ValidLastNameUser()).toBe(value.validLastNameUser);
    });
    test("Check for digit at the beginning in user name ", () => {
        const validation = new ValidationForm(
            "12345Ant",
            "test@mail.com",
            "Pass12grg34",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.validUserName);
    });
    test(" Check for digit use symbols in in user mail", () => {
        const validation = new ValidationForm(
            "12345Ant",
            "te$$$$st@mail.com",
            "Pass12grg34",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserEmail()).toEqual(value.validEmail);
    });
});
describe("Negative test validation", () => {
    const value = {
        novalidUserName: "Not valid user name",
        novalidFirstNameUser: "Not valid user first name",
        novalidLastNameUser: "Not valid user last name",
        novalidEmail: "Not valid user email",
        userNameNull: "User name is null or undefined",
        emailNull: "User email is null or undefined",
        passwordNull: "User password is null or undefined",
        firstNameNull: "User first name is null or undefined",
        lastNameNull: "User last name is null or undefined",
    };
    test(" Check above the permissible max length user name ", () => {
        const validation = new ValidationForm(
            "User1234567890000",
            "test@mail.com",
            "Pass12grg34",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.novalidUserName);
    });
    test(" Check above the permissible max length first name ", () => {
        const validation = new ValidationForm(
            "User120",
            "test@mail.com",
            "Pass12grg34",
            "IvanIvanIvanIvanIvan",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toEqual(
            value.novalidFirstNameUser
        );
    });
    test(" Check above the permissible max length last name ", () => {
        const validation = new ValidationForm(
            "User134",
            "test@mail.com",
            "Pass12grg34",
            "Ivan",
            "IvanovIvanovIvanovIvanovIvanov"
        );
        expect(validation.ValidLastNameUser()).toEqual(
            value.novalidLastNameUser
        );
    });
    test(" Check for null in user name ", () => {
        const validation = new ValidationForm(
            " ",
            "test@mail.com",
            "Pass134",
            "Ivan",
            "Ivanov"
        );
        expect(validation.NullCheck()).toEqual(value.userNameNull);
    });
    test(" Check for null in user email", () => {
        const validation = new ValidationForm(
            "Ant",
            " ",
            "Pass@$$44",
            "Ivan",
            "Ivanov"
        );
        expect(validation.NullCheck()).toEqual(value.emailNull);
    });
    test(" Check for null in password name", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            " ",
            "Ivan",
            "Ivanov"
        );
        expect(validation.NullCheck()).toEqual(value.passwordNull);
    });
    test(" Check for null in user first name", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            " ",
            "Ivan",
            "Ivanov"
        );
        expect(validation.NullCheck()).toEqual(value.passwordNull);
    });
    test(" Check for null in user last name", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "Pass134",
            " ",
            "Ivanov"
        );
        expect(validation.NullCheck()).toEqual(value.firstNameNull);
    });
    test("Check use symbols in user name ", () => {
        const validation = new ValidationForm(
            "Ant$$",
            "test@mail.com",
            "Pass@$$44",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.novalidUserName);
    });
    test("Check use symbols in first name ", () => {
        const validation = new ValidationForm(
            "Ants",
            "test@mail.com",
            "Pass@$$44",
            "Ivan$$$",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toEqual(
            value.novalidFirstNameUser
        );
    });
    test(" Check for null in user last name", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "Pass134",
            "Dima",
            "Ivanov%%@"
        );
        expect(validation.ValidLastNameUser()).toEqual(
            value.novalidLastNameUser
        );
    });
    test("Check for only number in first name ", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "PaswOrd123",
            "1$245",
            "Ivanov"
        );
        expect(validation.ValidFirstNameUser()).toEqual(
            value.novalidFirstNameUser
        );
    });
    test("Check for only number in last name", () => {
        const validation = new ValidationForm(
            "Ant",
            "test@mail.com",
            "123456",
            "Ivan",
            "1544445"
        );
        expect(validation.ValidLastNameUser()).toEqual(
            value.novalidLastNameUser
        );
    });
    test("Check for space in user name", () => {
        const validation = new ValidationForm(
            "Ant user",
            "test@mail.com",
            "123456",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserName()).toEqual(value.novalidUserName);
    });
    test("Check email without @ ", () => {
        const validation = new ValidationForm(
            "Ant",
            "testmail.com",
            "123456",
            "Ivan",
            "Ivanov"
        );
        expect(validation.ValidUserEmail()).toEqual(value.novalidEmail);
    });
});