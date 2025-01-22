import React from 'react';
import { GetStaticProps } from 'next';
import { Pokemon } from '../types/pokemon';
import styles from '../styles/Home.module.css';

interface HomePageProps {
  pokemons: Pokemon[];
}

const HomePage: React.FC<HomePageProps> = ({ pokemons }) => {
  const handleLike = (pokemon: Pokemon) => {
    // if (window.ReactNativeWebView) {
    //   window.ReactNativeWebView.postMessage(
    //     JSON.stringify({ action: 'like', pokemon })
    //   );
    // }
  };

  const handleDislike = (pokemon: Pokemon) => {
    // if (window.ReactNativeWebView) {
    //   window.ReactNativeWebView.postMessage(
    //     JSON.stringify({ action: 'dislike', pokemon })
    //   );
    // }
  };

  return (
    <div className={styles.container}>
      <h1>Pokémon List</h1>
      <div className={styles['pokemon-list']}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className={styles['pokemon-card']}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={styles['pokemon-image']}
            />
            <h3>{pokemon.name}</h3>
            <p>Category: {pokemon.category}</p>
            <p>Abilities: {pokemon.abilities.join(', ')}</p>
            <button onClick={() => handleLike(pokemon)}>Like</button>
            <button onClick={() => handleDislike(pokemon)}>Dislike</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Carregar os dados usando getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const details = await fetch(pokemon.url).then((res) => res.json());
      return {
        name: pokemon.name,
        image: details.sprites.front_default,
        abilities: details.abilities.map(
          (ab: { ability: { name: string } }) => ab.ability.name
        ),
        category: details.types.map(
          (type: { type: { name: string } }) => type.type.name
        ).join(', '),
      };
    })
  );

  return {
    props: { pokemons },
  };
};

export default HomePage;
