import nock from "nock";
import { getAllGods, getConsumption } from "../../smiteAPI/api";
import path from "path";

describe("test smite api access", () => {
  it("should return a consumption object", async () => {
    nock("https://api.smitegame.com/smiteapi.svc")
      .get(
        /\/createsessionjson\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)/
      )
      .reply(200, {
        ret_msg: "Approved",
        session_id: "4D3064CF27D0473CA4CF142330E97FB5",
        timestamp: "11/28/2022 3:09:16 PM",
      })
      .get(/\/getdatausedjson\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)/)
      .replyWithFile(
        200,
        path.join(__dirname, "../", "/mocks/getdataused.json")
      );
    const consumption = await getConsumption();
    expect(consumption).toBeDefined();
    expect(consumption[0]).toHaveProperty("ret_msg");
    expect(consumption[0].ret_msg).toBeNull();
  });
});

describe("test smite api access", () => {
  it("should return a list of gods", async () => {
    nock("https://api.smitegame.com/smiteapi.svc")
      .get(
        /\/testsessionjson\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)/
      )
      .reply(200, {
        ret_msg:
          "This was a successful test with the following parameters added",
      })
      .get(
        /\/getgodsjson\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)/
      )
      .replyWithFile(200, path.join(__dirname, "../", "/mocks/getgods.json"));
    const gods = await getAllGods();
    expect(gods).toBeDefined();
    expect(gods[0]).toHaveProperty("Name");
    expect(gods[0].id).toBe(3492);
  });
});
