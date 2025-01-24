import Image from 'next/image'


import usePokemon from '../../hooks/usePokemon';

import styles from "../../styles/Home.module.css";

type PokemonCardProps = {
  pokemon: { name: string; };
  onLike: (pokemonName: string) => void;  
  onDislike: (pokemonName: string) => void; 
};

export default function PokemonCard({ pokemon, onLike, onDislike }: PokemonCardProps) {
  const { data, isLoading, error } = usePokemon(pokemon.name);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar Pokémon</div>;

  const handleLike = () => {
    onLike(pokemon.name); 
  };

  const handleDislike = () => {
    onDislike(pokemon.name);
  };

  return (
    <div className={styles.card}>
    
          <div className={styles.sprite}>
            {
           
             (
              <Image
                width={72}
                height={72}
                alt={data!.name}
                title={data!.name}
                src={data!.sprites.front_default}
                quality={100}
              />
            ) 

            }
          </div>
          <h2>{data?.name}</h2>
          <div className={styles.types}>
            {data?.types.map((type) => (
              <span key={type.type.name} className={styles[type.type.name]}>
                {type.type.name}
              </span>
            ),)}
            
          </div>
       
   
      <div className={styles.actions}>
        <button onClick={handleLike} className={styles.likeButton}>👍 Like</button>

        <button onClick={handleDislike} className={styles.dislikeButton}>👎 Dislike</button>
      </div>
    </div>
  );
}