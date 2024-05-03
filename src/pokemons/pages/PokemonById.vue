<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();

const { id } = route.params;

</script>

<template>
    <h1>Pokemon by {{ id }}</h1>
</template>
