<template>
    <div class="hero min-h-screen bg-transparent pt-10 sm:p-10 transition-container z-10">
        <div class="hero-content text-center pb-20">
            <div
                class="top-mobile-custom bottom-mobile-custom pt-10 sm:pt-0 pb-15 sm:pb-36 max-w-md h-full flex flex-col justify-between min-h-[70vh]">

                <div>
                    <h1 class="main-title text-4xl sm:w-full sm:text-5xl font-bold pt-10">
                        <span class="text-white">No hay dos empresas <span class="text-[#F9BD6B]">iguales</span></span>
                    </h1>
                </div>

                
                <div
                    class="oklogo-and-paragraph mb-10 sm:mt-0 sm:pt-24 sm:px-14 text-white flex flex-col sm:flex-row gap-5 sm:gap-0 h-50 w-full">
                    <span class="flex justify-center shrink-0">
                        <OkLogo />
                    </span>
                    <span class="main-text px-10 sm:px-0">
                        Por eso conectamos inteligencia operativa con atención personalizada.
                    </span>
                </div>


                <div class="hidden sm:block">

                    <span class="flex flex-row justify-center items-center relative z-20">
                        <NuxtLink to="/tracking">
                            <button
                                class="text-sm font-medium rounded-full w-44 h-12 border border-[#F9BD6B] bg-[#F9BD6B] text-gray-700 z-10 cursor-pointer">
                                Seguí tu pedido
                            </button>
                        </NuxtLink>

                        <NuxtLink to="/tracking">
                            <div
                                class="absolute left-[270px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
                                <RightRowComplement />
                            </div>
                        </NuxtLink>

                        <NuxtLink to="/tracking">
                            <div class="z-10 ml-4">
                                <RightRow />
                            </div>
                        </NuxtLink>

                    </span>
                </div>

            </div>
        </div>
    </div>

    <div
        class="inconbox-mobile-custom sm:hidden fixed bottom-24 left-1/2 -translate-x-1/2 flex justify-center items-center z-40 w-auto">
        <NuxtLink to="/tracking">
            <IconBox :height="55" :width="55" />
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
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom,
            transparent,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(0, 0, 0, 0.9) 90%,
            rgba(0, 0, 0, 1)
        );
    pointer-events: none;
    z-index: 9;
}


/* SOLUCIÓN PARA EL TEXTO COMPACTO EN PRODUCCIÓN */
.main-text {
    font-size: 1.125rem;
    line-height: 1.4; /* Más compacto */
    letter-spacing: normal; /* Sin espaciado extra */
    word-spacing: normal; /* Sin espaciado extra */
}

@media (min-width: 640px) {
    .main-text {
        font-size: 1.25rem;
        line-height: 1.5;
        width: 100%;
    }
}

@media (max-width: 360px) {
    .top-mobile-custom {
        padding-top: 10px;
    }

    .bottom-mobile-custom {
        padding-bottom: 176px;
    }

    .inconbox-mobile-custom {
        bottom: 55px;
    }

    .oklogo-and-paragraph {
        gap: 35px;
        padding-top: 20px;
    }
}

@media (max-height: 700px) {
    .top-mobile-custom {
        padding-top: 0;
    }

    .main-title {
        padding-top: 0;
    }

    .main-text {
        font-size: 1rem; /* 16px en pantallas más pequeñas */
        line-height: 1.6;
    }

    .oklogo-and-paragraph {
        padding-bottom: 0;
    }
}

</style>