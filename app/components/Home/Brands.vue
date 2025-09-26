<!-- components/ClientsHero.vue -->
<template>
    <section class="bg-[#1B2329] text-white min-h-[850px] bg-custom">
        <!-- Barra superior: Trabajá con nosotros -->
        <div class="border-y border-white/10">
            <div class="flex items-center justify-around gap-4 py-4 text-sm text-gray-300 hover:text-white">
                <span class="tracking-wide text-xl text-white font-montserrat">Trabajá con nosotros</span>
                <span class="inline-flex items-center">

                    <NuxtLink :to="ctaHref">
                        <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.125 19.1248C18.6469 19.1248 18.3281 18.9655 18.0094 18.6467C17.3719 18.0092 17.3719 17.053 18.0094 16.4155L25.978 8.44681C26.6155 7.80932 27.5718 7.80932 28.2093 8.44681C28.8468 9.0843 28.8468 10.0405 28.2093 10.678L20.2406 18.6467C19.9219 18.9655 19.6031 19.1248 19.125 19.1248Z"
                                fill="#F4C17A" />
                            <path
                                d="M27.0937 11.1562C26.6155 11.1562 26.2968 10.9968 25.978 10.678L18.0094 2.70936C17.3719 2.07186 17.3719 1.11562 18.0094 0.478128C18.6469 -0.159366 19.6031 -0.159366 20.2406 0.478128L28.2093 8.44681C28.8468 9.0843 28.8468 10.0405 28.2093 10.678C27.8905 10.9968 27.5718 11.1562 27.0937 11.1562Z"
                                fill="#F4C17A" />
                            <path
                                d="M27.0935 11.1562H1.59374C0.637494 11.1562 0 10.5187 0 9.56242C0 8.60618 0.637494 7.96869 1.59374 7.96869H27.0935C28.0497 7.96869 28.6872 8.60618 28.6872 9.56242C28.6872 10.5187 28.0497 11.1562 27.0935 11.1562Z"
                                fill="#F4C17A" />
                        </svg>
                    </NuxtLink>

                </span>
            </div>
        </div>

        <!-- Hero -->
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 lg:py-24">

                <!-- Lado izquierdo: etiqueta, título y flechas (desktop) -->
                <div class="order-1 md:order-1 sm:my-10 flex flex-col gap-8">
                    <div class="flex items-center gap-3 mb-5">
                        <span class="hidden sm:block h-px w-24 bg-[#F9BD6B]"></span>
                        <span class="ml-4 uppercase text-md font-medium tracking-[0.15em] text-white">Algunos</span>
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-8 w-[70%]">
                        Clientes que <br class="hidden sm:block" />
                        confían en <br class="hidden sm:block" />
                        nosotros
                    </h2>

                    <!-- Botones de navegación - Solo visible en desktop (md y superior) -->
                    <div class="hidden md:flex items-center gap-4">
                        <button
                            class="btn btn-circle h-14 w-14 bg-transparent border border-[#F9BD6B] text-white hover:bg-[#F9BD6B]/10"
                            aria-label="Anterior" @click="prev">
                            <svg width="27" height="17" viewBox="0 0 30 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3496 0.777051C10.8277 0.777051 11.1465 0.936424 11.4652 1.25517C12.1027 1.89266 12.1027 2.84891 11.4652 3.4864L3.49656 11.4551C2.85907 12.0926 1.90283 12.0926 1.26533 11.4551C0.62784 10.8176 0.62784 9.86134 1.26533 9.22385L9.23401 1.25517C9.55276 0.936424 9.87151 0.777051 10.3496 0.777051Z"
                                    fill="white" />
                                <path
                                    d="M2.38095 8.74571C2.85907 8.74571 3.17782 8.90508 3.49656 9.22383L11.4652 17.1925C12.1027 17.83 12.1027 18.7862 11.4652 19.4237C10.8277 20.0612 9.87151 20.0612 9.23401 19.4237L1.26533 11.4551C0.627841 10.8176 0.627841 9.86132 1.26534 9.22383C1.58408 8.90508 1.90283 8.74571 2.38095 8.74571Z"
                                    fill="white" />
                                <path
                                    d="M2.38209 8.74572L27.8819 8.74573C28.8381 8.74573 29.4756 9.38322 29.4756 10.3395C29.4756 11.2957 28.8381 11.9332 27.8819 11.9332L2.38209 11.9332C1.42585 11.9332 0.788353 11.2957 0.788353 10.3395C0.788353 9.38322 1.42585 8.74572 2.38209 8.74572Z"
                                    fill="white" />
                            </svg>
                        </button>

                        <button
                            class="btn btn-circle h-14 w-14 bg-transparent border border-[#F9BD6B] text-white hover:bg-[#F9BD6B]/10"
                            aria-label="Siguiente" @click="next">
                            <svg width="27" height="17" viewBox="0 0 30 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7158 19.9017C19.2377 19.9017 18.9189 19.7423 18.6002 19.4236C17.9627 18.7861 17.9627 17.8298 18.6002 17.1923L26.5689 9.22367C27.2064 8.58617 28.1626 8.58617 28.8001 9.22367C29.4376 9.86116 29.4376 10.8174 28.8001 11.4549L20.8314 19.4236C20.5127 19.7423 20.1939 19.9017 19.7158 19.9017Z"
                                    fill="white" />
                                <path
                                    d="M27.6845 11.933C27.2064 11.933 26.8876 11.7736 26.5689 11.4549L18.6002 3.48621C17.9627 2.84871 17.9627 1.89247 18.6002 1.25498C19.2377 0.617482 20.1939 0.617482 20.8314 1.25498L28.8001 9.22365C29.4376 9.86115 29.4376 10.8174 28.8001 11.4549C28.4813 11.7736 28.1626 11.933 27.6845 11.933Z"
                                    fill="white" />
                                <path
                                    d="M27.6843 11.933H2.18456C1.22831 11.933 0.59082 11.2955 0.59082 10.3393C0.59082 9.38304 1.22831 8.74554 2.18456 8.74554H27.6843C28.6406 8.74554 29.2781 9.38304 29.2781 10.3393C29.2781 11.2955 28.6406 11.933 27.6843 11.933Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Lado derecho: logo activo -->
                <div class="order-2 md:order-2 flex flex-col items-center gap-6">
                    <!-- Logo container -->
                    <div class="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-[#1B2329] rounded-lg">
                        <div class="glow-effect"></div>
                        <Transition name="fade" mode="out-in">
                            <img v-if="currentLogo" :key="index" :src="currentLogo.src" :alt="currentLogo.alt"
                                class="w-[80%] h-[80%] object-contain relative z-10" />
                            <div v-else class="text-gray-400 relative z-10">No hay logo seleccionado</div>
                        </Transition>
                    </div>

                    <!-- Botones de navegación - Solo visible en mobile (menor a md) -->
                    <div class="flex md:hidden items-center gap-4 mt-4">
                        <button
                            class="btn btn-circle h-14 w-14 bg-transparent border border-[#F9BD6B] text-white hover:bg-[#F9BD6B]/10"
                            aria-label="Anterior" @click="prev">
                            <svg width="27" height="17" viewBox="0 0 30 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3496 0.777051C10.8277 0.777051 11.1465 0.936424 11.4652 1.25517C12.1027 1.89266 12.1027 2.84891 11.4652 3.4864L3.49656 11.4551C2.85907 12.0926 1.90283 12.0926 1.26533 11.4551C0.62784 10.8176 0.62784 9.86134 1.26533 9.22385L9.23401 1.25517C9.55276 0.936424 9.87151 0.777051 10.3496 0.777051Z"
                                    fill="white" />
                                <path
                                    d="M2.38095 8.74571C2.85907 8.74571 3.17782 8.90508 3.49656 9.22383L11.4652 17.1925C12.1027 17.83 12.1027 18.7862 11.4652 19.4237C10.8277 20.0612 9.87151 20.0612 9.23401 19.4237L1.26533 11.4551C0.627841 10.8176 0.627841 9.86132 1.26534 9.22383C1.58408 8.90508 1.90283 8.74571 2.38095 8.74571Z"
                                    fill="white" />
                                <path
                                    d="M2.38209 8.74572L27.8819 8.74573C28.8381 8.74573 29.4756 9.38322 29.4756 10.3395C29.4756 11.2957 28.8381 11.9332 27.8819 11.9332L2.38209 11.9332C1.42585 11.9332 0.788353 11.2957 0.788353 10.3395C0.788353 9.38322 1.42585 8.74572 2.38209 8.74572Z"
                                    fill="white" />
                            </svg>
                        </button>

                        <button
                            class="btn btn-circle h-14 w-14 bg-transparent border border-[#F9BD6B] text-white hover:bg-[#F9BD6B]/10"
                            aria-label="Siguiente" @click="next">
                            <svg width="27" height="17" viewBox="0 0 30 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7158 19.9017C19.2377 19.9017 18.9189 19.7423 18.6002 19.4236C17.9627 18.7861 17.9627 17.8298 18.6002 17.1923L26.5689 9.22367C27.2064 8.58617 28.1626 8.58617 28.8001 9.22367C29.4376 9.86116 29.4376 10.8174 28.8001 11.4549L20.8314 19.4236C20.5127 19.7423 20.1939 19.9017 19.7158 19.9017Z"
                                    fill="white" />
                                <path
                                    d="M27.6845 11.933C27.2064 11.933 26.8876 11.7736 26.5689 11.4549L18.6002 3.48621C17.9627 2.84871 17.9627 1.89247 18.6002 1.25498C19.2377 0.617482 20.1939 0.617482 20.8314 1.25498L28.8001 9.22365C29.4376 9.86115 29.4376 10.8174 28.8001 11.4549C28.4813 11.7736 28.1626 11.933 27.6845 11.933Z"
                                    fill="white" />
                                <path
                                    d="M27.6843 11.933H2.18456C1.22831 11.933 0.59082 11.2955 0.59082 10.3393C0.59082 9.38304 1.22831 8.74554 2.18456 8.74554H27.6843C28.6406 8.74554 29.2781 9.38304 29.2781 10.3393C29.2781 11.2955 28.6406 11.933 27.6843 11.933Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    ctaHref?: string
    logos?: { src: string; alt: string }[]
}>()


const ctaHref = props.ctaHref ?? '/transportistas-formulario'
const logos = props.logos ?? [
    // Ejemplo por defecto (cambiá las rutas por las tuyas)
    { src: '/marcas/nestle.png', alt: 'Nestle' },
    { src: '/marcas/vacavaliente.png', alt: 'Vacavaliente' },
    { src: '/marcas/buscalibre.png', alt: 'Buscalibre' },
    { src: '/marcas/craftmoments.png', alt: 'Craft Moments' },
    { src: '/marcas/fenicio.png', alt: 'Fenicio' },
    { src: '/marcas/tuenti.png', alt: 'Tuenti' },
    { src: '/marcas/zulki.png', alt: 'Zulki' },
    { src: '/marcas/boss.png', alt: 'Boss' },
    { src: '/marcas/sportclub.png', alt: 'Sport Club' },
    { src: '/marcas/uarstore.png', alt: 'Uar Store' },
]


const index = ref(0)
const prev = () => (index.value = (index.value - 1 + logos.length) % logos.length)
const next = () => (index.value = (index.value + 1) % logos.length)

// Propiedad computada para manejar de forma segura el logo actual
const currentLogo = computed(() => logos[index.value] || null)

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.glow-effect {
    position: absolute;
    width: 85%;
    height: 85%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 75%);
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.7;
    z-index: 1;
    animation: pulse 4s infinite alternate;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        opacity: 0.6;
    }
    100% {
        transform: scale(1.1);
        opacity: 0.7;
    }
}

.bg-custom {
    position: relative;
    z-index: 5;
}
</style>