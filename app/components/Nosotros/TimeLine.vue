<template>
    <div>
        <!-- Timeline horizontal scroll SOLO en mobile -->
        <div class="block sm:hidden pt-10 sm:pt-0">
            <div class="overflow-x-auto scrollbar-hide">
                <div class="flex gap-6 px-4 pb-4 pt-12" style="width: max-content;">
                    <!-- Item 1 -->
                    <div class="flex-shrink-0 w-80 bg-transparent p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                            <OkLogo />
                            <span id="timeline-1" class="ml-4">2009</span>
                        </div>
                        <div class="text-white flex">
                            <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1">
                                <p class="tracking-widest">100 Clientes,</p>
                                <p class="tracking-widest">1 Camioneta,</p>
                                <p class="tracking-widest">5 Empleados,</p>
                                <p class="tracking-widest">500mts²</p>
                            </span>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="flex-shrink-0 w-80 bg-transparent p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                            <OkLogo />
                            <span id="timeline-2" class="ml-4">2014</span>
                        </div>
                        <div class="text-white">
                            <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 text-balance">
                                <p class="tracking-widest">Mudanza a Panama 3340,</p>
                                <p class="tracking-widest">Munro. Duplicamos a</p>
                                <p class="tracking-widest">1000mts²</p>
                            </span>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="flex-shrink-0 w-80 bg-transparent p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                            <OkLogo />
                            <span id="timeline-3" class="ml-4">2020</span>
                        </div>
                        <div class="text-white">
                            <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide">
                                +40 Empleados
                            </p>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="flex-shrink-0 w-80 bg-transparent p-6 rounded-xl border border-white/10">
                        <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                            <OkLogo />
                            <span id="timeline-4" class="ml-4">2024</span>
                        </div>
                        <div class="text-white">
                            <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide text-balance">
                                Ampliación de tamaño, nuevamente
                                duplicamos a 2000mts².
                                Nuevo deposito, Nuevas oficinas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Timeline original SOLO en desktop/tablet -->
        <div class="min-h-[400px] bg-transparent justify-between sm:p-16 sm:px-48 gap-4 transition-all duration-1250 hidden sm:flex"
            ref="el" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
            <!-- ...original items aquí, igual que antes... -->
            <div class="flex-1 p-6 bg-transparent">
                <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                    <OkLogo />
                    <span id="timeline-1" class="ml-4">2009</span>
                </div>
                <div class="text-white flex">
                    <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1">
                        <p class="tracking-widest">100 Clientes,</p>
                        <p class="tracking-widest">1 Camioneta,</p>
                        <p class="tracking-widest">5 Empleados,</p>
                        <p class="tracking-widest">500mts²</p>
                    </span>
                </div>
            </div>
            <div class="flex-1 p-6 bg-transparent">
                <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                    <OkLogo />
                    <span id="timeline-2" class="ml-4">2014</span>
                </div>
                <div class="text-white">
                    <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 text-balance">
                        <p class="tracking-widest">Mudanza a Panama 3340,</p>
                        <p class="tracking-widest">Munro. Duplicamos a</p>
                        <p class="tracking-widest">1000mts²</p>
                    </span>
                </div>
            </div>
            <div class="flex-1 p-6 bg-transparent">
                <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                    <OkLogo />
                    <span id="timeline-3" class="ml-4">2020</span>
                </div>
                <div class="text-white">
                    <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide">
                        +40 Empleados
                    </p>
                </div>
            </div>
            <div class="flex-1 p-6 bg-transparent">
                <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                    <OkLogo />
                    <span id="timeline-4" class="ml-4">2024</span>
                </div>
                <div class="text-white">
                    <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide text-balance">
                        Ampliación de tamaño, nuevamente
                        duplicamos a 2000mts².
                        Nuevo deposito, Nuevas oficinas
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js';
import OkLogo from '../svg/OkLogo.vue';
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