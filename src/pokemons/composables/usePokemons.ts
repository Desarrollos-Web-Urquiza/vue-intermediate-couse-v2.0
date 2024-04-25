import { computed, ref }  from 'vue'
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemons";

export const usePokemons = () =>    {

    const {data, isSuccess, isError, error, isLoading } = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

    const pokemons = ref([]);

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