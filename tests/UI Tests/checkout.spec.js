import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../../pages/CheckoutPage";

/** Additional Test 1 */
test("Empty Cart Checkout", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.goToURLandValidLogin();
  await checkout.cartLink.click();
  await checkout.checkoutButton.click();
  await checkout.continueButton.click();
  await expect(page.getByText("Error")).toBeVisible();
});

/** Additional Test 2 */
test("Badge on Cart", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.goToURLandValidLogin();
  await checkout.addItemToCart(page);
  await expect(checkout.cartBadge).toBeVisible(); 
  await checkout.getBadgeNumber();
  await expect(checkout.cartBadgeNumber).toBe("1");
});


