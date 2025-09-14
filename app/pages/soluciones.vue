<template>
    <div class="father-solutions">
        <div class="content-container">
            <MainSolutions />
            <DropdownSolutions />
        </div>
    </div>
</template>

<script setup lang="ts">

import DropdownSolutions from '~/components/Soluciones/DropdownSolutions.vue';
import MainSolutions from '~/components/Soluciones/MainSolutions.vue';

</script>

<style scoped>
.father-solutions {
    background-image: url(/Soluciones-bg.png);
    background-size: cover;
    background-position: top -200px left; /* Cambiado de 'top left' a 'top right' */
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
}

.content-container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
}

</style>