
import api from "../services/axios";

describe("axios instance", () => {
  it("deve ter a URL base configurada corretamente", () => {
    expect(api.defaults.baseURL).toBe("https://pokeapi.co/api/v2/");
  });
});