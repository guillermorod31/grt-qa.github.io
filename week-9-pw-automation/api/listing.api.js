import { faker } from "@faker-js/faker";
import fs from "fs";

export default class ListingApi {
  constructor(request, accessToken) {
    this.request = request;
    this.accessToken = accessToken;
  }

  async createListing() {
    const data = {
      images: fs.createReadStream(`./data/Bel air.jpg`), //ByteArray and Buffer
      lotSize: 3000,
      sqft: 2599,
      garage: 2,
      bathrooms: 2,
      bedrooms: 5,
      price: faker.number.int({ min: 300000, max: 1000000 }),
      zipCode: 89113,
      state: "IL",
      city: "Hawthorne",
      address: "89803 Cuthbert Rd",
      description: "House",
      title: `Memo QA Test ${faker.number.int({ min: 1000, max: 10000 })}`,
      isPublished: true,
    };

    const response = await this.request.post("/api/estate-objects", {
      multipart: data,
      authorization: `Bearer ${this.accessToken}`,
    });
    return await response.json();
  }

  async removeListing(id) {
    const response = await this.request.delete(`/api/estate-objects/${id}`);
    return await response.json();
  }
}
