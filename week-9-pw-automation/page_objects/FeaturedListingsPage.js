export default class FeaturedListingsPage {
  constructor(page) {
    this.page = page;
    this.resultLabel = page.locator('h5.css-ijss57');
    this.firstResultBedrooms = page.getByText("Bedrooms:").first();
    this.firstResultCity = page.getByText("City:").first();
    this.firstPriceValue = page
      .locator('//div[starts-with(text(), "$")]')
      .first();
    this.searchField = page.getByRole("textbox", { name: "Search" });
    this.searchButton = page.getByRole("button", { name: "Start Search" });
    this.bedroomsListBox = page.getByRole("button", { name: "Bedrooms" });
    this.cityField = page.getByRole("textbox", { name: "City" });
    this.priceMinValue = page.locator('input[data-index="0"]');
    this.priceMaxValue = page.locator('input[data-index="1"]');
  }

  async getPrice() {
    let price = await this.firstPriceValue.textContent();
    price = price.split("$").at(1).trim().replaceAll(",", "");
    return parseInt(price);
  }

  async getBedrooms() {
    let bedrooms = await this.firstResultBedrooms.textContent();
    bedrooms = bedrooms.split(":").at(1).trim();
    return parseInt(bedrooms);
  }

  async getCity() {
    const city = await this.firstResultCity.textContent();
    return city.split(':').at(1).trim();
  }

  async searchByTitle(property) {
    await this.searchField.fill("");
    await this.searchField.fill(property);
    await this.searchButton.click();
  }

  async searchByBedrooms(amountOfBedrooms) {
    await this.bedroomsListBox.click();
    await this.page
      .getByRole("option", { name: amountOfBedrooms + "+" })
      .click();
    await this.searchButton.click();
  }

  async searchByCity(city) {
    await this.cityField.fill(city);
    await this.searchButton.click();
  }

  async searchByPrice(min, max) {
    await this.priceMinValue.fill("" + min);
    await this.priceMaxValue.fill("" + max);
    await this.searchButton.click();
  }
}


