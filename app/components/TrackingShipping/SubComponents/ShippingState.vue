<template>
    <div class="bg-gray-200 shadow-sm flex items-center p-3 border rounded-box border-gray-400">
        <div :class="['w-8 h-8 rounded-full flex items-center justify-center border border-gray-400', coloState]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <div class="ml-3">
            <p class="text-gray-800 font-medium">{{ props.state }}</p>
            <p v-if="props.state === 'EN DEPOSITO'" class="text-gray-800 font-normal">{{ "Deposito BUE" }}</p>
            <p class="text-gray-500 text-sm">{{ props.date }}</p>
        </div>
        <div class="ml-auto">
            <!-- POSIBLE CONTENIDO AQUI,  -->
        </div>
    </div>
</template>

<script setup lang="ts">


import { computed } from 'vue';


const props = defineProps<{
    state: string;
    date: string
}>();


const coloState = computed(() => {
    switch (props.state) {
        case 'EN ESPERA':
            return 'bg-red-600 text-red-600'
        case 'EN DEPOSITO':
            return 'bg-gray-700 text-gray-700'
        case 'EN TRANSITO':
            return 'bg-blue-400 text-blue-400'
        case 'EN CAMINO':
            return 'bg-blue-400 text-blue-400'
        case 'ENTREGADO':
            return 'bg-green-600 text-green-600'
        case 'NO ENTREGADO':
            return 'bg-yellow-300 text-yellow-300'
        case 'CANCELADO':
            return 'bg-gray-900 text-gray-900'
        default:
            return 'bg-gray-200 text-gray-200'
    }
})


/**
 * En Espera = Text Red
 * En Deposito = Text Gray (Oscuro)
 * En Transito = Text Blue/Indigo
 * En Camino = Text Blue/Indigo
 * Entregado = Text Green
 * No Entregado = Text yellow
 * Cancelado = Text Black/Gray(Oscuro puro)
 * En proceso de devolucion = Text orange(no tan naranja)
 * 
 */



</script>

<style scoped></style>