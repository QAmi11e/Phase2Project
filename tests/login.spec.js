import { test, expect, selectors } from "@playwright/test";
import { LoginPage } from "../pages/login";

// NOTE: decided on no beforeEach bc I still have to call constructor for each test...

//Concepts: GET BY PLACEHOLDER, GET BY TEXT, {exact: T/F}
test("Incomplete/Invalid Login", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.goToLoginPage();
  await Login.login("oopsy", "");
  //await expect(page.getByText("Epic sadface: Password is required", {exact: true})).toBeVisible(); //*****here's the exact match of text, case sensitive
  await expect(page.getByText("PaSsWord is RequIreD")).toBeVisible(); //*** bc not exact, can have Spongebob meme */
}); 

//Concepts: Get by test-Id, importing Selectors
test("Valid Login", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.goToLoginPage();
  await Login.login("standard_user", "secret_sauce");
  await selectors.setTestIdAttribute("data-test");
  await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
});
