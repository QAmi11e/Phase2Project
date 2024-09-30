const { LoginTools } = require("./LoginTools"); 

const { HomePage } = require("./HomePage");

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.LoginTools = new LoginTools(page);
    this.cartLink = page.locator("[data-test='shopping-cart-link']"); 
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cartBadge = page.locator("[data-test='shopping-cart-badge']");
    this.cartBadgeNumber = "";
    this.firstName = page.getByPlaceholder("First");
    this.lastName = page.getByPlaceholder("Last");
    this.zip = page.getByPlaceholder("Zip/Postal Code");
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.backHomeButton = page.getByRole("button", { name: "Back Home" });
    this.itemName = page.locator('[data-test="inventory-item-name"]').first();
    this.overviewItemName = page.locator('[data-test="inventory-item-name"]').first();
  }

  async goToURLandValidLogin() {
    await this.LoginTools.goToURLandValidLogin();
  }

  /** Checkout Page Functions */
  async addItemToCart(page) {
    const home = new HomePage(page);
    await home.addToCartButton.click();
  }

  async getBadgeNumber() {
    this.cartBadgeNumber = await (this.page.locator("span[data-test='shopping-cart-badge']")).textContent();
  }

  async fillBuyerInformation(firstName, lastName, zip) {
    await (this.firstName).fill(firstName);
    await (this.lastName).fill(lastName);
    await (this.zip).fill(zip);
  }
};
