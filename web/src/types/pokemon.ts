export interface Ipokemon {
    name: string;
    image: string;
    abilities: string[];
    category: string;
  }
 export interface HomePageProps {
    pokemons: Ipokemon[];
  }
  