import HttpClient from "../client/http.client";

describe("Test Put method", () => {
    test("Check update user name and website", async () => {
        const response = await HttpClient.put("users/5", {
            username: "Chelsey",
            website: "demarco7.com",
        });
        expect(response.status).toBe(200);
        expect(response.body.username).toContain("Chelsey");
        expect(response.body.website).toContain("demarco7.com");
    });
    test("Check update comments ", async () => {
        const expected = {
            id: 44,
            name: "hic molestiae",
            body: "nid quasi modi dicta",
        };
        const response = await HttpClient.put("comments/44", {
            name: "hic molestiae",
            body: "nid quasi modi dicta",
        });
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(expected);
    });
    test("Check update comments body null", async () => {
        const response = await HttpClient.put("comments/33", {
            name: "hic molestiae",
            body: null,
        });
        expect(response.status).toBe(200);
        expect(response.body.body).toBeNull();
    });
    test("Check userID update in posts", async () => {
        const response = await HttpClient.put("posts/68", { userId: 44 });
        expect(response.status).toBe(200);
        expect(response.body.userId).toBe(44);
    });
    test("Check todos update completed", async () => {
        const response = await HttpClient.put("todos/50", { completed: false });
        expect(response.status).toBe(200);
        expect(response.body.completed).toBeFalsy();
    });
});
