import HttpClient from "../client/http.client";

describe("Test Post method", () => {
    test("create new post", async () => {
        const response = await HttpClient.post("posts", {
            userId: 1,
            id: 49,
            title: "sunt aut facere repellat",
            body: "quia et suscipit",
        });
        expect(response.status).toBe(201);
    });
    test("create new post and check new post", async () => {
        const expected = {
            userId: 1,
            id: 101,
            title: "sunt aut facere repellat",
            body: "quia et suscipit",
        };
        const response = await HttpClient.post("posts", {
            userId: 1,
            id: 101,
            title: "sunt aut facere repellat",
            body: "quia et suscipit",
        });
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(expected);
    });
    test("create new user and check undefined in email", async () => {
        const response = await HttpClient.post("users", {
            id: 11,
            name: "Leanne",
            username: "Bret",
            email: undefined,
        });
        expect(response.status).toBe(201);
        expect(response.body.email).toBeUndefined();
    });
    test("create new comments and check null in name", async () => {
        const response = await HttpClient.post("comments", {
            id: 501,
            name: null,
            username: "Bret",
            body: "neque unde voluptatem iure",
        });
        expect(response.status).toBe(201);
        expect(response.body.name).toBeNull();
    });
    test("create new comments and check id not null", async () => {
        const response = await HttpClient.post("comments", {
            id: 501,
            name: null,
            username: "Bret",
            body: "neque unde voluptatem iure",
        });
        expect(response.status).toBe(201);
        expect(response.body.id).toBeTruthy();
    });
});
