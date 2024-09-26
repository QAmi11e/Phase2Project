import { test, expect, selectors } from "@playwright/test";
import { HomePage } from "../pages/home";

test("At Least One Item on Home", async ({ page }) => {
  const Home = new HomePage(page);
  await Home.goToURLAndLogin(page);
  await expect(Home.itemName).toBeVisible();
  await expect(Home.itemDescription).toBeVisible();
  await expect(Home.itemPrice).toBeVisible();
  await expect(Home.itemImage).toBeVisible();
  await expect(Home.addToCartButton).toBeVisible();
});


