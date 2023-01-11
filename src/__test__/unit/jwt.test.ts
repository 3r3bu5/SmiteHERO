import { signJWT, verifyJWT } from "../../utils/jwt";

describe("jwt", () => {
  const idObj = { id: "1234" };
  it("should return a token", () => {
    const jwt = signJWT(idObj);
    expect(jwt).toBeDefined();
  });
  it(" should return an object with the id", () => {
    const jwt = signJWT(idObj);
    const decoded = verifyJWT(jwt);
    expect(decoded.id).toBeDefined();
    expect(decoded.id).toEqual(idObj.id);
  });
});
