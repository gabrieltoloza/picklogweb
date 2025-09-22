<template>
    <div class="hero min-h-screen bg-transparent p-10 transition-container z-10">
        <div class="hero-content text-center pb-20">
            <div class="pt-20 sm:pt-0 pb-24 sm:pb-36 max-w-md h-full flex flex-col justify-between min-h-[70vh]">

                <div>
                    <h1 class="text-4xl sm:w-full sm:text-5xl font-bold">
                        <span class="text-white">No hay dos empresas <span class="text-[#F9BD6B]">iguales</span></span>
                    </h1>
                </div>

                <div class="mb-10 sm:mt-0 sm:pt-24 text-white flex flex-col sm:flex-row gap-5 sm:gap-0 h-50 w-full">
                    <span class="flex justify-center">
                        <OkLogo />
                    </span>
                    <span class="text-balance text-lg sm:text-xl sm:w-full">Por eso conectamos inteligencia
                        operativa
                        con atención personalizada.</span>
                </div>

                <div class="hidden sm:block">

                    <span class="flex flex-row justify-center items-center relative z-20">
                        <NuxtLink to="https://www.picklog.com.ar/tracking">
                            <button
                                class="text-sm font-medium rounded-full w-44 h-12 border border-[#F9BD6B] bg-[#F9BD6B] text-gray-700 z-10 cursor-pointer">
                                Seguí tu envío
                            </button>
                        </NuxtLink>

                        <NuxtLink to="https://www.picklog.com.ar/tracking">
                            <div
                                class="absolute left-[270px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
                                <RightRowComplement />
                            </div>
                        </NuxtLink>


                        <NuxtLink to="https://www.picklog.com.ar/tracking">
                            <div class="z-10 ml-4">
                                <RightRow />
                            </div>
                        </NuxtLink>

                    </span>
                </div>


            </div>
        </div>
    </div>

    <div class="sm:hidden fixed bottom-24 left-1/2 -translate-x-1/2 flex justify-center items-center z-40 w-auto">
        <NuxtLink to="https://www.picklog.com.ar/tracking">
            <IconBox />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import IconBox from '../svg/Mobile/IconBox.vue';
import OkLogo from '../svg/OkLogo.vue';
import RightRow from '../svg/RightRow.vue';
import RightRowComplement from '../svg/RightRowComplement.vue';





</script>

<style scoped>
.transition-container {
    position: relative;
    background: transparent;
}

.transition-container::after {
    content: "";
    position: absolute;
    bottom: -1px;
    /* Se extiende 1px fuera del componente */
    left: 0;
    width: 100%;
    height: 200px;
    /* Aumentar altura */
    background: linear-gradient(to bottom,
            transparent,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.9) 90%,
            rgba(0, 0, 0, 1)
            /* Negro completo al final */
        );
    pointer-events: none;
    z-index: 9;
}
</style>