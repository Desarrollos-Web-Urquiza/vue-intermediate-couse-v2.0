<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemons";
import { computed, ref }  from 'vue'

const {data, isSuccess, isError } = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

const pokemons = ref([]);

if (isSuccess.value) {
  pokemons.value = data.value;
}

</script>

<template>

    <h1>Pokemon List - ({{ count }})</h1>

    <h3 v-if="isLoading">Cargando</h3>

    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">
            {{  pokemon.name }}
        </li>
    </ul>
</template>
