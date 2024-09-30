import { test, expect, selectors } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { CheckoutPage } from "../../pages/CheckoutPage";

/** E2E Workflow */
test("E2E - Valid Login to Checking Out", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkout = new CheckoutPage(page);
  const home = new HomePage(page);

  //Tests
  await test.step("Valid Login", async () => {
    const loginToolkit = loginPage.passOverTools();
    await (await loginToolkit).goToLoginPage();
    await loginPage.login("standard_user", "secret_sauce");
    await selectors.setTestIdAttribute("data-test");
    await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
  });

  await test.step("Add New Item to Cart", async () => {
    await checkout.goToURLandValidLogin();
    await checkout.addItemToCart(page);
    await expect(checkout.cartBadge).toBeVisible();
    await checkout.getBadgeNumber();
    await expect(checkout.cartBadgeNumber).toBe("1");
  });

  await test.step("Check Cart and Continue", async () => {
    await checkout.cartLink.click();
    await checkout.checkoutButton.click();
    await checkout.fillBuyerInformation("Big", "Chongus", "12345");
    await checkout.continueButton.click();
    await expect(page.getByText("Checkout: Overview")).toBeVisible();
    await expect(await checkout.itemName.textContent()).toEqual(
      await home.itemName.textContent()
    );
    await expect(await checkout.itemName.textContent()).toEqual(
      await checkout.overviewItemName.textContent()
    );
  });

  await test.step("Finish Checkout and Back Home", async () => {
    await checkout.finishButton.click();
    await expect(page.getByText("Thank you for your order!")).toBeVisible;
    await checkout.backHomeButton.click();
    await expect(home.itemName).toBeVisible();
  });
});
