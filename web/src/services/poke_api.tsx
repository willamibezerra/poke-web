
import { IpokeApiResponse } from '../types/poke_api_interface';

export async function loadApi( endpoint: string)  {
    const response = await fetch(endpoint
    );
    const data: IpokeApiResponse = await response.json(); 
    console.log(data);
    return data;
    
  };