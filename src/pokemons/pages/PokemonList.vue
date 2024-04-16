<script setup lang="ts">
import { ref } from 'vue';

import  pokemonApi  from '../api/pokemonApi'
import type { PokemonListResponse }  from '../interfaces/pokemon-list.response'
import type { Pokemon }  from '../interfaces/pokemon'

const data = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');
const pokemons = ref<Pokemon[]>(data)

// pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
//     .then( data => pokemons.value = data );

</script>

<template>
    <h1>Pokemon List</h1>
    <ul>
        <li v-for="pokemon in pokemons.data.results" :key="pokemon.id">
            {{  pokemon.name }}
        </li>
    </ul>
</template>
