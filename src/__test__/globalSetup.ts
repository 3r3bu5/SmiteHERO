import { mongodbStore } from "../datastore/datastore";
function globalSetup() {
  (global as any).mongoTestDB = mongodbStore;
}
export default globalSetup;
