<script setup>

import AppHeader from './components/AppHeader.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div>
        <AppHeader />
        <main>
            <header>
                <RouterLink to ='/signin'> Sign in</RouterLink> 
                <RouterLink to ='/signup'> Sign up</RouterLink> 
            </header>
            <RouterView />
        </main>
    </div>
</template>