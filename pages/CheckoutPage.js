const { LoginTools } = require("./LoginTools"); //this was apparently the only way to import this without destroying stability of exports.HomePage. import ( x ) from "x" doesn't work here )-:

const { HomePage } = require("./HomePage");

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.LoginTools = new LoginTools(page);
    this.cartLink = page.locator("[data-test='shopping-cart-link']"); //if no name attribute and only data-test, must make use .locator
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.continueButton = page.getByRole("button", { name: "continue" });
    this.cartBadge = page.locator("[data-test='shopping-cart-badge']");
    this.cartBadgeNumber = "";
  }

  async goToURLandValidLogin() {
    await this.LoginTools.goToURLandValidLogin();
  }

  async addItemToCart(page) {
    const home = new HomePage(page);
    await home.addToCartButton.click();
  }

  async getBadgeNumber() {
    this.cartBadgeNumber = await (this.page.locator("span[data-test='shopping-cart-badge']")).textContent();
  }

};
