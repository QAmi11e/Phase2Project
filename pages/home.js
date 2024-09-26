/**exists bc it's easier to adjust for changes made to the site over in this file than it would be in the Tests.*/

const { LoginPage } = require("../pages/login"); //this was apparently the only way to import this without destroying stability of exports.HomePage. import ( x ) from "x" doesn't work here )-:

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
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
  }

  async goToURLAndLogin(page) {
    const Login = new LoginPage(page);
    await Login.goToLoginPage();
    await Login.loginSucc();
  }
}; //end of the class
