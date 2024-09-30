const { LoginTools } = require("./LoginTools"); 

exports.HomePage = class HomePage {
  constructor(page) { 
    this.page = page;
    this.LoginTools = new LoginTools(page);
    this.itemName = page.locator('[data-test="inventory-item-name"]').first();
    this.itemDescription = page
      .locator('[data-test="inventory-item-desc"]')
      .first();
    this.itemPrice = page.locator('[data-test="inventory-item-price"]').first();
    this.itemImage = page
      .locator('[data-test="inventory-item-sauce-labs-backpack-img"]')
      .first();
    this.addToCartButton = page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .first();
    this.burgerMenu = page.getByRole("button", { name: "Open Menu" });
    this.logoutLink = page.getByText("Logout");
  }

  async passOverTools() {
    return this.LoginTools;
  }

  /** Home Page Functions  */
  async goToURLandValidLogin() {
    await this.LoginTools.goToURLandValidLogin();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }

  async goToItemURL() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }
}; 
