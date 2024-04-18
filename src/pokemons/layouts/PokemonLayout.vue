<script setup lang="ts">
import NavBar from '@/shared/views/components/NavBar.vue'
import type { RouterLink } from '@/router/list-routes'
import { pokemonRoute } from '../router'

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({name, path, props})=> {
    
    return{
        name: name?.toString() ?? '',
        path: path,
        title: (props as {title: string}).title
    }
}) || [];

</script>


<template>
    <NavBar :links="routeLinks" is-secondary />

    <!-- <h4>Pokemon Layout</h4> -->
    <!-- <Suspense> -->
        <RouterView/>
        <!-- <template #fallback >
            <div style="margin-top: 30px;">
                Loading...
            </div>
        </template>
    </Suspense> -->
</template>
