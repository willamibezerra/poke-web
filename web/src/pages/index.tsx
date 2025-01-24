

import {  useState } from 'react'

import styles from '../styles/Home.module.css'; 
import usePokemonList from '../hooks/usePokemonList';
import PokemonCard from '../components/pokemonCard/CardSelector';




const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePokemonList(page, 60);

  if (isLoading) return <div>Carregando Pokémons...</div>;
  if (error) return <div>Ocorreu um erro ao carregar os dados.</div>;

  return (
   <>
 

<div className={styles.container}>

  <div className={styles.pokemonGrid}>
    {data?.results.map((pokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} onLike={function (pokemonName: string): void {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'like', pokemonName }));
      } } onDislike={function (pokemonName: string): void {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'dislike', pokemonName }));
      } } />
    ))}
  </div>
  <div >
    <button className={styles.buttonPagination}
      disabled={page === 1}
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    >
      Página Anterior
    </button>
    <button className={styles.buttonPagination}
      disabled={page * 60 >= data!.count}
      onClick={() => setPage((prev) => prev + 1)}
    >
      Próxima Página
    </button>
  </div>
</div>

   </> 
   );
};

export default HomePage;
