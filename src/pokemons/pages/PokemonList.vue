<script lang="ts">
import  pokemonApi  from '../api/pokemonApi'
import type { PokemonListResponse }  from '../interfaces/pokemon-list.response'

pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
    .then( resp => console.log(resp.data.results[0].name ));

</script>

<template>
    <h1>Pokemon List</h1>
</template>
