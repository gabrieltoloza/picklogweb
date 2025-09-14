<template>

    <div class="father-solutions">
        <div class="content-container">
            <TransportistasMain />
            <Requirements />
        </div>
    </div>

</template>


<script setup lang="ts">
import Requirements from '~/components/Transportistas/Requirements.vue';
import TransportistasMain from '~/components/Transportistas/TransportistasMain.vue';


</script>


<style scoped>

.father-solutions {
    background-image: url(/Transportistas-bg.png);
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