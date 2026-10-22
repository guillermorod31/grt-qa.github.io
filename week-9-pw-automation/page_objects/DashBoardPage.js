export default class DashBoardPage {
  constructor(page) {
    this.page = page;
    this.userFullName = page.locator('h6.MuiTypography-subtitle2');
    this.userRole = page.locator('a p.MuiTypography-body2');
    this.dropdownMenu = page.locator("button div.css-inlwhr");
    this.logoutButton = page.getByRole("menuitem", { name: "Logout" });
  }

  async clickLogoutLink() {
    await this.dropdownMenu.click();
    await this.logoutButton.click();
  }
  
}