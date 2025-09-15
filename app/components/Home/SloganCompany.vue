<template>
    <div
        class="min-h-screen bg-base-200 bg-opacity-100 px-2 py-6 sm:px-4 sm:py-10 md:px-8 md:py-14 lg:px-16 lg:py-20 font-montserrat override-bg">
        <div class="flex flex-col gap-12 sm:gap-16 md:gap-20 p-2 sm:p-6 md:p-10">
            <!-- Primera sección: Slogan centrado -->
            <div class="flex items-center justify-center text-[#555353]">
                <div class="flex flex-col items-center text-center gap-3 sm:gap-6 max-w-full sm:max-w-2xl">
                    <p class="text-base sm:text-lg font-bold">SOLUCIONES A MEDIDA</p>
                    <h1 class="text-xl sm:text-3xl md:text-4xl font-semibold text-wrap tracking-wide">
                        Adaptam<span class="text-black m-0 p-0">os la logístic</span>a a tu operación, <span
                            class="text-[#F9BD6B]">no al revés</span>
                    </h1>
                    <button
                        class="border border-[#F9BD6B] rounded-full p-2 sm:p-2.5 mt-2 sm:mt-2.5 px-6 sm:px-8 w-36 sm:w-44 h-10 sm:h-12 text-gray-700 font-medium cursor-pointer hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                        VER MÁS
                    </button>
                </div>
            </div>

            <!-- Segunda sección: Tarjetas en disposición horizontal -->
            <div class="flex flex-col md:flex-row gap-5 sm:gap-7 md:gap-8 justify-center items-center">
                <!-- Tarjeta 1 -->
                <div
                    class="card w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px] shadow-[0_0_18px_rgba(0,0,0,0.15)] hover:shadow-[0_0_28px_rgba(0,0,0,0.22)] transition-shadow duration-300 rounded-2xl bg-[#efefef] relative flex flex-col z-[1]">
                    <!-- Icono posicionado en la parte superior central -->
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <SmartLogisticLogoComplete />
                    </div>
                    <div
                        class="card-body flex flex-col flex-grow py-3 sm:py-4 md:py-5 my-4 sm:my-6 md:my-8 mx-2 sm:mx-4 md:mx-6 mt-12 sm:mt-14 md:mt-16 items-start gap-2 sm:gap-3 md:gap-4">
                        <h2 class="card-title text-wrap text-base sm:text-lg md:text-xl w-24 sm:w-20">Logística
                            inteligente</h2>
                        <p class="w-full sm:w-[90%] pt-1 sm:pt-2 md:pt-3 text-balance font-medium text-gray-900">
                            Gestión logística optimizada con tecnología y datos en tiempo real para mejorar eficiencia,
                            control y toma de decisiones
                        </p>
                    </div>
                    <!-- Botón posicionado en la parte inferior central -->
                    <div
                        class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 w-28 sm:w-32 md:w-36 h-9 sm:h-10 md:h-11">
                        <button
                            class="btn rounded-full w-full h-full px-3 sm:px-4 md:px-5 p-1 sm:p-2 md:p-3 bg-[#f4f4f4] border-gray-300 text-gray-900 hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                            <span>Tecnología</span>
                            <RightRowSlogan class="ml-1 sm:ml-2 md:ml-2.5" />
                        </button>
                    </div>
                </div>

                <!-- Tarjeta 2 -->
                <div
                    class="card w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] xl:min-h-[320px] shadow-[0_0_18px_rgba(0,0,0,0.15)] hover:shadow-[0_0_28px_rgba(0,0,0,0.22)] transition-shadow duration-300 rounded-2xl bg-[#efefef] relative flex flex-col z-[1]">
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <CustomServiceComplete />
                    </div>
                    <div
                        class="card-body flex flex-col flex-grow py-3 sm:py-4 md:py-5 my-4 sm:my-6 md:my-8 mx-2 sm:mx-4 md:mx-6 mt-12 sm:mt-14 md:mt-16 items-start gap-2 sm:gap-3 md:gap-4">
                        <h2 class="card-title text-wrap text-base sm:text-lg md:text-xl w-24 sm:w-20 pt-1 sm:pt-2">
                            Personalización</h2>
                        <p class="w-full sm:w-[90%] pt-1 sm:pt-2 md:pt-7 text-balance font-medium text-gray-900">
                            Nuestro equipo está presente en cada etapa, asegurando atención directa y respuestas
                            rápidas.
                        </p>
                    </div>
                </div>

                <!-- Tarjeta 3 -->
                <div
                    class="card w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px] shadow-[0_0_18px_rgba(0,0,0,0.15)] hover:shadow-[0_0_28px_rgba(0,0,0,0.22)] transition-shadow duration-300 rounded-2xl bg-[#efefef] relative flex flex-col z-[1]">
                    <div class="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <FullfillmentComplete />
                    </div>
                    <div
                        class="card-body flex flex-col flex-grow py-3 sm:py-4 md:py-5 my-4 sm:my-6 md:my-8 mx-2 sm:mx-4 md:mx-6 mt-12 sm:mt-14 md:mt-16 items-start gap-2 sm:gap-3 md:gap-4">
                        <h2 class="card-title text-wrap text-base sm:text-lg md:text-xl w-28 sm:w-24">Servicios -
                            Fulfillment</h2>
                        <p class="w-full text-start pt-1 sm:pt-2 font-medium text-gray-900">
                            Visibilidad total desde que entra tu stock hasta que se entrega al cliente. Optimizá
                            tiempos,
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