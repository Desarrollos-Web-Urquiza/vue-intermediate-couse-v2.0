// useQuery
import { computed, ref, watchEffect }  from 'vue'
import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemons";

export const usePokemon = (id) =>    {

    const {data, isSuccess, isError, error, isLoading } = useQuery({ 
        queryKey: ['pokemon', id], 
        queryFn: () => getPokemonById(id), 
        retry: 0
    })

    const pokemon = ref([]);

    if (isSuccess.value) {
        pokemon.value = data.value;
    }

    watchEffect(() => {
        console.log('data', data);
    })

    if (isSuccess.value) {
        pokemon.value = data.value;
    }
    
    let helloWorld = 'hello world'

    return  {
        isError,
        error,
        pokemon,
        isSuccess,
    }
}