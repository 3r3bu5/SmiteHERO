import { smite } from "hirez-wrapper";
import { GetDataUsed } from "hirez-wrapper/dist/endpoints/mainGame/getDataUsed";
import { config } from "../utils/config";
smite.credentials(config.SMITE_DEV_ID, config.SMITE_AUTH_KEY);

export const getConsumption = async (): Promise<GetDataUsed> => {
  return await smite.getDataUsed();
};
