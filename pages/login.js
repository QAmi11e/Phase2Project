/**exists bc it's easier to adjust for changes made to the site over in this file than it would be in the Tests.*/

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameTextbox = page.getByPlaceholder("Username");
    this.passwordTextbox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { id: "login-button" });
  }

  async goToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    //Will populate the arguments with parameters passed in when login is conjured in test
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }

  //For use with other pages...
  async loginSucc(){ 
    await this.usernameTextbox.fill("standard_user");
    await this.passwordTextbox.fill("secret_sauce");
    await this.loginButton.click();
  }
}; //end of the class
