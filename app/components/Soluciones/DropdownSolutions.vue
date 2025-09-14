<template>
    <div class="w-full min-h-[500px] bg-transparent text-white flex flex-wrap justify-center items-start gap-10">


        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="w-[250px] h-[56px] rounded-[48px] py-8 px-6 flex items-center justify-between bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="font-semibold">TMS</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 5.96046e-07" stroke="#121A1F" stroke-width="2" />
                </svg>

            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu bg-transparent rounded-[18px] z-10 w-[250px] p-2 mt-4 shadow-lg border border-gray-400">
                <p class="text-white text-lg p-7">
                    Dashboard para monitorear el estado de los pedidos en tiempo real.
                </p>
            </ul>
        </div>


        <!-- Repite el mismo patrón para los otros botones -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="w-[250px] h-[56px] rounded-[48px] py-8 px-6 flex items-center justify-between bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="font-semibold">WMS</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 5.96046e-07" stroke="#121A1F" stroke-width="2" />
                </svg>

            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu bg-transparent rounded-[18px] z-10 w-[250px] p-2 mt-4 shadow-lg border border-gray-400">
                <p class="text-white text-lg p-7">
                    Trazabilidad en línea las 24 horas, los 365 días del año.
                    Seguimiento de inventario en tiempo real para reponer a tiempo y evitar quiebres de stock .
                </p>
            </ul>
        </div>


        <!-- Continúa con los demás botones... -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="w-[250px] h-[56px] rounded-[48px] py-8 px-6 flex items-center justify-between bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="font-semibold">E-COMMERCE</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 5.96046e-07" stroke="#121A1F" stroke-width="2" />
                </svg>

            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu bg-transparent rounded-[18px] z-10 w-[250px] p-2 mt-4 shadow-lg border border-gray-400">
                <p class="text-white text-lg p-7">
                    Integración a medida con tu e-commerce y/o marketplace para gestionar tus ventas.
                </p>
            </ul>
        </div>


        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="w-[250px] h-[56px] rounded-[48px] py-8 px-6 flex items-center justify-between bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="w-[80%] font-semibold">TOMADOR DE PEDIDOS WEB</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 5.96046e-07" stroke="#121A1F" stroke-width="2" />
                </svg>

            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu bg-transparent rounded-[18px] z-10 w-[250px] p-2 mt-4 shadow-lg border border-gray-400">
                <p class="text-white text-lg p-7">
                    Ingresa pedidos online.
                    Desde cualquier lugar y en cualquier momento.
                </p>
            </ul>
        </div>

        
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="w-[250px] h-[56px] rounded-[48px] py-8 px-6 flex items-center justify-between bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="font-semibold">EQUIPO DE IT DISPONIBLE</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu bg-transparent rounded-[18px] z-10 w-[250px] p-2 mt-4 shadow-lg border border-gray-400">
                <p class="text-white text-lg p-7">
                    Soporte técnico especializado para acompañar tu operación <b>cuando lo necesites</b> .
                </p>
            </ul>
        </div>


    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.dropdown-button {
    position: relative;
    z-index: 1;
    border: none;
}

.dropdown-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 18px;
    padding: 1px;
    /* Grosor del borde */
    background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(107, 114, 128, 0.7) 50%,
            rgba(107, 114, 128, 1) 100%);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0) border-box;
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    pointer-events: none;
}
</style>