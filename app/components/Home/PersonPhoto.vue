<template>
    <div class="hero min-h-screen transition-container">
        <img :src="imageUrl" alt="" class="w-full h-full object-cover relative z-1">
    </div>
</template>



<script setup lang="ts">

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
    background: linear-gradient(
        to top, 
        transparent, 
        rgba(0,0,0,0.3) 30%, 
        rgba(0,0,0,0.5) 60%, 
        rgba(0,0,0,0.9) 90%,
        rgba(0,0,0,1)
    );
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
    background: linear-gradient(
        to bottom, 
        transparent, 
        rgba(0,0,0,0.3) 30%, 
        rgba(0,0,0,0.5) 60%, 
        rgba(0,0,0,0.9) 90%,
        rgba(0,0,0,1)
    );
    pointer-events: none;
    z-index: 2;
}


</style>