<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon'
import PokemonCard from './PokemonCard.vue'

interface Props {
    pokemons: Pokemon[]
}

const props = defineProps<{
    pokemons: Array
}>();

</script>

<template>


<div class="card-list pokemon-card ">
    <PokemonCard 
        v-for="pokemon of props.pokemons" 
        :key="pokemon.id"
        :pokemon="pokemon" 
    />
</div>

</template>

<style scoped>

.card-list  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.pokemon-card  {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

</style>