/**exists bc it's easier to adjust for changes made to the site over in this file than it would be in the Tests.*/

const { LoginTools } = require("./LoginTools");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.LoginTools = new LoginTools(page);
  }

  async passOverTools() {
    //passes tools from LoginTools
    return this.LoginTools;
  }

  /*** Login Page Functions */
  //this is left blank for a reason bc we want to control the values in the tests
  async login(username, password) {
    //Will populate the arguments with parameters passed in when login is conjured in test
    await ((this.LoginTools).usernameTextbox).fill(username);
    await ((this.LoginTools).passwordTextbox).fill(password);
    await((this.LoginTools).loginButton).click();
  }
}; //end of the class
