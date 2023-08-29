import HttpClient from "../client/http.client";

describe("Test delete method ", () => {
    test("Delete user", async () => {
        const response = await HttpClient.delete("users/2", {});
        expect(response.status).toBe(200);
    });
    it("Delete  post", async () => {
        const response = await HttpClient.delete("posts/65", {});
        expect(response.status).toBe(200);
    });
    test("delete todos ", async () => {
        const response = await HttpClient.put("todos/50", {});
        expect(response.status).toBe(200);
    });
    test("delete albums ", async () => {
        const response = await HttpClient.put("todos/33", {});
        expect(response.status).toBe(200);
    });
});
