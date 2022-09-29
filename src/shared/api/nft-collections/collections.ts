import { AxiosPromise } from "axios";
import { INFTCollection } from "./models";
import { apiInstance } from "./base";

const BASE_URL = "api/v1/items?";

export type GetCollectionsListParams = {
  page?: number;
  limit?: number;
};

export const getAllCollections = (
  params: GetCollectionsListParams
): AxiosPromise<INFTCollection[]> => {
  return apiInstance.get(BASE_URL, { params });
};
