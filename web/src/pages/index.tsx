

import { useEffect, useState } from 'react'

import { Ipokemon } from '../types/pokemon';
import styles from '../styles/Home.module.css'; 
import usePokemonList from '../hooks/usePokemonList';
import PokemonCard from '../components/PokemonCard/CardSelector';
import SEO from '../components/SEO';


const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePokemonList(page, 60);

  if (isLoading) return <div>Carregando Pokémons...</div>;
  if (error) return <div>Ocorreu um erro ao carregar os dados.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokédex</h1>
      <div className={styles.pokemonGrid}>
        {data?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Página Anterior
        </button>
        <button
          disabled={page * 60 >= data.count}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default HomePage;
