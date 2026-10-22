import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/HomePage";
import FeaturedListingsPage from "../../page_objects/FeaturedListingsPage";
import UserApi from "../../api/user.api";
import ListingApi from "../../api/listing.api";
import userCredentials from "../../testData/userCredentials.json" assert { type: "json" };

test.describe("Search Featured Listings", () => {
  let listingApi;
  let userApi;
  let home;
  let featuredListings;
  let accessToken;
  let listingId;
  let minPrice = 300000;
  let maxPrice = 1000000;

  test.beforeAll(async ({ request }) => {
    userApi = new UserApi(request); // to create all the pages that I need
    accessToken = await userApi.login(
      //to get the access token
      userCredentials.admin.email,
      userCredentials.admin.password
    );
  });

  test.beforeEach("Login and create new listing", async ({ page, request }) => {
    home = new HomePage(page);
    featuredListings = new FeaturedListingsPage(page);
    listingApi = new ListingApi(request, accessToken); //to instanciate the object to create a listing, with the user authenticated

    await page.goto("/");
    await home.clickDarkMode();
    await home.clickFeaturedListings();
  });

  test(
    "Verify user can search by Title",
    async ({ page }) => {
      test.info().annotations.push({
        type: "Flaky",
        description: "Backend/UI sync delay",
      });
      const response = await listingApi.createListing();
      listingId = response.id;
      console.log(`Listing ID: ${listingId} created`);

      await page.evaluate((token) => {
        localStorage.setItem("accessToken", token);
      }, accessToken);

      await expect
        .poll(
          async () => {
            await page.reload();
            await page.waitForLoadState("load");
            await featuredListings.searchByTitle(response.title);
            return await featuredListings.resultLabel.isVisible();
          },
          {
            timeout: 20_000,
            intervals: [1_000],
          }
        )
        .toBe(true);
      await expect(featuredListings.resultLabel).toHaveText(response.title);
    },
    { retries: 2, timeout: 60_000 }
  );

  test("Verify user can search by Bedrooms", async ({ page }) => {
    const response = await listingApi.createListing();
    listingId = response.id;
    console.log(`Listing ID: ${listingId} created`);

    await page.evaluate((token) => {
      localStorage.setItem("accessToken", token);
    }, accessToken);
    await page.reload();
    await featuredListings.searchByBedrooms(response.bedrooms);

    const actualBedrooms = await featuredListings.getBedrooms();

    expect(actualBedrooms).toBeGreaterThanOrEqual(Number(response.bedrooms));
  });

  test("Verify user can search by City", async ({ page }) => {
    const response = await listingApi.createListing();
    listingId = response.id;
    console.log(`Listing ID: ${listingId} created`);

    await page.evaluate((token) => {
      localStorage.setItem("accessToken", token);
    }, accessToken);
    await page.reload();
    await featuredListings.searchByCity(response.city);

    const actualCity = await featuredListings.getCity();

    expect(actualCity).toEqual(response.city);
  });

  test("Verify user can search by Price", async () => {
    await featuredListings.searchByPrice(minPrice, maxPrice);

    const actualPrice = await featuredListings.getPrice();

    expect(actualPrice).toBeGreaterThanOrEqual(minPrice);
    expect(actualPrice).toBeLessThanOrEqual(maxPrice);
  });

  test.afterEach("Remove Listing", async ({ request }) => {
    if (!listingId) {
      console.log("No listing created, nothing to delete");
      return;
    }

    await listingApi.removeListing(listingId);

    console.log(`Listing ${listingId} deleted!`);
    listingId = undefined;
  });
});
