import {test,expect} from '@playwright/test';

test("GET Store Inventory", async ({request}) => {
    const response = await request.get("https://petstore.swagger.io/v2/store/inventory");
    expect(response.status()).toBe(200);
});