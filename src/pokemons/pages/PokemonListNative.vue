<script setup lang="ts">
import store from '@/store/store'
import PokemonCardList from '../components/PokemonCardList.vue'

import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

useQuery({ 
    queryKey: ['pokemons'], 
    queryFn: getPokemons, 
    select: (data: TData) => {
        console.log(data);
        store.loadedPokemons(data);
    }
})

// const {data, isSuccess, isError, error, isLoading } = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

// const pokemons = ref([]);

// if (isSuccess.value) {
//     pokemons.value = data.value;
// }


</script>

<template>

    <h1 v-if="store.pokemons.isLoading">Loading</h1>

    <div v-else-if="store.pokemons.hasError">
        {{ store.pokemons.errorMessage }}
    </div>

    <div v-else>
        <h1>Pokemon List Native - ({{ store.pokemons.count }})</h1>
    
        <PokemonCardList 
            :pokemons="store.pokemons.list"
        />
    </div>

</template>