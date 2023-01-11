import nock from "nock";

beforeAll(() => {
  nock.cleanAll();
  nock.disableNetConnect();
  nock.enableNetConnect("localhost");
});
afterEach(() => {
  nock.cleanAll();
});

afterAll(() => {
  nock.enableNetConnect();
  nock.restore();
});
