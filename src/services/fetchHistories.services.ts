import axios from "axios";

import { STRAPI_CMS } from "../../config";
import { getRedis } from "../../server/services/promisifyRedis";
import { IHistory } from "../interfaces/Histories.interface";

export const getHistories = async (): Promise<IHistory[]> => {
  const strapiUserToken = await getRedis('strapiUserToken');
  const response = await axios.get(`${STRAPI_CMS}/histories/`, {
    headers: { Authorization: `Bearer ${strapiUserToken}` }
  });

  return response.data;
}

export const getHistoryById = async (historyId: number) => {
  const strapiUserToken = await getRedis('strapiUserToken');
  const response = await axios.get(`${STRAPI_CMS}/histories/${historyId}`, {
    headers: { Authorization: `Bearer ${strapiUserToken}` }
  });
  return response.data;
}