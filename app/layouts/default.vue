<template>
    <div>

        <!-- Barra de navegacion -->
        <NavBar />

        <!-- Imagen de fondo contenido principal -->
        <BgBackGroundPickLog v-if="!isNosotrosPage" />

        <!-- Layout Main del proyecto -->
        <main class="main-content pt-32" :class="{
            'bg-[#1B2329]': isNosotrosPage,
            'no-padding-mobile': route.path === '/soluciones'
        }">
            <slot />
        </main>
        <FooterPage />


    </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { computed } from 'vue';
import NavBar from '~/components/Navbar/NavBar.vue';
import BgBackGroundPickLog from '~/components/Home/BgBackGroundPickLog.vue';
import FooterPage from '~/components/Home/FooterPage.vue';


const route = useRoute();
const isNosotrosPage = computed(() => route.path === '/nosotros' || route.path === '/transportistas' || route.path === '/soluciones');

</script>

<style scoped></style>