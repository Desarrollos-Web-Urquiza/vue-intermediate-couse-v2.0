<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
  import { RouterLink, RouterView } from 'vue-router';
  import NavBar from './shared/views/components/NavBar.vue';
  import { routerLinks } from "@/router/list-routes.ts"

</script>

<template>
  <div>
    <div>
      <NavBar 
        title="PokemonApp" 
        :links="routerLinks"
      />
    </div>
  </div>

  <h1>Hola Mundo</h1>

  <h5>Hola View</h5>
  
  <RouterView/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  width: 25px;  
  height: 25px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  width: 25px;  
  height: 25px;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
  width: 25px;  
  height: 25px;
}
</style>
