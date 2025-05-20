import { axiosInstance } from "@/api/index";

class API {
  async getProducts() {
    const response = await axiosInstance.get("/products/category/smartphones");
    return response;
  }
}

export const api = new API();
