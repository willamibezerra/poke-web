
import { usePokemons } from '../hooks/poke_hooks';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  const { pokemons, loading, error } = usePokemons(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  if (loading) {
    return <div>Carregando Pokémons...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }















  // <div className={styles.container}>
  // <h1>Pokémon List</h1>
  // <div className={styles['pokemon-list']}>
  //   {pokemons.map((pokemon) => (
  //     <div key={pokemon.name} className={styles['pokemon-card']}>
  //       <img
  //         src={pokemon.image}
  //         alt={pokemon.name}
  //         className={styles['pokemon-image']}
  //       />
  //       <h3>{pokemon.name}</h3>
  //       <p>Category: {pokemon.category}</p>
  //       <p>Abilities: {pokemon.abilities.join(', ')}</p>
  //       <button onClick={() => handleLike(pokemon)}>Like</button>
  //       <button onClick={() => handleDislike(pokemon)}>Dislike</button>
  //     </div>











  return (
    <div className={styles.container}>
      <h1>Pokémon List</h1>
      <div className={styles['pokemon-list']}>
        {pokemons.map((pokemon: { name: string; url: string }) => (
          <div key={pokemon.name} className={styles['pokemon-card']}>
                    <img
          src={pokemon.image}
          alt={pokemon.name}
          className={styles['pokemon-image']}
        />
            <h3>{pokemon.name}</h3>
            <a href={pokemon.url}>Detalhes</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
