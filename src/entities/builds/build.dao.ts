import { Build } from "../../../shared/build";

export interface buildDAO {
  createBuild(build: Build): Promise<void>;
  getAllBuilds(): Promise<Build[] | undefined>;
  getBuildById(id: string): Promise<Build | undefined>;
  getBuildsByGod(godId: string): Promise<Build[] | undefined>;
}
