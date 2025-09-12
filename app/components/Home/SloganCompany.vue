<template>
    <div class="min-h-screen bg-base-200 bg-opacity-100 px-4 py-12 md:p-12 lg:p-20 font-montserrat override-bg">
        <!-- Estructura principal con flex-col para apilar las secciones -->
        <div class="flex flex-col gap-32 p-20">
            <!-- Primera sección: Slogan centrado -->
            <div class="flex items-center justify-center text-[#555353]">
                <div class="flex flex-col items-center text-center gap-8 max-w-3xl">
                    <p class="text-lg font-bold">SOLUCIONES A MEDIDA</p>
                    <h1 class="text-4xl md:text-5xl font-semibold text-wrap tracking-wide">
                        Adaptamos la logística a tu operación, <span class="text-[#F9BD6B]">no al revés</span>
                    </h1>
                    <button
                        class="border border-[#F9BD6B] rounded-full p-3 mt-3 px-9 w-52 h-16 text-gray-700 font-medium hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                        VER MÁS
                    </button>
                </div>
            </div>

            <!-- Segunda sección: Tarjetas en disposición horizontal -->
            <div class="flex flex-col md:flex-row gap-8 md:gap-10 justify-center">

                <!-- Tarjeta 1 -->
                <div
                    class="card w-full md:w-1/4 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl bg-[#efefef] relative flex flex-col min-h-[400px]">
                    <!-- Icono posicionado en la parte superior central -->
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <SmartLogisticLogoComplete />
                    </div>
                    <div class="card-body flex flex-col flex-grow py-8 my-14 mx-8 mt-20 items-start gap-8">
                        <h2 class="card-title text-wrap w-14">Logística inteligente</h2>
                        <p class="w-60 text-balance font-semibold text-gray-700">Gestión logística optimizada con tecnología y datos en tiempo real para mejorar
                            eficiencia,
                            control y toma de decisiones</p>
                    </div>
                    <!-- Botón posicionado en la parte inferior central -->
                    <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 w-48 h-14">
                        <button
                            class="btn rounded-full w-full h-full px-8 p-6 bg-[#f4f4f4] border-gray-300 text-[#1B2329] hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                            <span>Tecnología</span>
                            <RightRowSlogan class="ml-3"/>
                        </button>
                    </div>

                </div>

                <!-- Tarjeta 2 -->
                <div class="card w-full md:w-1/4 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl bg-[#efefef] relative flex flex-col min-h-[400px] font-montserrat">
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <CustomServiceComplete />
                    </div>
                    <div class="card-body flex flex-col flex-grow py-8 my-14 mx-8 mt-20 items-start gap-8">
                        <h2 class="card-title text-wrap w-14 pt-5">Personalización</h2>
                        <p class="w-56 text-start font-semibold">Nuestro equipo está presente en cada etapa, asegurando atención directa y respuestas rápidas.
                        </p>

                    </div>
                </div>

                <!-- Tarjeta 3 -->
                <div class="card w-full md:w-1/4 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl bg-[#efefef] relative flex flex-col min-h-[400px]">
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <FullfillmentComplete  />
                        
                    </div>
                    <div class="card-body flex flex-col flex-grow py-8 my-14 mx-8 mt-20 items-start gap-8">
                        <h2 class="card-title text-wrap w-32 pt-5">Servicios - Fulfillment</h2>
                        <p class="w-56 text-start font-semibold">Visibilidad total desde que entra tu stock hasta que se entrega al cliente. Optimizá tiempos,
                            reducí costos y enfocate en crecer tu negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


import SmartLogisticLogoComplete from '../svg/SmartLogisticLogoComplete.vue';
import FullfillmentComplete from '../svg/FullfillmentComplete.vue';
import CustomServiceComplete from '../svg/CustomServiceComplete.vue';
import RightRowSlogan from '../svg/RightRowSlogan.vue';



</script>

<style scoped>

.override-bg {
  position: relative;
  z-index: 5;
  background-color: white !important;
  color: #333 !important;
}

</style>