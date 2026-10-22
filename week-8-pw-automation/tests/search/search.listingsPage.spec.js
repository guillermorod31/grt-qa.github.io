import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/HomePage";
import FeaturedListingsPage from "../../page_objects/FeaturedListingsPage";
import listingData from "../../testData/listing.json";

test.describe("Search Featured Listings", () => {
  test("Verify user can search by Title", async ({ page }) => {
    const home = new HomePage(page);
    const featuredListings = new FeaturedListingsPage(page);

    await page.goto("/");

    await home.clickDarkMode();
    await home.clickFeaturedListings();
    await featuredListings.searchByTitle(listingData.title);

    await expect(featuredListings.resultLabel).toHaveText(listingData.title);
  });

test("Verify user can search by Bedrooms", async ({ page }) => {
    const home = new HomePage(page);
    const featuredListings = new FeaturedListingsPage(page);

    await page.goto("/");

    await home.clickDarkMode();
    await home.clickFeaturedListings();
    await featuredListings.searchByBedrooms(listingData.bedrooms);

    const actualBedrooms = await featuredListings.getBedrooms();

    expect(actualBedrooms).toBeGreaterThanOrEqual(listingData.bedrooms);
  });
  
  test("Verify user can search by City", async ({ page }) => {
    const home = new HomePage(page);
    const featuredListings = new FeaturedListingsPage(page);

    await page.goto("/");

    await home.clickDarkMode();
    await home.clickFeaturedListings();
    await featuredListings.searchByCity(listingData.city);

    const actualCity = await featuredListings.getCity();

    expect(actualCity).toEqual(listingData.city);
  });

  test("Verify user can search by Price", async ({ page }) => {
    const home = new HomePage(page);
    const featuredListings = new FeaturedListingsPage(page);

    await page.goto("/");

    await home.clickDarkMode();
    await home.clickFeaturedListings();
    await featuredListings.searchByPrice(listingData.minPrice, listingData.maxPrice);

    const actualPrice = await featuredListings.getPrice();

    expect(actualPrice).toBeGreaterThanOrEqual(listingData.minPrice);
    expect(actualPrice).toBeLessThanOrEqual(listingData.maxPrice);
  });
});