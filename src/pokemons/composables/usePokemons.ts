import { computed, ref, onMounted }  from 'vue'
import  pokemonApi  from '../api/pokemonApi'
import type { Pokemon }  from '../interfaces/pokemon'

const pokemons = ref<Pokemon[]>([]);
const isLoading = ref(true);

export const usePokemons = () =>    {

    onMounted(async () => {
        const data = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');
        pokemons.value = data.data.results;
        isLoading.value = false;
    })

    return  {
        pokemons,
        isLoading,
        count: computed( () => {
            return pokemons?.value?.length
        })
    }
}