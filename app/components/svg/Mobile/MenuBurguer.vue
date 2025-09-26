<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="open" />
        
        <div class="drawer-content">
            <!-- Botón hamburguesa -->
            <label for="my-drawer" class="drawer-button cursor-pointer">
                <svg width="35" height="14" viewBox="0 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.87556 0.868366L31.8853 0.868364C33.0107 0.868364 33.8158 1.6166 33.8981 2.73895C33.9804 3.8613 33.2851 4.60954 32.1597 4.60954L2.14994 4.60954C1.02458 4.60954 0.219455 3.8613 0.13714 2.73895C0.0548248 1.6166 0.750192 0.868367 1.87556 0.868366Z"
                        fill="#F9BD6B" />
                    <path
                        d="M31.886 13.7512L1.87628 13.7417C0.750916 13.7413 0.0557865 12.9929 0.138459 11.8705C0.221131 10.7482 1.02649 10.0002 2.15185 10.0006L32.1616 10.0101C33.287 10.0105 33.9821 10.759 33.8994 11.8813C33.8168 13.0036 33.0114 13.7516 31.886 13.7512Z"
                        fill="#F9BD6B" />
                </svg>
            </label>
        </div>

        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

            <div class="bg-[#F2F2F3] text-[#1B2329] min-h-full w-screen px-14 py-20 pb-25 flex flex-col justify-between">

                <!-- Contenedor del botón Close -->
                <div class="w-full flex justify-end">
                    <button class="" @click="closeDrawer">
                        <IconClose />
                    </button>
                </div>

                <!-- Contenedor de la navegación -->
                <div class="flex-1 flex items-center justify-start">
                    <ul class="menu gap-5 font-medium">
                        <li v-for="item in items" :key="item.label">
                            <NuxtLink :to="item.to" @click="closeDrawer">{{ item.label }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contenedor del botón Tracking -->
                <div class="w-full flex flex-col gap-5 pl-6 justify-start">
                    <NuxtLink to="/tracking" @click="closeDrawer" class="w-full">
                        <button class="text-[#1B2329] font-medium">
                            TRACKING
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/" @click="closeDrawer" class="w-full">
                        <button class="text-[#1B2329] font-medium">
                            INICIAR SESION
                        </button>
                    </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconClose from './IconClose.vue';

const props = defineProps<{ items: { label: string; to: string }[] }>()
const open = ref(false)

function closeDrawer() {
    open.value = false
}
</script>