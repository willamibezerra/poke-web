export interface Ipokemon {
    name: string;
    image: string;
    abilities: string[];
    category: string;
    sprites: {
      front_default: string; 
  }
  types: Array<{
    type: {
      name: string;
    };
  }>;
  }
 export interface HomePageProps {
    pokemons: Ipokemon[];
  }
  