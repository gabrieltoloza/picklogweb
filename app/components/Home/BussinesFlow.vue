<template>
    <div
        class="bg-[#1B2329] min-h-screen text-white py-16 sm:py-24 md:py-32 gap-12 sm:gap-16 md:gap-20 flex flex-col bg-custom">
        <div class="container mx-auto px-2 sm:px-4">
            <!-- Título alineado a la izquierda -->
            <div class="text-center sm:text-left mb-10 sm:mb-14 md:mb-16 pl-2 pt-10 sm:pt-0 sm:pl-4 md:pl-10">
                <h1 class="text-lg sm:text-4xl md:text-5xl font-bold w-full sm:w-52 tracking-wide sm:tracking-normal">
                    Flujo de operaciones</h1>
            </div>
        </div>

        <!-- Ilustración a ancho completo -->
        <div class="w-full mb-10 sm:mb-14 md:mb-16 overflow-hidden">
            <IlustrationBussines class="w-full h-auto" />
        </div>

        <!-- Tarjetas responsivas -->
        <div class="container mx-auto px-2 sm:px-4 pb-10 sm:pb-14 md:pb-16 font-montserrat">

            <!-- Contenedor de tarjetas DESKTOP -->
            <div
                class="hidden sm:flex sm:flex-col md:flex-row md:justify-center items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12">

                <!-- Tarjeta -->
                <div class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                            
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <CrossdockSvg />
                        </div>
                        <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:gap-4">
                            <h2 class="card-title text-xl sm:text-2xl w-full sm:w-36">Crossdock</h2>
                            <p class="w-full sm:w-[90%] text-base sm:text-sm md:text-base">
                                Retiramos tu mercadería y la integramos a nuestra red logística. Ganás tiempo,
                                control y un arranque eficiente en cada envío.
                            </p>
                        </div>
                    </div>
                </div>


                <!-- Copiar tarjeta y cambiar texto -->
                <div class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <MeliIcon />
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


                <div class="card w-full sm:w-[260px] md:w-[260px] lg:w-1/4 shadow-xl relative flex flex-col 
                           rounded-2xl bg-transparent border border-gray-500 text-[#F9BD6B] 
                           hover:bg-[#F4C17A] hover:text-white transition-all duration-200">
                    <div
                        class="card-body flex flex-col flex-grow py-4 sm:py-5 md:py-6 my-4 sm:my-5 md:my-6 mx-3 sm:mx-4 items-start">
                        <div class="self-start">
                            <MeliFlex />
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

            <!-- Contenedor de Tarjetas MOBILE -->

            <div class="w-full flex flex-col sm:hidden justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">

                <!-- Botón 1 - Crossdock -->
                <div class="w-[350px]">
                    <div role="button"
                        class="custom-btn w-full h-[75px] rounded-xl py-4 px-4 flex items-center bg-[#F9BD6B] text-white hover:bg-[#f0b05c] transition-colors"
                        @click="toggleDropdown(1)">
                        <!-- ...SVG... -->
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                            <path
                                d="M30.6 31.2L20.2003 31.2C19.9882 31.2 19.7847 31.1158 19.6347 30.9657C19.4847 30.8157 19.4004 30.6122 19.4004 30.4001C19.4004 30.1879 19.4847 29.9844 19.6347 29.8344C19.7847 29.6844 19.9882 29.6001 20.2003 29.6001L28.6691 29.6001L17.2344 18.1665C17.0843 18.0163 17 17.8128 17 17.6005C17 17.3882 17.0843 17.1846 17.2344 17.0345C17.3845 16.8844 17.5881 16.8 17.8004 16.8C18.0127 16.8 18.2163 16.8844 18.3664 17.0345L29.8001 28.4691L29.8001 20.0004C29.8001 19.7882 29.8843 19.5848 30.0344 19.4347C30.1844 19.2847 30.3879 19.2004 30.6 19.2004C30.8122 19.2004 31.0157 19.2847 31.1657 19.4347C31.3157 19.5848 31.4 19.7882 31.4 20.0004L31.4 30.4001C31.4 30.6122 31.3157 30.8157 31.1657 30.9657C31.0157 31.1158 30.8122 31.2 30.6 31.2Z"
                                fill="white" />
                        </svg>
                        <span class="btn-text font-medium text-lg ml-2">Crossdock</span>
                    </div>
                    <transition name="fade">
                        <div v-if="openDropdown === 1"
                            class="bg-transparent bg-opacity-90 rounded-[14px] w-full mt-2 shadow-lg border border-[#F9BD6B] p-4">
                            <p class="text-[#f0b05c] text-sm p-0 m-0 leading-relaxed">
                                Retiramos tu mercadería y la integramos a nuestra red logística. Ganás tiempo,
                                control y un arranque eficiente en cada envío.
                            </p>
                        </div>
                    </transition>
                </div>



                <div class="w-[350px]">
                    <div role="button"
                        class="custom-btn w-full h-[75px] rounded-xl py-4 px-4 flex items-center bg-[#F9BD6B] text-white hover:bg-[#f0b05c] transition-colors"
                        @click="toggleDropdown(2)">
                        <!-- ...SVG... -->
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                            <path
                                d="M30.6 31.2L20.2003 31.2C19.9882 31.2 19.7847 31.1158 19.6347 30.9657C19.4847 30.8157 19.4004 30.6122 19.4004 30.4001C19.4004 30.1879 19.4847 29.9844 19.6347 29.8344C19.7847 29.6844 19.9882 29.6001 20.2003 29.6001L28.6691 29.6001L17.2344 18.1665C17.0843 18.0163 17 17.8128 17 17.6005C17 17.3882 17.0843 17.1846 17.2344 17.0345C17.3845 16.8844 17.5881 16.8 17.8004 16.8C18.0127 16.8 18.2163 16.8844 18.3664 17.0345L29.8001 28.4691L29.8001 20.0004C29.8001 19.7882 29.8843 19.5848 30.0344 19.4347C30.1844 19.2847 30.3879 19.2004 30.6 19.2004C30.8122 19.2004 31.0157 19.2847 31.1657 19.4347C31.3157 19.5848 31.4 19.7882 31.4 20.0004L31.4 30.4001C31.4 30.6122 31.3157 30.8157 31.1657 30.9657C31.0157 31.1158 30.8122 31.2 30.6 31.2Z"
                                fill="white" />
                        </svg>
                        <span class="btn-text font-medium text-lg ml-2">Mercado Envíos</span>
                    </div>
                    <transition name="fade">
                        <div v-if="openDropdown === 2"
                            class="bg-transparent bg-opacity-90 rounded-[14px] w-full mt-2 shadow-lg border border-[#F9BD6B] p-4">
                            <p class="text-[#f0b05c] text-sm p-0 m-0 leading-relaxed">
                                Somos un punto habilitado de Mercado Envíos. Conectá tu operación, cumplí con los estándares y ganá eficiencia.
                            </p>
                        </div>
                    </transition>
                </div>

                

                <div class="w-[350px]">
                    <div role="button"
                        class="custom-btn w-full h-[75px] rounded-xl py-4 px-4 flex items-center bg-[#F9BD6B] text-white hover:bg-[#f0b05c] transition-colors"
                        @click="toggleDropdown(3)">
                        <!-- ...SVG... -->
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                            <path
                                d="M30.6 31.2L20.2003 31.2C19.9882 31.2 19.7847 31.1158 19.6347 30.9657C19.4847 30.8157 19.4004 30.6122 19.4004 30.4001C19.4004 30.1879 19.4847 29.9844 19.6347 29.8344C19.7847 29.6844 19.9882 29.6001 20.2003 29.6001L28.6691 29.6001L17.2344 18.1665C17.0843 18.0163 17 17.8128 17 17.6005C17 17.3882 17.0843 17.1846 17.2344 17.0345C17.3845 16.8844 17.5881 16.8 17.8004 16.8C18.0127 16.8 18.2163 16.8844 18.3664 17.0345L29.8001 28.4691L29.8001 20.0004C29.8001 19.7882 29.8843 19.5848 30.0344 19.4347C30.1844 19.2847 30.3879 19.2004 30.6 19.2004C30.8122 19.2004 31.0157 19.2847 31.1657 19.4347C31.3157 19.5848 31.4 19.7882 31.4 20.0004L31.4 30.4001C31.4 30.6122 31.3157 30.8157 31.1657 30.9657C31.0157 31.1158 30.8122 31.2 30.6 31.2Z"
                                fill="white" />
                        </svg>
                        <span class="btn-text font-medium text-lg ml-2">Mercado Flex</span>
                    </div>
                    <transition name="fade">
                        <div v-if="openDropdown === 3"
                            class="bg-transparent bg-opacity-90 rounded-[14px] w-full mt-2 shadow-lg border border-[#F9BD6B] p-4">
                            <p class="text-[#f0b05c] text-sm p-0 m-0 leading-relaxed">
                                Armamos y despachamos pedidos en el día desde nuestra base. Ofrecé entregas rápidas y fortalecé tu reputación como vendedor.
                            </p>
                        </div>
                    </transition>
                </div>
                


            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import BussinesFlowSvg from '../svg/BussinesFlowSvg.vue';
import CrossdockSvg from '../svg/BussinessFlowSection/CrossdockSvg.vue';
import MeliFlex from '../svg/BussinessFlowSection/MeliFlex.vue';
import MeliIcon from '../svg/BussinessFlowSection/MeliIcon.vue';
import IlustrationBussines from '../svg/IlustrationBussines.vue';


// Controlar apertura de cada dropdown
const openDropdown = ref<number | null>(null)
const toggleDropdown = (idx: number) => {
    openDropdown.value = openDropdown.value === idx ? null : idx
}
</script>

<style scoped>
.bg-custom {
    position: relative;
    z-index: 5;
}

.dropdown-wrapper {
  transition: margin 0.35s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
  transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
</style>