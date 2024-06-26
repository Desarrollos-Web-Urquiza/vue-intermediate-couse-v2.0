import axios from 'axios';
import pokemonApi from '../api/pokemonApi';
import type { PokemonListResponse, Pokemon, PokemonResponse } from '../interfaces';
import { sleep } from './sleep';

export const getPokemons = async(): Promise<Pokemon[]> => {

  await sleep(4);

  // throw new Error("Error de prueba");

  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');
  
  const pokemonPromises: Promise<Pokemon>[] = [];

  for (const { url } of data.results ) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }   
    });

    pokemonPromises.push( pokemonPromise );

  }
  
  const pokemons = await Promise.all( pokemonPromises );

  return pokemons;
}

export const getPokemonById = async(id: number): Promise<any> => {

  await sleep(2);

  const { data } = await pokemonApi.get<any>(`/pokemon/${id}`);
  
  return Promise.resolve(data);
}