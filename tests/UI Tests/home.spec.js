import { test, expect} from "@playwright/test";
import { HomePage } from "../../pages/HomePage"; 

/** Positive Test */
test("At Least One Item on Home", async ({ page }) => {
  const home = new HomePage(page); //is there any way I can put this in a testEach?
  await home.goToURLandValidLogin();
  await expect(home.itemName).toBeVisible();
  await expect(home.itemDescription).toBeVisible();
  await expect(home.itemPrice).toBeVisible();
  await expect(home.itemImage).toBeVisible();
  await expect(home.addToCartButton).toBeVisible();
});

/** Additional Test 3 */
test("Logout", async ({ page }) => {
  const home = new HomePage(page);
  const loginToolkit = home.passOverTools();
  await home.goToURLandValidLogin();
  await home.logout();
  await expect((await loginToolkit).loginButton).toBeVisible(); //awaitception
  await home.goToItemURL();
  await expect(page.getByText("You can only access '/inventory.html' when you are logged in.")).toBeVisible(); //if i gotta check more than like 3 different error messages i might make a class for error messages too smh...........
});


