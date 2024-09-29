import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Empty Cart Checkout", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.goToURLandValidLogin();
  await checkout.cartLink.click();
  await checkout.checkoutButton.click();
  await checkout.continueButton.click();
  await expect(page.getByText("Error")).toBeVisible();
});

test("Badge on Cart", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.goToURLandValidLogin();
  await checkout.addItemToCart(page);
  await expect(checkout.cartBadge).toBeVisible(); //redundant, no? or better to check it exists then its validity?
  await checkout.getBadgeNumber();
  await expect(checkout.cartBadgeNumber).toBe("1");
});
