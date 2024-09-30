import { test, expect, selectors } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.beforeEach("Get Login tools and navigate to URL", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginToolkit = loginPage.passOverTools();
  await (await loginToolkit).goToLoginPage();
});

/** Negative Test Validation */
test("Incomplete/Invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("oopsy", "");
  await expect(page.getByText("PaSsWord is REQuIreD")).toBeVisible(); 
}); 

/** Login Verification */
test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("standard_user", "secret_sauce");
  await selectors.setTestIdAttribute("data-test");
  await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
});
