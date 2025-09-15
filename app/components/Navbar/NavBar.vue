<template>
    <div :class="['navbar fixed top-0 z-50 p-5 px-16 h-32 transition-colors navbar-custom duration-300', scrolled ? 'bg-[#1B2329] rounded-b-xl' : 'bg-transparent']">


        <!-- Logo a la izquierda -->
        <div class="navbar-start">
            <NuxtLink to="/" class="">
                <PickLogLogo />
            </NuxtLink>
        </div>



        <!-- Navegación central (desktop) -->
        <div class="navbar-center hidden lg:flex font- text-gray-300/70">
            <ul class="menu menu-horizontal px-1">
                <li v-for="item in items" :key="item.label" class="group relative">

                    <!-- Punto anaranjado a la izquierda -->
                    <!-- Punto anaranjado a la izquierda -->
                    <div
                        class="absolute -left-px top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PointNavigation />
                    </div>

                    <NuxtLink :to="item.to || '#'" class="flex items-center gap-2 hover:text-white transition-colors">
                        <component :is="getIcon(item.icon)" class="w-4 h-4" />
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>



        <!-- Botón derecha -->
        <div class="navbar-end mr-8 h-full">
            <div class="flex gap-10">

                <NuxtLink to="https://www.picklog.com.ar/tracking">
                    <button
                        class="border border-[#F9BD6B] rounded-3xl p-3 px-9 text-white font-medium cursor-pointer hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                        TRACKING
                    </button>
                </NuxtLink>


                <PicklogOrangeLogo />

            </div>


        </div>
    </div>
</template>




<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'

import PickLogLogo from '~/components/svg/PickLogLogo.vue'
import PicklogOrangeLogo from '~/components/svg/PickLogLogoOrange.vue'
import PointNavigation from '~/components/svg/PointNavigation.vue'


const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 30
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})


const items = [
    {
        label: 'INICIO',
        icon: 'BookOpenIcon',
        to: '/'
    },
    {
        label: 'SOLUCIONES A MEDIDA',
        icon: 'DatabaseIcon',
        to: '/soluciones'
    },
    {
        label: 'NOSOTROS',
        icon: 'CubeIcon',
        to: '/nosotros'
    },
    {
        label: 'TRANSPORTISTAS',
        icon: 'IconCube',
        to: '/transportistas'
    }
]



// Función simple para iconos (puedes usar heroicons o cualquier biblioteca)
const getIcon = (iconName: string) => {
    // Retorna un componente SVG simple o usa una biblioteca de iconos
    return 'div' // Placeholder - reemplaza con tu solución de iconos preferida
}

const handleContactAction = () => {
    console.log('Contactar clicked!')
    // Tu lógica aquí
    navigateTo('/contact')
}


</script>

<style scoped>

</style>