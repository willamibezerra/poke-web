
import { ENDPOINTS } from "../endpoints";

describe("ENDPOINTS", () => {
  it("deve ter o endpoint correto para USERS", () => {
    expect(ENDPOINTS.USERS).toBe("https://pokeapi.co/api/v2/pokemon?limit=20");
  });
});