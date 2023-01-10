import { Build } from "@ash/shared";

export interface buildDAO {
  createBuild(build: Build): Promise<Build>;
  getAllBuilds(): Promise<Build[] | undefined>;
  getBuildById(id: string): Promise<Build | undefined>;
  getBuildsByGod(godId: string): Promise<Build[] | undefined>;
}
