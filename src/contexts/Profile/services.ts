import { api } from "src/services/api";
import { Address } from "./interfaces";

export class ProfileApi {
  private static instance: ProfileApi | undefined;

  public static getInstance(): ProfileApi {
    if (!ProfileApi.instance) {
      ProfileApi.instance = new ProfileApi();
    }
    return ProfileApi.instance;
  }

  async getAddressesList() {
    try {
      const response = await api.get<Address[]>("/address/list");

      if (!response?.data) {
        throw null;
      }

      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
