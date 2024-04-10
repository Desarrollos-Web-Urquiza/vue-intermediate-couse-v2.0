<script setup lang="ts" >

interface Props {
  title?: string;
}

 withDefaults(defineProps<Props>(), {
    title: 'CompoApp'
 });

</script>


<template>
  <nav>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <!-- <span v-if="$props.title">{{ $props.title }}</span> -->
    <span>{{ $props.title }}</span>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/counter"> Counter</RouterLink>

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