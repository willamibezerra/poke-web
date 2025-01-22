import { useState, useEffect } from 'react';
import { loadApi } from '../services/poke_api';
import { IpokeApiResponse } from '../types/poke_api_interface';

export const usePokemons = (endpoint: string) => {
  const [data, setData] = useState<IpokeApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await loadApi(endpoint); 
     console.log(response);
        setData(response); 
      } catch (error) {
        console.error('Erro ao carregar os dados:', error); 
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false); 
      }
    };

    load();
  }, [endpoint]);

  return {
    pokemons: data?.results || [], 
    loading,
    error,
  };
};
