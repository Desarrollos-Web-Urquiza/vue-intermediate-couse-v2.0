import { computed, ref }  from 'vue'
import  pokemonApi  from '../api/pokemonApi'
import type { Pokemon }  from '../interfaces/pokemon'


export const usePokemons = () =>    {
    const pokemons = ref<Pokemon[]>([])
    const isLoading = ref(true);

    const data = pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
        .then(  data => {
            pokemons.value = data.data.results;
            isLoading.value = false;
        });
    return  {
        pokemons,
        isLoading,
        count: computed( () => {
            return pokemons?.value?.length
        })
    }
}