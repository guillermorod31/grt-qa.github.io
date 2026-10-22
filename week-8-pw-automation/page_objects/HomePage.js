class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole("link", { name: "Login" });
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.darkMode =  page.locator('span .MuiSwitch-input');
    this.homeLink = page.getByRole("link", { name: "Home" });
    this.featuredListingsLink = page.getByRole("link", { name: "Featured Listings" });
    this.searchField = page.getByRole("textbox", { name: "Search"});
    this.searchButton = page.getByRole("button", { name: "Start Search" });
    this.bedroomsListBox = page.getByRole("button", { name: "Bedrooms"});
    this.cityField = page.getByRole("textbox", { name: "City"});
    this.priceMinValue = page.locator('input[data-index="0"]');
    this.priceMaxValue = page.locator('input[data-index="1"]');
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

   async clickRegisterLink() {
    await this.registerLink.click();
  }

  async clickDarkMode(){
    await this.darkMode.click();
  }

  async clickHomeLink(){
    await this.homeLink.click();
  }

  async clickFeaturedListings(){
    await this.featuredListingsLink.click();
  }

  async searchByTitle(property){
    await this.searchField.fill(property);
    await this.searchButton.click();
  }

  async searchByBedrooms( amountOfBedrooms ){
    await this.bedroomsListBox.click();
    await this.page.getByRole("option", { name: amountOfBedrooms + "+"}).click();
    await this.searchButton.click();
  }

  async searchByCity(city){
    await this.cityField.fill(city);
    await this.searchButton.click();
  }

  async searchByPrice(min, max){
    await this.priceMinValue.fill("" + min);
    await this.priceMaxValue.fill("" + max);
    await this.searchButton.click();
  }

}
module.exports = HomePage;
