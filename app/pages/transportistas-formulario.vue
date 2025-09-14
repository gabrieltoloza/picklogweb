<template>
    <div class="father-solutions">
        <div class="content-container">
            <Formulario />
        </div>
    </div>
</template>


<script setup lang="ts">
import Formulario from '~/components/Transportistas/Formulario.vue';


</script>

<style scoped>

.father-solutions {

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