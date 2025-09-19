<template>
    <div
        class="w-full bg-transparent text-white flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start gap-4 sm:gap-6 md:gap-8 pb-20 sm:pb-32 lg:pb-40">
        <!-- Botón genérico -->
        <div v-for="(item, index) in items" :key="index" class="dropdown dropdown-hover relative">
            <!-- Botón -->
            <div tabindex="0" role="button" class="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] xl:w-[280px] 2xl:w-[320px]
               h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px] 2xl:h-[64px]
               rounded-[36px] py-3 px-4 md:py-5 md:px-6 flex items-center justify-between 
               bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {{ item.title }}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                </svg>
            </div>

            <!-- Dropdown -->
            <ul tabindex="0" class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
               w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] xl:w-[280px] 2xl:w-[320px]
               p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 mt-3 shadow-lg border border-gray-400">
                <p class="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
                 p-3 sm:p-4 md:p-5 lg:p-6">
                    {{ item.desc }}
                </p>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = [
    {
        title: "TMS",
        desc: "Dashboard para monitorear el estado de los pedidos en tiempo real.",
    },
    {
        title: "WMS",
        desc: "Trazabilidad en línea las 24 horas, los 365 días del año. Seguimiento de inventario en tiempo real para reponer a tiempo y evitar quiebres de stock.",
    },
    {
        title: "E-COMMERCE",
        desc: "Integración a medida con tu e-commerce y/o marketplace para gestionar tus ventas.",
    },
    {
        title: "TOMADOR DE PEDIDOS WEB",
        desc: "Ingresa pedidos online. Desde cualquier lugar y en cualquier momento.",
    },
    {
        title: "EQUIPO DE IT DISPONIBLE",
        desc: "Soporte técnico especializado para acompañar tu operación cuando lo necesites.",
    },
];
</script>

<style scoped>

.dropdown-button {
    position: relative;
    z-index: 1;
    border: none;
}

.dropdown-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 14px;
    padding: 1px;
    background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(107, 114, 128, 0.7) 50%,
            rgba(107, 114, 128, 1) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0) border-box;
    mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    pointer-events: none;
}

</style>





<!-- 
<div class="dropdown dropdown-hover relative">
    <div tabindex="0" role="button"
        class="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[48px] md:h-[56px] lg:h-[64px] rounded-[36px] py-4 px-4 md:py-5 md:px-6 flex items-center justify-between 
        bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
        <span class="font-medium text-sm sm:text-base md:text-lg lg:text-xl">TMS</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
            <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
        </svg>
    </div>
<ul tabindex="0" class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
        w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] p-2 md:p-4 mt-3 shadow-lg border border-gray-400">
        <p class="text-white text-sm sm:text-base md:text-lg p-4 sm:p-5 md:p-6">
            Dashboard para monitorear el estado de los pedidos en tiempo real.
        </p>
    </ul>
</div> -->