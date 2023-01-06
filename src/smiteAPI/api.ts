import { smite } from "hirez-wrapper";
import { GetDataUsed } from "hirez-wrapper/dist/endpoints/mainGame/getDataUsed";
import { GetItems } from "hirez-wrapper/dist/endpoints/smite/getItems";
import { GetGods } from "hirez-wrapper/dist/endpoints/smite/getGods";
import { config } from "../utils/config";
smite.credentials(config.SMITE_DEV_ID, config.SMITE_AUTH_KEY);

export const getConsumption = async (): Promise<GetDataUsed> => {
  return await smite.getDataUsed();
};
export const getAllGods = async (): Promise<GetGods> => {
  const gods = await smite.getGods("english");
  return gods;
};
export const getAllItems = async (): Promise<GetItems> => {
  const items = await smite.getItems("english");
  return items;
};
