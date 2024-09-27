import { test, expect, selectors } from "@playwright/test";
import { HomePage } from "../pages/Home";


test("At Least One Item on Home", async ({ page }) => {
  const Home = new HomePage(page); //is there any way I can put this in a testEach?
  await Home.goToURLAndLogin(page);
  await expect(Home.itemName).toBeVisible();
  await expect(Home.itemDescription).toBeVisible();
  await expect(Home.itemPrice).toBeVisible();
  await expect(Home.itemImage).toBeVisible();
  await expect(Home.addToCartButton).toBeVisible();
});

test("Logout", async ({ page }) => {
  const Home = new HomePage(page);
  const loginToolkit = Home.passOverTools();
  await Home.goToURLAndLogin(page);
  await Home.logout(page);
  await expect((await loginToolkit).loginButton).toBeVisible(); //awaitception
  await Home.goToItemURL(page);
  await expect(page.getByText("You can only access '/inventory.html' when you are logged in.")).toBeVisible(); //if i gotta check more than like 3 different error messages i might make a class for error messages too smh...........
});


