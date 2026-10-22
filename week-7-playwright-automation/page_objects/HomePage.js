class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole("link", { name: "Login" });
    this.registerLink = page.getByRole("link", { name: "Register" });
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

   async clickRegisterLink() {
    await this.registerLink.click();
  }
}
module.exports = HomePage;
