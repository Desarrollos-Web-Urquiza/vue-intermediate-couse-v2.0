<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon'
import { useRouter } from 'vue-router'

interface Props {
    pokemons: Pokemon[]
}

const props = defineProps<{
    pokemon: Object
}>();

const router = useRouter();

const goTo = () => {
    router.push({
        name: 'pokemon-id',
        params: {id: props.pokemon.id }
    })
}

</script>

<template>

<div class="card-list pokemon-card " @click="goTo">
    <img :src="props.pokemon.frontSprite" :alt="props.pokemon.name">
    <h3>{{ props.pokemon.name }}</h3>
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