import { test, expect, selectors } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.beforeEach("Get Login tools and navigate to URL", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginToolkit = loginPage.passOverTools();
  await (await loginToolkit).goToLoginPage();
});

//Concepts: GET BY PLACEHOLDER, GET BY TEXT, {exact: T/F}
test("Incomplete/Invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("oopsy", "");
  //await expect(page.getByText("Epic sadface: Password is required", {exact: true})).toBeVisible(); //*****here's the exact match of text, case sensitive
  await expect(page.getByText("PaSsWord is RequIreD")).toBeVisible(); //*** bc not exact, can have Spongebob meme */
}); 

//Concepts: Get by test-Id, importing Selectors
test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("standard_user", "secret_sauce");
  await selectors.setTestIdAttribute("data-test");
  await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
});
