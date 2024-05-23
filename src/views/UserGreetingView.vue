<template>
    <div>
        Welkom {{ route.params.name }}!

        <div>
            <RouterLink :to="{ name: 'user' }">
                Terug
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>
