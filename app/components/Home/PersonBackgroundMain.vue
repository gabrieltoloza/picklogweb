<template>
    <div class="background-wrapper">
        <img src="/person-bg-main" alt="Background" class="background-image" />
        <!-- Capa de difuminado superior -->
        <div class="gradient-overlay top-gradient"></div>
        <!-- Capa de difuminado inferior -->
        <div class="gradient-overlay bottom-gradient"></div>
    </div>
</template>



<style scoped>
.background-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
}


.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* Capa base para gradientes */
.gradient-overlay {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1;
    pointer-events: none;
}


/* Gradiente superior */
.top-gradient {
    top: 0;
    height: 250px;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(0, 0, 0, 0.4) 60%,
            transparent 100%);
}


/* Gradiente inferior */
.bottom-gradient {
    bottom: 0;
    height: 250px;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(0, 0, 0, 0.4) 60%,
            transparent 100%);
}
</style>