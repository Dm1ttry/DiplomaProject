import HttpClient from "../client/http.client";

describe("Test Get method", () => {
    test("Get status todos by id", async () => {
        const response = await HttpClient.get("todos", { id: 29 });
        expect(response.status).toBe(200);
    });

    test("Get todos false by todos", async () => {
        const response = await HttpClient.get("todos", { completed: false });
        expect(response.status).toBe(200);
    });

    test("Get posts by title", async () => {
        const expected = {
            userId: 2,
            id: 12,
            title: "in quibusdam tempore odit est dolorem",
            body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
        };
        const response = await HttpClient.get("posts", {
            title: "in quibusdam tempore odit est dolorem",
        });
        expect(response.body[0]).toMatchObject(expected);
    });
    test("Get user email and check ends with ", async () => {
        const response = await HttpClient.get("users", { id: 6 });
        expect(response.status).toBe(200);
        const endWith = response.body[0].email.endsWith(".info");
        expect(endWith).toBeTruthy();
    });
    it("find posts by id and check title", async () => {
        const response = await HttpClient.get("posts", { id: 41 });
        expect(response.status).toBe(200);
        const expected = "non est facere";
        expect(response.body[0].title).toBe(expected);
    });
});
