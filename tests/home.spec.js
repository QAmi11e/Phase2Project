import { test, expect, selectors } from "@playwright/test";
import { HomePage } from "../pages/home";


test("At Least One Item on Home", async ({ page }) => {
  const Home = new HomePage(page); //is there any way I can put this in a testEach?
  await Home.goToURLAndLogin(page); //I wonder if creating the bridge between Home and Login was good? What if I just imported Login here... I would have imported Login in both home.js and this. Is that the worst thing? This is much cleaner upfront tho
  await expect(Home.itemName).toBeVisible();
  await expect(Home.itemDescription).toBeVisible();
  await expect(Home.itemPrice).toBeVisible();
  await expect(Home.itemImage).toBeVisible();
  await expect(Home.addToCartButton).toBeVisible();
});

test("Logout", async ({ page }) => {
  const Home = new HomePage(page);
  await Home.goToURLAndLogin(page);
  await Home.logout(page);
  await page.pause();
  await expect(page.getByRole("button",{id: "login-button"})).toBeVisible(); //bro i think ur allowed to write locators, esp for such a specific flow that enters a different page's js that doesn't have it 
  await Home.goToItemURL(page);
  await expect(page.getByText("You can only access '/inventory.html' when you are logged in.")).toBeVisible();
});


