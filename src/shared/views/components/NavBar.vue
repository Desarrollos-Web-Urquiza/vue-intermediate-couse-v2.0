<script setup lang="ts">

import type { RouterLinks } from "@/router/list-routes"
import { computed } from "vue"

interface Props {
  title?: string;
  links: RouterLinks[];
  isSecondary?: boolean;
}

 const props = withDefaults(defineProps<Props>(), {
    title: 'CompoApp',
    isSecondary: false
 });
  
 const links = computed(() => props.links.filter(link => link.visible));
 
//  const links = toRef(props, 'links');
//  const links = props.links;

</script>

<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <!-- <span v-if="$props.title">{{ $props.title }}</span> -->
      <span>{{ $props.title }}</span>
    </template>
    <RouterLink 
      v-for="link of links" 
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