<template>

    <div class="bg-[#1B2329] min-h-screen text-white py-36 gap-20 flex flex-col bg-custom">
        <div class="container mx-auto px-4">
            <!-- Título alineado a la izquierda -->
            <div class="text-left mb-16 pl-4 md:pl-10">
                <h1 class="text-5xl font-bold w-52">Flujo de operaciones</h1>
            </div>
        </div>

        <!-- Ilustración a ancho completo -->
        <div class="w-full mb-16 overflow-hidden">
            <IlustrationBussines class="w-full h-auto" />
        </div>

        <!-- Tarjetas con más espaciado y menor altura -->
        <div class="container mx-auto px-4 pb-16 font-montserrat">
            <div class="flex flex-col md:flex-row md:justify-center gap-8 md:gap-12 lg:gap-16">
                <!-- Tarjeta 1 -->
                <div
                    class="card w-full md:w-1/3 lg:w-1/4 shadow-xl relative flex flex-col min-h-[450px] rounded-3xl bg-transparent border border-gray-500 text-[#F9BD6B] hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <!-- Contenido de la tarjeta alineado a la izquierda -->
                    <div class="card-body flex flex-col flex-grow py-6 my-10 mx-6 items-start">
                        <!-- SVG alineado a la izquierda -->
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>

                        <!-- Contenido desplazado hacia abajo -->
                        <div class="mt-20 flex flex-col gap-6">
                            <h2 class="card-title text-wrap text-3xl w-40">Crossdock:</h2>
                            <p class="w-[85%] text-balance text-lg">
                                Retiramos tu mercadería y la integramos a nuestra red logística. Ganás tiempo,
                                control y un arranque eficiente en cada envío.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta 2 -->
                <div
                    class="card w-full md:w-1/3 lg:w-1/4 shadow-xl relative flex flex-col min-h-[450px] rounded-3xl bg-transparent border border-gray-500 text-[#F9BD6B] hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <!-- Contenido de la tarjeta alineado a la izquierda -->
                    <div class="card-body flex flex-col flex-grow py-6 my-10 mx-6 items-start">
                        <!-- SVG alineado a la izquierda -->
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>

                        <!-- Contenido desplazado hacia abajo -->
                        <div class="mt-20 flex flex-col gap-6">
                            <h2 class="card-title text-wrap text-3xl w-full">Mercado Envíos</h2>
                            <p class="w-[85%] text-balance text-lg">
                                Somos un punto habilitado de Mercado Envíos.
                                Conectá tu operación, cumpli con los estándares y ganá eficiencia.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tarjeta 3 -->
                <div
                    class="card w-full md:w-1/3 lg:w-1/4 shadow-xl relative flex flex-col min-h-[450px] rounded-3xl bg-transparent border border-gray-500 text-[#F9BD6B] hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <!-- Contenido de la tarjeta alineado a la izquierda -->
                    <div class="card-body flex flex-col flex-grow py-6 my-10 mx-6 items-start">
                        <!-- SVG alineado a la izquierda -->
                        <div class="self-start">
                            <BussinesFlowSvg />
                        </div>

                        <!-- Contenido desplazado hacia abajo -->
                        <div class="mt-20 flex flex-col gap-6">
                            <h2 class="card-title text-wrap text-3xl w-full">Mercado Flex</h2>
                            <p class="w-[85%] text-balance text-lg">
                                Armamos y despachamos pedidos en el dia desde nuestra base. Ofrecé
                                entregas rapidas y fortalecé tu reputación como vendedor.
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