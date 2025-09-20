<template>
    <div class="w-full bg-transparent text-white flex flex-wrap justify-center items-start gap-6 sm:gap-8 custom_breakpoint relative overflow-visible">


        <!-- Botón 1 -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="custom-btn w-[180px] sm:w-[220px] h-[48px] rounded-[36px] py-4 px-4 flex items-center justify-between 
                bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="btn-text font-medium text-sm sm:text-base">TMS</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
                w-[180px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-5">
                    Dashboard para monitorear el estado de los pedidos en tiempo real.
                </p>
            </ul>
        </div>


        <!-- Botón 2 -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="custom-btn w-[180px] sm:w-[220px] h-[48px] rounded-[36px] py-4 px-4 flex items-center justify-between 
                bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="btn-text font-medium text-sm sm:text-base">WMS</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
                w-[180px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-4">
                    Trazabilidad en línea las 24 horas, los 365 días del año.
                    Seguimiento de inventario en tiempo real para reponer a tiempo y evitar quiebres de stock.
                </p>
            </ul>
        </div>


        <!-- Botón 3 -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="custom-btn w-[180px] sm:w-[220px] h-[48px] rounded-[36px] py-4 px-4 flex items-center justify-between 
                bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="btn-text font-medium text-sm sm:text-base">E-COMMERCE</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
                w-[180px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-5">
                    Integración a medida con tu e-commerce y/o marketplace para gestionar tus ventas.
                </p>
            </ul>
        </div>


        <!-- Botón 4 -->
        <div class="dropdown dropdown-hover relative group">
            <div tabindex="0" role="button"
                class="custom-btn w-[180px] sm:w-[220px] h-[48px] rounded-[36px] py-4 px-4 flex items-center justify-between 
                bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="btn-text w-[80%] font-medium text-sm">TOMADOR DE PEDIDOS WEB</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                    <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
                w-[180px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-5">
                    Ingresa pedidos online.
                    Desde cualquier lugar y en cualquier momento.
                </p>
            </ul>
        </div>

        
        <!-- Botón 5 -->
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button"
                class="custom-btn w-[180px] sm:w-[220px] h-[48px] rounded-[36px] py-4 px-4 flex items-center justify-between 
                bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                <span class="btn-text font-medium text-sm">EQUIPO DE IT DISPONIBLE</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <ul tabindex="0"
                class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent lg:bg-[#1B2329] rounded-[14px] z-10 
                w-[180px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-5">
                    Soporte técnico especializado para acompañar tu operación <b>cuando lo necesites</b>.
                </p>
            </ul>
        </div>


        <div class="h-[300px] w-full bg-transparent"></div>

    </div>

</template>

<script setup lang="ts">
</script>

<style scoped>

.dropdown {
  position: relative; /* el padre */
}


.dropdown-button {
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
    border-radius: 14px;
    padding: 1px;
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


/* ✅ Ajustes especiales para pantallas grandes (≥1450px) */
@media (min-width: 1550px) {
    .custom-btn {
        width: 300px !important;
        height: 64px !important;
        padding: 20px 24px !important;
        border-radius: 36px !important;
    }

    .btn-text {
        font-size: 1.25rem !important; /* ~20px */
        line-height: 1.5rem !important;
    }

    .dropdown-content {
        width: 300px !important;
        padding: 16px !important;
    }

    .dropdown-text {
        font-size: 1.125rem !important; /* ~18px */
        padding: 24px !important;
    }
}



/* Ajuste para pantallas LG (laptops, 1024px a 1279px) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .custom-btn {
    width: 180px !important;
    height: 44px !important;
    padding: 12px 16px !important;
    border-radius: 32px !important;
  }
  .btn-text {
    font-size: 0.95rem !important;
    line-height: 1.25rem !important;
  }
  .dropdown-content {
    width: 180px !important;
    padding: 10px !important;
  }
  .dropdown-text {
    font-size: 0.95rem !important;
    padding: 16px !important;
  }
}


.dropdown-content {
    z-index: 50 !important;
}



</style>
