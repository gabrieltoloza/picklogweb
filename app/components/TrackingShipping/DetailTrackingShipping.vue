<template>

    <section class="p-4 flex flex-col md:flex-row justify-start gap-5 h-auto bg-base-200 rounded-box">
        <div class="flex flex-col gap-2 w-full md:w-1/2 justify-start">
            <span class="font-semibold p-2 pl-4 text-lg bg-gray-300 rounded-box border border-gray-400">
                Datos del envio
            </span>
            <div class="flex flex-col gap-1">
                <div class="">
                    <span class="font-semibold text-lg">Nombre: </span>
                    <span class="font-semibold text-base text-orange-700">{{ receives }}</span>
                </div>
                <div class="">
                    <span class="font-semibold text-lg">Dirección: </span>
                    <span class="font-semibold text-base text-orange-700">{{ address }}, {{ location }}</span>
                </div>
                <div class="">
                    <span class="font-semibold text-lg">Valor envío: </span>
                    <span class="font-semibold text-base text-orange-700">{{ price_iva }}</span>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-2 w-full md:w-1/2 justify-start mt-4 md:mt-0">
            <div class="flex flex-row p-2 items-center gap-2 bg-gray-300 rounded-box border border-gray-400">
                <span class="font-semibold text-lg pl-4">Codigo de seguimiento: </span>
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