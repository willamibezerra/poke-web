import { Ipokemon } from './pokemon';

export interface IpokeApiResponse{
    map(arg0: (pokemon: any) => import("react").JSX.Element): import("react").ReactNode;
    results:Ipokemon[]
    count: number;
}