<template>
    <div :class="navbarClasses">
        <div class="flex items-center justify-end sm:justify-between h-full w-full relative">

            <!-- Logo a la izquierda (solo desktop) -->
            <div class="z-10 hidden lg:block">
                <NuxtLink to="/" class="">
                    <PickLogLogo />
                </NuxtLink>
            </div>

            <!-- Navegación central (solo desktop) -->
            <div class="hidden lg:flex font-medium text-gray-300/70 z-10 justify-center w-full">
                <ul class="menu menu-horizontal px-1 flex flex-nowrap overflow-x-auto">
                    <li v-for="item in items" :key="item.label" class="group relative">
                        <div
                            class="absolute -left-px top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <PointNavigation />
                        </div>
                        <NuxtLink :to="item.to || '#'"
                            class="flex items-center gap-2 hover:text-white transition-colors duration-200 whitespace-nowrap">
                            <component :is="getIcon(item.icon)" class="w-4 h-4" />
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Botón derecha (solo desktop) -->
            <div class="z-10 hidden lg:flex">
                <div class="flex gap-10 sm:gap-4 xl:gap-10 items-center">
                    <NuxtLink to="/tracking">
                        <button
                            class="border border-[#F9BD6B] rounded-3xl p-5 w-36 text-white font-medium sm:text-xs cursor-pointer hover:bg-[#F9BD6B] hover:text-[#1B2329] transition-all duration-300">
                            Seguí tu pedido
                        </button>
                    </NuxtLink>
                    <PicklogOrangeLogo />
                </div>
            </div>

            <!-- Menú móvil - posicionado a la derecha -->
            <div class="flex items-center justify-end lg:hidden z-10 sm:pl-10">
                <MenuBurguer :items="items" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PickLogLogo from '~/components/svg/PickLogLogo.vue'
import PicklogOrangeLogo from '~/components/svg/PickLogLogoOrange.vue'
import PointNavigation from '~/components/svg/PointNavigation.vue'
import MenuBurguer from '../svg/Mobile/MenuBurguer.vue'



const scrolled = ref(false)

const route = useRoute()

const handleScroll = () => {
    scrolled.value = window.scrollY > 50
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
    return 'div'
}

// Clases condicionales para el navbar
const navbarClasses = computed(() => [
    'fixed top-0 left-0 right-0 z-50 p-5 px-16 sm:px-4 xl:px-16 h-32 transition-all duration-300',
    // Fondo oscuro SIEMPRE en desktop/tablet en /tracking
    route.path === '/tracking'
        ? 'bg-[#F2F2F3] sm:bg-[#1B2329] sm:backdrop-blur-sm sm:shadow-lg'
        // En otras rutas, fondo oscuro solo al hacer scroll en desktop/tablet
        : (scrolled.value
            ? 'sm:bg-[#1B2329] sm:backdrop-blur-sm sm:shadow-lg'
            : 'bg-transparent')
])

</script>

<style scoped>
.navbar {
    transition: background-color 300ms ease-in-out, backdrop-filter 300ms ease-in-out, box-shadow 300ms ease-in-out;
}

@media (min-width: 1024px) and (max-width: 1407px) {
    .menu.menu-horizontal li>a {
        min-width: 30px !important;
        font-size: 0.7rem !important;
        padding: 0.1rem 0.3rem !important;
        letter-spacing: 0 !important;
    }

    .menu.menu-horizontal {
        gap: 0.3rem !important;
    }
}


</style>