import { Product, ProductsResponse } from "./types/product";

class Api {
  private baseUrl: string;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }

  async getProducts(limit = 10, skip = 0): Promise<ProductsResponse> {
    const res = await fetch(
      `${this.baseUrl}/products?limit=${limit}&skip=${skip}`
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  }
}

export const api = new Api();
