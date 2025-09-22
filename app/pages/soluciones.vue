<template>
    <div class="father-solutions min-h-[600px] sm:min-h-[700px] md:min-h-[1000px] lg:min-h-[900px]">
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
    background-position: top -200px left;
    /* Cambiado de 'top left' a 'top right' */
    background-repeat: no-repeat;
    min-height: 100%;
    height: auto;
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

@media (max-width: 639px) {
    .father-solutions {
        background-image: url('/bg_solutions_mobile.png');
        background-position: top left;
        min-height: 1200px;
    }

    .no-padding-mobile {
        padding-top: 0 !important;
    }
}
</style>