import { useQuery } from '@tanstack/react-query';

import api from '../services/axios'
import {Ipokemon} from '../types/pokemon';

async function getPokemonList(
  page: number,
  limit: number,
): Promise<GetPokemonListResponse> {
  const offset = (page - 1) * limit
  const { data } = await api.get<GetPokemonListResponse>(
    `pokemon?limit=${limit}&offset=${offset}`,
  )

  return data
}


export default function usePokemonList(page: number, limit: number) {
    return useQuery({
      queryKey: ['pokemonList', page],
      queryFn: () => getPokemonList(page, limit), 
      staleTime: 1000 * 60 * 10, 
    });
  }
  
export interface GetPokemonListResponse {
    count: number
    results: Ipokemon[]
    next?: string
    previous?: string
  }
  