import { AxiosPromise } from "axios";
import { CollectionsParamsType, INFTCollection } from "./models";
import { apiInstance } from "./base";

const BASE_URL = "api/v1/items?";

export const getAllCollections = (
  params: CollectionsParamsType
): AxiosPromise<INFTCollection[]> => {
  return apiInstance.get(BASE_URL, { params });
};
