<template>
    <div
        class="bg-[#1B2329] min-h-screen text-white py-16 sm:py-24 md:py-32 gap-12 sm:gap-16 md:gap-20 flex flex-col bg-custom">
        <div class="container mx-auto px-2 sm:px-4">
            <!-- Título alineado a la izquierda -->
            <div class="text-left mb-10 sm:mb-14 md:mb-16 pl-2 sm:pl-4 md:pl-10">
                <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold w-full sm:w-52">Flujo de operaciones</h1>
            </div>
        </div>

        <!-- Ilustración a ancho completo -->
        <div class="w-full mb-10 sm:mb-14 md:mb-16 overflow-hidden">
            <IlustrationBussines class="w-full h-auto" />
        </div>

        <!-- Tarjetas responsivas -->
        <div class="container mx-auto px-2 sm:px-4 pb-10 sm:pb-14 md:pb-16 font-montserrat">

            <div class="flex flex-col md:flex-row md:justify-center items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                
                <!-- Tarjeta -->
                <div
                    class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                            
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>
                        <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:gap-4">
                            <h2 class="card-title text-xl sm:text-2xl w-full sm:w-36">Crossdock:</h2>
                            <p class="w-full sm:w-[90%] text-base sm:text-sm md:text-base">
                                Retiramos tu mercadería y la integramos a nuestra red logística. Ganás tiempo,
                                control y un arranque eficiente en cada envío.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Copiar tarjeta y cambiar texto -->
                <div
                    class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>
                        <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:gap-4">
                            <h2 class="card-title text-xl sm:text-2xl w-full">Mercado Envíos</h2>
                            <p class="w-full sm:w-[90%] text-base sm:text-sm md:text-base">
                                Somos un punto habilitado de Mercado Envíos.
                                Conectá tu operación, cumplí con los estándares y ganá eficiencia.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div
                    class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>
                        <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:gap-4">
                            <h2 class="card-title text-xl sm:text-2xl w-full">Mercado Flex</h2>
                            <p class="w-full sm:w-[90%] text-base sm:text-sm md:text-base">
                                Armamos y despachamos pedidos en el día desde nuestra base. Ofrecé
                                entregas rápidas y fortalecé tu reputación como vendedor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import BussinesFlowSvg from '../svg/BussinesFlowSvg.vue';
import IlustrationBussines from '../svg/IlustrationBussines.vue';
</script>

<style scoped>
.bg-custom {
    position: relative;
    z-index: 5;
}
</style>