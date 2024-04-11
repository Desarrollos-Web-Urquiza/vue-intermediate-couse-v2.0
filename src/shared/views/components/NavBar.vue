<script setup lang="ts">

import type { RouterLinks } from "@/router/list-routes"

interface Props {
  title?: string;
  links: RouterLinks[];
}

 withDefaults(defineProps<Props>(), {
    title: 'CompoApp'
 });

//  onMounted(() => {
  // console.log('RouterLinks', RouterLink);
  // });
  // console.log('hola');
  
  
</script>

<template>
  <nav>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <!-- <span v-if="$props.title">{{ $props.title }}</span> -->
    <span>{{ $props.title }}</span>
    <RouterLink 
      v-for="link of $props.links" 
      :key="link.path"
      :to="link.path"
    >
      {{ link.title }}
    </RouterLink>
  </nav>

</template>

<
  <style scoped>
  nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
  }
  
  img {
      margin-right: 5px;
  }
  
  span {
      margin-right: 10px;
  }
  
  a {
     margin-right: 5px; 
  }
  
  
  
  nav a.router-link-active {
    color: var(--color-text);
  }
  
  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  
  nav a:first-of-type {
    border: 0;
  }
  </style>