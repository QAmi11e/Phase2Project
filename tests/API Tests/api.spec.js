import { test, expect } from '@playwright/test';

const fs = require("fs");
const path = require("path");
const baseURL = "https://jsonplaceholder.typicode.com";

test("GET User 1's Post", async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);
    expect(response.status()).toBe(200);
    const textResponse = await response.text();
    expect(textResponse).toContain('1');
});

test("POST New Comment", async ({ request }) => {
    const response = await request.post(`${baseURL}/posts`, {
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
});

test.only("Alphabetize Posts", async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`, {
        ignoreHTTPSErrors: true,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const sortedPosts = responseBody.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    console.log(sortedPosts);

    //THANK YOU MICHAEL BROOKINS AND GUANG CHEN
    const artifactDir = path.resolve(__dirname, "Artifacts");
    if (!fs.existsSync(artifactDir)) {
        fs.mkdirSync(artifactDir);
    }
    const artifactPath = path.resolve(artifactDir, "alphabetizedPosts.json");
    fs.writeFileSync(artifactPath, JSON.stringify(sortedPosts, null, 2));
    const artifactPosts = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
    artifactPosts.forEach((post) => {
        expect(post).toHaveProperty("userId");
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        expect(post).toHaveProperty("body");
    });
    console.log(`Alphabetized posts have saved to ${artifactPath}`);
});
