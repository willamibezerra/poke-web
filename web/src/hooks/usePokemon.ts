
import api from '../services/axios'
import { Ipokemon } from '../types/pokemon';
import { useQuery } from '@tanstack/react-query';

async function getPokemon(name: string): Promise<Ipokemon> {
  const { data } = await api.get<Ipokemon>(`pokemon/${name}`)

  return data
}
export default function usePokemon(name: string) {
  return useQuery({
    queryKey: ['pokemon', name], 
    queryFn: () => getPokemon(name),
    staleTime: 1000 * 60,
  });
}

