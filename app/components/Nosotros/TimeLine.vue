<template>
    <div class="py-32 pt-40 lg:py-24 lg:pt-32 min-h-screen">
        <div class="w-full transition-all duration-1250" ref="el"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">

            <!-- Timeline horizontal con scroll en mobile, completo en desktop -->
            <div class="overflow-x-auto scrollbar-hide pb-8 lg:overflow-visible">
                <div class="relative flex gap-8 lg:grid lg:grid-cols-4 lg:gap-0 px-4 lg:px-0"
                    style="min-width: max-content; width: 100%;">
                    <!-- Línea principal del timeline -->
                    <div
                        class="absolute left-4 right-4 lg:left-0 lg:right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#F9BD6B]">
                    </div>

                    <!-- Item 1: 2009 (ABAJO - texto debajo del año) -->
                    <div class="flex flex-col items-center group min-w-[200px] lg:min-w-0 lg:w-full relative">

                        <!-- Bloque de contenido -->
                        <div class="mb-2 lg:mb-4 text-center">
                            <h3 class="text-[#F9BD6B] text-lg lg:text-2xl font-bold">
                                <span id="timeline-1">2009</span>
                            </h3>
                            <div class="mx-auto mt-1 h-0.5 w-8 lg:w-12 bg-[#F9BD6B]"></div>
                        </div>

                        <!-- Conector -->
                        <div class="mb-1 lg:mb-2 h-12 lg:h-16 w-0.5 bg-[#F9BD6B]"></div>

                        <!-- Marcador usando TimePointer - siempre en el centro de la línea -->
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 lg:scale-75">
                            <TimePointer />
                        </div>

                        <!-- Descripción - debajo del año -->
                        <div class="mt-4 lg:mt-8 text-center px-2">
                            <div class="text-white text-xs lg:text-sm flex flex-col gap-1">
                                <p class="tracking-wide lg:tracking-widest">100 Clientes</p>
                                <p class="tracking-wide lg:tracking-widest">1 Camioneta</p>
                                <p class="tracking-wide lg:tracking-widest">5 Empleados</p>
                                <p class="tracking-wide lg:tracking-widest">500mts²</p>
                            </div>
                        </div>

                    </div>

                    <!-- Item 2: 2014 (ARRIBA - texto arriba del año) -->
                    <div class="flex flex-col-reverse items-center group min-w-[200px] lg:min-w-0 lg:w-full relative">
                        <!-- Bloque de contenido -->
                        <div class="mt-2 lg:mt-4 text-center">
                            <h3 class="text-[#F9BD6B] text-lg lg:text-2xl font-bold">
                                <span id="timeline-2">2014</span>
                            </h3>
                            <div class="mx-auto mt-1 h-0.5 w-8 lg:w-12 bg-[#F9BD6B]"></div>
                        </div>
                        <!-- Conector -->
                        <div class="mt-1 lg:mt-2 h-12 lg:h-16 w-0.5 bg-[#F9BD6B]"></div>
                        <!-- Marcador usando TimePointer - siempre en el centro de la línea -->
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 lg:scale-75">
                            <TimePointer />
                        </div>
                        <!-- Descripción - arriba del año -->
                        <div class="mb-4 lg:mb-8 text-center px-2">
                            <div class="text-white text-xs lg:text-sm flex flex-col gap-1">
                                <p class="tracking-wide lg:tracking-widest">Mudanza a Panama 3340,</p>
                                <p class="tracking-wide lg:tracking-widest">Munro. Duplicamos a</p>
                                <p class="tracking-wide lg:tracking-widest">1000mts²</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 3: 2020 (ABAJO - texto debajo del año) -->
                    <div class="flex flex-col items-center group min-w-[200px] lg:min-w-0 lg:w-full relative">
                        <!-- Bloque de contenido -->
                        <div class="mb-2 lg:mb-4 text-center">
                            <h3 class="text-[#F9BD6B] text-lg lg:text-2xl font-bold">
                                <span id="timeline-3">2020</span>
                            </h3>
                            <div class="mx-auto mt-1 h-0.5 w-8 lg:w-12 bg-[#F9BD6B]"></div>
                        </div>
                        <!-- Conector -->
                        <div class="mb-1 lg:mb-2 h-12 lg:h-16 w-0.5 bg-[#F9BD6B]"></div>
                        <!-- Marcador usando TimePointer - siempre en el centro de la línea -->
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 lg:scale-75">
                            <TimePointer />
                        </div>
                        <!-- Descripción - debajo del año -->
                        <div class="mt-4 lg:mt-8 text-center px-2">
                            <p class="text-white text-xs lg:text-sm tracking-wide">+40 Empleados</p>
                        </div>
                    </div>

                    <!-- Item 4: 2024 (ARRIBA - texto arriba del año) -->
                    <div class="flex flex-col-reverse items-center group min-w-[200px] lg:min-w-0 lg:w-full relative">
                        <!-- Bloque de contenido -->
                        <div class="mt-2 lg:mt-4 text-center">
                            <h3 class="text-[#F9BD6B] text-lg lg:text-2xl font-bold">
                                <span id="timeline-4">2024</span>
                            </h3>
                            <div class="mx-auto mt-1 h-0.5 w-8 lg:w-12 bg-[#F9BD6B]"></div>
                        </div>
                        <!-- Conector -->
                        <div class="mt-1 lg:mt-2 h-12 lg:h-16 w-0.5 bg-[#F9BD6B]"></div>
                        <!-- Marcador usando TimePointer - siempre en el centro de la línea -->
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 lg:scale-75">
                            <TimePointer />
                        </div>
                        <!-- Descripción - arriba del año -->
                        <div class="mb-4 lg:mb-8 text-center px-2">
                            <div class="text-white text-xs lg:text-sm">
                                <p class="tracking-wide">Ampliación de tamaño, nuevamente</p>
                                <p class="tracking-wide">duplicamos a 2000mts².</p>
                                <p class="tracking-wide">Nuevo deposito, Nuevas oficinas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js';
import TimePointer from './svg/TimePointer.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const el = ref(null);
const isVisible = ref(false);
const hasAppeared = ref(false);

useIntersectionObserver(el, (entries, observer) => {
    const entry = entries[0];
    if (entry && entry.isIntersecting && !hasAppeared.value) {
        isVisible.value = true;

        const timeLine1 = new CountUp('timeline-1', 2009, { duration: 2 });
        const timeLine2 = new CountUp('timeline-2', 2014, { duration: 2 });
        const timeLine3 = new CountUp('timeline-3', 2020, { duration: 2 });
        const timeLine4 = new CountUp('timeline-4', 2024, { duration: 2 });

        timeLine1.start();
        timeLine2.start();
        timeLine3.start();
        timeLine4.start();

        hasAppeared.value = true;
        observer.disconnect();
    }
});
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>