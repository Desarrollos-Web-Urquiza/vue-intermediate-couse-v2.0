<script lang="ts">
import  pokemonApi  from '../api/pokemonApi'

pokemonApi.get('/pokemon?limit=45')
    .then( resp => console.log(resp.data.results));

</script>

<template>
    <h1>Pokemon List</h1>
</template>
