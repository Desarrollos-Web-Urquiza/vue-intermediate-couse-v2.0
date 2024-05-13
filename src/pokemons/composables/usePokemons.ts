import { computed, ref, watchEffect }  from 'vue'
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemons";
import { initialPokemons } from "../data/initial-pokemons";

export const usePokemons = () =>    {

    const {data, isSuccess, isError, error, isLoading } = useQuery({ 
        queryKey: ['pokemons'], 
        queryFn: getPokemons, 
        retry: 0,
        initialData: initialPokemons
    })

    const pokemons = ref([]);

    watchEffect(() => {
        // console.log('isError', isError.value);
    })

    if (isSuccess.value) {
        pokemons.value = data.value;
    }

    return  {
        // Properties
        pokemons,
        isLoading,
        isError,
        error,

        // Computed
        count: computed( () => {
            return pokemons?.value?.length ?? 0
        })
    }
}