import { test, expect } from '@playwright/test';

test("GET User 1's Post", async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status()).toBe(200);
    const textResponse = await response.text();
    expect(textResponse).toContain('1');
});

test("POST New Comment", async ({ request }) => {
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            "userId": 11,
            "id": 101,
            "title": "Wubba Lubba Dub Dub",
            "body": "Such is the burden of life."
        }
    })
    expect(response.status()).toBe(201);
    const textResponse = await response.text();
    expect(textResponse).toContain('11');
    console.log(await response.json());
})