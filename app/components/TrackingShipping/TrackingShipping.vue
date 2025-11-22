<template>
    <div class="bg-[#F2F2F3]">
        <div
            class="bg-transparent flex flex-col justify-center items-center px-3 p-4 pt-28 sm:px-20 sm:pt-32 min-h-[100px]">
            <div>
                <ShippingIconTracking />
            </div>

            <div class="p-3 pt-9 m-1 text-2xl text-balance text-center text-[#1B2329] font-semibold">
                Seguí tu paquete desde acá!
            </div>
        </div>

        <div class="flex flex-col gap-1 bg-transparent items-center px-3 sm:px-20 sm:pt-0 min-h-[1000px] h-auto">
            <!-- Contenedor principal con ancho máximo consistente -->
            <div
                class="sm:pl-20 lg:pl-40 w-full max-w-4xl mx-auto p-4 rounded-box mb-4 lg:mb-0 flex flex-col items-center sm:items-start">

                <!-- Texto descriptivo -->
                <span class="block font-normal text-md text-[#a59f9f] text-center sm:text-left mb-4 w-full">
                    Ingrese el código de seguimiento
                </span>

                <!-- Fieldset con formulario -->
                <fieldset class="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 w-full">

<!-- Input estilizado -->
<div
    class="w-full sm:w-auto sm:flex-1 sm:max-w-md flex items-center bg-[#FFFFFF] rounded-lg gap-1 px-2 py-3 shadow-sm border border-transparent hover:border-gray-300 focus-within:border-[#F9BD6B] focus-within:ring-2 focus-within:ring-[#F9BD6B] focus-within:ring-opacity-20 transition-all duration-200">
    <!-- SVG Icon -->
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0">
        <!-- ...existing code... -->
    </svg>

    <!-- Input Field -->
    <input v-model="inputShippingCode" type="text" placeholder="Ejemplo: 0000045487"
        class="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent font-medium" />
</div>

                    <!-- Botón de búsqueda -->
                    <div class="flex justify-center">
                        <button class="pointer transition-transform hover:scale-105"
                            @click="handlerRequestShippingState">
                            <IconBox :height="75" :width="75" />
                        </button>
                    </div>

                </fieldset>
            </div>

            <!-- Contenido dinámico con mismo ancho máximo -->
            <div class="w-full max-w-4xl mx-auto px-4">
                <div v-if="shippingStatesResult === undefined && resultMessage !== ''" class="w-full">
                    <NotFoundResult :message="resultMessage" />
                </div>

                <div v-else-if="shippingStatesResult !== undefined" class="w-full pb-16">
                    <DetailTrackingShipping :shipping-history="shippingStatesResult.result"
                        :shipping-code="setShippingCode" :info-shipping-state="shippingInfoState?.result || []" />
                </div>
            </div>
        </div>

    </div>

    <!-- Loading session -->
    <ModalLoading v-if="modalState" :open="modalState" />


</template>



<script setup lang="ts">

import { computed, onMounted, ref } from 'vue';

import type { StateSuccess } from '~/components/TrackingShipping/interface/state.ok.response';
import type { TrackingSuccess } from '~/components/TrackingShipping/interface/tracking.ok.interface';
import type { TrackingError } from '~/components/TrackingShipping/interface/tracking.error.interface';

import DetailTrackingShipping from '~/components/TrackingShipping/DetailTrackingShipping.vue';
import ShippingIconTracking from '~/components/TrackingShipping/SubComponents/ShippingIconTracking.vue';
import NotFoundResult from '~/components/TrackingShipping/SubComponents/NotFoundResult.vue';
import { getHistoryShipping } from '~/components/TrackingShipping/Composables/GetTrackingShipping';
import { getInfoState } from '~/components/TrackingShipping/Composables/GetStateShipping';
import IconBox from '../svg/Mobile/IconBox.vue';
import ModalLoading from './SubComponents/ModalLoading.vue';
import { getAuthAkeronJWT } from './Composables/JWT/GetAkeronJWT';




// VARIABLES HARDCODEADAS
// VARIABLES HARDCODEADAS
// VARIABLES HARDCODEADAS
const apiClient = '40ef0dfc18ca5419281f95b9e7b1de4926156adb1b78e0e6f03221af22aa958a';
const apiSecret = '2837789c951e17d05c0f8335bb1d33e23928ca8c293e82cbd81a9b961f20f4b0';


const modalState = ref<boolean>(false)

const inputShippingCode = ref<string>('');
const setShippingCode = ref<string>('');

const resultMessage = ref<string>('');
const shippingStatesResult = ref<TrackingSuccess | undefined>(undefined);
const shippingInfoState = ref<StateSuccess | undefined>(undefined);



// POSIBLE MEJORA UNIFICANDO LOS COMPOSABLES DE CONSULTA DE ESTADO Y DE HISTORIAL CON UN "Promise.all"
const handlerRequestShippingState = async (): Promise<void> => {
    if (!inputShippingCode.value.trim()) {
        resultMessage.value = 'Debe ingresar el código de seguimiento'
        return;
    }

    // Limpiar resultados anteriores
    resultMessage.value = ''
    shippingStatesResult.value = undefined
    shippingInfoState.value = undefined
    modalState.value = true;

    try {
        // Llama a tu backend (ajusta la URL si es necesario)
        const response = await fetch('https://api.picklog.online/v2/tracking/historial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codigo_envio: inputShippingCode.value })
        });

        const data = await response.json();

        if (!data.success || !data.data?.historial?.status) {
            modalState.value = false;
            throw new Error(data.data?.historial?.msg || 'No se encontraron resultados');
        }

        // Reutiliza tus interfaces y lógica de presentación
        shippingStatesResult.value = data.data.historial;
        shippingInfoState.value = data.data.state;
        setShippingCode.value = inputShippingCode.value;
        modalState.value = false;
        inputShippingCode.value = '';
    } catch (error) {
        modalState.value = false;
        inputShippingCode.value = '';
        resultMessage.value = 'El código de envio ingresado no arrojó resultados';
    }
}


</script>



<style scoped>
/* Colores y efectos para los botones de navegacion */
.custom-nav-button {
    background-color: #f1b15a;
    color: white;
}

.custom-nav-button:hover {
    background-color: #f3bc74;
}

.custom-nav-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(241, 177, 90, 0.5);
}
</style>