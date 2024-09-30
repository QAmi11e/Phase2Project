const { LoginTools } = require("./LoginTools");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.LoginTools = new LoginTools(page);
  }

  async passOverTools() {
    return this.LoginTools;
  }

  /*** Login Page Functions */
  async login(username, password) {
    await ((this.LoginTools).usernameTextbox).fill(username);
    await ((this.LoginTools).passwordTextbox).fill(password);
    await((this.LoginTools).loginButton).click();
  }
}; 
