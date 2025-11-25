<template>
    <div class="main-container w-full bg-transparent text-white flex flex-col sm:flex-row flex-wrap justify-start items-center sm:items-start gap-6 sm:gap-8 custom_breakpoint relative overflow-visible pl-5 sm:pl-16">
        <div class="container sm:pl-10 md:pl-28 lg:pl-10 px-4 md:px-8 flex flex-col sm:flex-row flex-wrap justify-start items-center sm:items-start gap-6 sm:gap-8 w-full">

            <!-- Botones generados dinámicamente -->
            <div v-for="(button, index) in buttons" :key="index" class="dropdown dropdown-hover">
                <div tabindex="0" role="button"
                    class="custom-btn w-[250px] sm:w-[220px] h-[60px] sm:h-[48px] rounded-[36px] py-4 px-8 sm:px-4 flex items-center justify-between 
                    bg-gray-200 text-gray-800 hover:bg-[#F9BD6B] focus:bg-[#F9BD6B] hover:text-gray-800 transition-all duration-300">
                    <span class="btn-text font-medium text-base sm:text-base">{{ button.title }}</span>
                    <svg :width="button.iconSize" :height="button.iconSize" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8H16" stroke="#121A1F" stroke-width="2" />
                        <path d="M8 16L8 0" stroke="#121A1F" stroke-width="2" />
                    </svg>
                </div>
                <ul tabindex="0" class="dropdown-button dropdown-content menu absolute left-0 top-full bg-transparent rounded-[14px] z-10 
                    w-[250px] sm:w-[220px] p-2 mt-3 shadow-lg border border-gray-400">
                    <p class="dropdown-text text-white text-sm sm:text-base p-4 sm:p-5" v-html="button.description"></p>
                </ul>
            </div>

            <!-- <div class="h-[300px] w-full bg-transparent"></div> -->
        </div>
    </div>
</template>

<script setup lang="ts">

const buttons = [
    {
        title: "TMS",
        description: "Dashboard para monitorear el estado de los pedidos en tiempo real.",
        iconSize: 14
    },
    {
        title: "WMS",
        description: "Trazabilidad en línea las 24 horas, los 365 días del año.<br>Seguimiento de inventario en tiempo real para reponer a tiempo y evitar quiebres de stock.",
        iconSize: 14
    },
    {
        title: "E-COMMERCE",
        description: "Integración a medida con tu e-commerce y/o marketplace para gestionar tus ventas.",
        iconSize: 14
    },
    {
        title: "TOMADOR DE PEDIDOS WEB",
        description: "Ingresa pedidos online.<br>Desde cualquier lugar y en cualquier momento.",
        iconSize: 18
    },
    {
        title: "EQUIPO DE IT DISPONIBLE",
        description: "Soporte técnico especializado para acompañar tu operación <b>cuando lo necesites</b>.",
        iconSize: 18
    }
];


</script>

<style scoped>
.dropdown {
    position: relative;
    /* el padre */
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
        width: 250px !important;
        height: 64px !important;
        padding: 20px 24px !important;
        border-radius: 36px !important;
    }

    .btn-text {
        font-size: 1.00rem !important;
        /* ~20px */
        line-height: 1.2rem !important;
    }

    .dropdown-content {
        width: 250px !important;
        padding: 16px !important;
    }

    .dropdown-text {
        font-size: 1.125rem !important;
        /* ~18px */
        padding: 24px !important;
    }

    .main-container {
        padding-top: 2rem;
    }
}



/* Ajuste para pantallas LG (laptops, 1024px a 1279px) */
@media (min-width: 1024px) and (max-width: 1389px) {
    .custom-btn {
        width: 200px !important;
        height: 54px !important;
        padding: 12px 10px !important;
        border-radius: 32px !important;
    }

    .btn-text {
        font-size: 0.85rem !important;
        line-height: 1.25rem !important;
        padding: 5px;
        /* padding-left: 8px; */
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



@media (max-width: 639px) {
    .dropdown-content {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        margin-top: 8px !important;
    }
}

/* Para pantallas SM y mayores: no empuja elementos */
@media (min-width: 640px) {
    .dropdown-content {
        position: absolute !important;
        left: 0 !important;
        top: 100% !important;
        margin-top: 12px !important;
    }
}
</style>
