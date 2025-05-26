// src/features/products/api.ts
import { axiosInstance } from "@/api/index";

class API {
  async getAllProducts(limit: number = 20, skip: number = 0) {
    const response = await axiosInstance.get(
      `/products?limit=${limit}&skip=${skip}`
    );
    return response.data;
  }

  async getProductById(id: number) {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  }

  async getProductsByCategory(category: string) {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  }

  async getCategories() {
    const response = await axiosInstance.get("/products/categories");
    return response.data;
  }

  async searchProducts(query: string) {
    const response = await axiosInstance.get(`/products/search?q=${query}`);
    return response.data;
  }
}

export const api = new API();
