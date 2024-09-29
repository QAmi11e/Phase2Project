/** Exists because other pages need to login and I was chaining dependencies. ie from Login->Home->Checkout
 * 
 */

exports.LoginTools = class LoginTools {
  constructor(page) {
    this.page = page;
    this.usernameTextbox = page.getByPlaceholder("Username");
    this.passwordTextbox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { id: "login-button" });
  }

  async goToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async goToURLandValidLogin() {
    await this.goToLoginPage();
    await this.usernameTextbox.fill("standard_user");
    await this.passwordTextbox.fill("secret_sauce");
    await this.loginButton.click();
  }
};
