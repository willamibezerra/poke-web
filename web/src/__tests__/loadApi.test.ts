
import { loadApi } from "../services/poke_api";

global.fetch = jest.fn();

describe("loadApi", () => {
  it("deve retornar dados mockados corretamente", async () => {
    const mockResponse = {
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await loadApi("https://pokeapi.co/api/v2/pokemon/");

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/");
  });
});