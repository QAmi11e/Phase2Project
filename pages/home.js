/**exists bc it's easier to adjust for changes made to the site over in this file than it would be in the Tests.*/

const { LoginTools } = require("./LoginTools"); //this was apparently the only way to import this without destroying stability of exports.HomePage. import ( x ) from "x" doesn't work here )-:

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.LoginTools = new LoginTools(page);
    // Did not use get by for below bc only .locator has other fx like .first() that can be run on em.
    // this is a giant constructor... hrm
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
    //passes tools from LoginTools to test file
    return this.LoginTools;
  }

  /** Home Page Functions  */

  async goToURLAndLogin(page) {
    await this.LoginTools.goToLoginPage();
    await this.LoginTools.validLogin();
  }

  async logout(page) {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }

  async goToItemURL(page) {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }

  /** Axed this guy bc toBeVisible can only be used with Locators and the value passed is NOT a Locator u_u
  async locateLoginButton(page){
    const Login = new LoginPage(page);
    const loginButton = Login.loginButton;
    return loginButton;
  }
    */
}; //end of the class
