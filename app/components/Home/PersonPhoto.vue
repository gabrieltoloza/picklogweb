<template>
    <div class="hero min-h-screen transition-container">
        <img :src="imageUrl" alt="" class="w-full h-full object-cover relative z-1">
        
        <!-- SVG centrado y movido a la izquierda -->
        <div class="absolute inset-0 flex items-center justify-center z-10 -translate-x-24 sm:hidden">
            <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <!-- Aquí va tu SVG o componente -->
                <PickLogLogoMob />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PickLogLogoMob from '../svg/Mobile/PickLogLogoMob.vue';

// Referencia limpia a la imagen
const imageUrl = '/person_photo.png';
</script>

<style scoped>
.transition-container {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.transition-container::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top,
            transparent,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.9) 90%,
            rgba(0, 0, 0, 1));
    pointer-events: none;
    z-index: 2;
}

.transition-container::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom,
            transparent,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.9) 90%,
            rgba(0, 0, 0, 1));
    pointer-events: none;
    z-index: 2;
}
</style>