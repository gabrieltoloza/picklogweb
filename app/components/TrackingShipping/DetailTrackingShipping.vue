<template>

    <section class="p-4 flex flex-col md:flex-row justify-start items-center gap-10 h-auto bg-transparent rounded-box">
        <div class="flex flex-col w-full md:w-[400px] md:h-[300px] justify-center items-center bg-[#EAEBEC] rounded-2xl">
            <div class="font-semibold p-4 text-lg flex lg:pl-8 w-full">
                <span>Datos del envio</span>
            </div>
            <div class="flex flex-col font-medium text-gray-600">
                <div class="">
                    <span class="text-lg">Nombre: </span>
                    <span class="text-base">{{ receives }}</span>
                </div>
                <div class="">
                    <span class="text-lg">Dirección: </span>
                    <span class="text-base">{{ address }}, {{ location }}</span>
                </div>
                <!-- Agregar informacion segun se solicite -->
            </div>
        </div>

        <div class="flex flex-col gap-2 w-full md:w-1/2 justify-start mt-4 md:mt-0">
            <div class="flex flex-col p-2 items-start gap-2 bg-transparent">
                <span class="font-semibold text-lg">Codigo de seguimiento: </span>
                <span class="font-semibold text-base">{{ props.shippingCode }}</span>
            </div>

            <ShippingState v-for="(state, index) in getShippingHistory" :key="index" :state="state.state.name"
                :date="state.date" />
        </div>
    </section>

</template>

<script setup lang="ts">

import { computed } from 'vue';
import ShippingState from './SubComponents/ShippingState.vue';
import type { TrackingState } from './interface/tracking.ok.interface';
import type { ResultInfoState } from './interface/state.ok.response';



const props = defineProps<{
    shippingHistory: Array<TrackingState[]>;
    shippingCode: string;
    infoShippingState: ResultInfoState[];
}>();


const getShippingHistory = computed(() => props.shippingHistory[0])
const getInfoShippingState = computed(() => {
    return props.infoShippingState && props.infoShippingState.length > 0
        ? props.infoShippingState[0]
        : null;
})

// Propiedades computadas para datos del envios
const receives = computed(() => getInfoShippingState.value?.receives || '');
const address = computed(() => getInfoShippingState.value?.address || '');
const location = computed(() => getInfoShippingState.value?.location || '');
const price_iva = computed(() => getInfoShippingState.value?.price_iva || '');

</script>

<style scoped></style>