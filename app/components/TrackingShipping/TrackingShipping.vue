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

        <div
            class="flex flex-col gap-1 bg-transparent items-center px-3 sm:px-20 sm:pt-0 min-h-[1000px] h-auto">
            <div class="w-full  p-4 rounded-box  mb-4 lg:mb-0 sm:flex sm:flex-col">


                <span
                    class="font-normal text-md text-[#a59f9f] text-center pl-7 sm:pl-0 md:pr-14 md:mr-5 lg:pr-28 lg:mr-10 xl:pr-50 xl:mr-8">Ingrese
                    el código de seguimiento</span>

                <fieldset
                    class="flex flex-col sm:flex-row justify-center items-center bg-transparent sm:gap-5 rounded-lg w-full p-4 sm:pt-0">

                    <!-- Input estilizado como la imagen -->
                    <div
                        class="lg:w-[30%] sm:h-[50%] md:w-[50%] lg: flex justify-center items-center bg-[#FFFFFF] rounded-lg gap-3 px-4 py-3 shadow-sm hover:border-gray-300 focus-within:border-[#F9BD6B] focus-within:ring-2 focus-within:ring-[#F9BD6B] focus-within:ring-opacity-20 transition-all duration-200 mb-4 sm:mb-0">
                        <!-- SVG Icon (puedes cambiarlo por el que prefieras) -->
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.77734 0C9.89118 0 10.0005 0.0216428 10.1006 0.0615234L10.1182 0.0693359C10.1543 0.0846932 10.1887 0.103893 10.2227 0.124023C10.2347 0.131195 10.2471 0.137781 10.2588 0.145508C10.2943 0.16892 10.3282 0.195041 10.3604 0.223633C10.3671 0.229608 10.3733 0.236012 10.3799 0.242188C10.3886 0.250394 10.3979 0.258015 10.4062 0.266602L15.7393 5.7207C15.7621 5.74409 15.7827 5.76938 15.8027 5.79492C15.8098 5.80388 15.8165 5.81303 15.8232 5.82227C15.8485 5.85696 15.8716 5.8929 15.8916 5.93066C15.8969 5.94056 15.9013 5.95082 15.9062 5.96094C15.9246 5.99886 15.9401 6.03796 15.9531 6.07812C15.9718 6.13582 15.9871 6.19564 15.9941 6.25781V6.27148C15.9972 6.30189 16 6.33244 16 6.36328V17.2725C16 18.7787 14.8058 20 13.333 20H2.66699C1.19423 20 0 18.7787 0 17.2725V2.72754C0 1.22131 1.19423 0 2.66699 0H9.77734ZM2.66699 1.81836C2.17607 1.81836 1.77734 2.22546 1.77734 2.72754V17.2725C1.77734 17.7745 2.17607 18.1816 2.66699 18.1816H13.333C13.8239 18.1816 14.2227 17.7745 14.2227 17.2725V7.27246H9.77734C9.3217 7.27224 8.94588 6.92169 8.89453 6.46973L8.88867 6.36328V1.81836H2.66699ZM11.5557 13.6367C12.0465 13.6368 12.4443 14.0439 12.4443 14.5459C12.4441 15.0119 12.1011 15.3957 11.6592 15.4482L11.5557 15.4541H4.44434C3.95361 15.454 3.5559 15.0477 3.55566 14.5459C3.55566 14.0797 3.89874 13.6951 4.34082 13.6426L4.44434 13.6367H11.5557ZM11.5557 10C12.0465 10.0001 12.4443 10.4071 12.4443 10.9092C12.4443 11.3754 12.1012 11.76 11.6592 11.8125L11.5557 11.8184H4.44434C3.9535 11.8183 3.55571 11.4112 3.55566 10.9092C3.55566 10.443 3.89874 10.0584 4.34082 10.0059L4.44434 10H11.5557ZM6.22266 6.36328C6.71329 6.36352 7.11119 6.77065 7.11133 7.27246C7.11133 7.73858 6.76812 8.12314 6.32617 8.17578L6.22266 8.18164H4.44434C3.95347 8.18158 3.55566 7.7745 3.55566 7.27246C3.55579 6.80637 3.89883 6.42262 4.34082 6.37012L4.44434 6.36328H6.22266ZM10.667 5.4541H12.9639L10.667 3.10449V5.4541Z"
                                fill="#D8D8D8" />
                            <path
                                d="M9.77734 0C9.89118 0 10.0005 0.0216428 10.1006 0.0615234L10.1182 0.0693359C10.1543 0.0846932 10.1887 0.103893 10.2227 0.124023C10.2347 0.131195 10.2471 0.137781 10.2588 0.145508C10.2943 0.16892 10.3282 0.195041 10.3604 0.223633C10.3671 0.229608 10.3733 0.236012 10.3799 0.242188C10.3886 0.250394 10.3979 0.258015 10.4062 0.266602L15.7393 5.7207C15.7621 5.74409 15.7827 5.76938 15.8027 5.79492C15.8098 5.80388 15.8165 5.81303 15.8232 5.82227C15.8485 5.85696 15.8716 5.8929 15.8916 5.93066C15.8969 5.94056 15.9013 5.95082 15.9062 5.96094C15.9246 5.99886 15.9401 6.03796 15.9531 6.07812C15.9718 6.13582 15.9871 6.19564 15.9941 6.25781V6.27148C15.9972 6.30189 16 6.33244 16 6.36328V17.2725C16 18.7787 14.8058 20 13.333 20H2.66699C1.19423 20 0 18.7787 0 17.2725V2.72754C0 1.22131 1.19423 0 2.66699 0H9.77734ZM2.66699 1.81836C2.17607 1.81836 1.77734 2.22546 1.77734 2.72754V17.2725C1.77734 17.7745 2.17607 18.1816 2.66699 18.1816H13.333C13.8239 18.1816 14.2227 17.7745 14.2227 17.2725V7.27246H9.77734C9.3217 7.27224 8.94588 6.92169 8.89453 6.46973L8.88867 6.36328V1.81836H2.66699ZM11.5557 13.6367C12.0465 13.6368 12.4443 14.0439 12.4443 14.5459C12.4441 15.0119 12.1011 15.3957 11.6592 15.4482L11.5557 15.4541H4.44434C3.95361 15.454 3.5559 15.0477 3.55566 14.5459C3.55566 14.0797 3.89874 13.6951 4.34082 13.6426L4.44434 13.6367H11.5557ZM11.5557 10C12.0465 10.0001 12.4443 10.4071 12.4443 10.9092C12.4443 11.3754 12.1012 11.76 11.6592 11.8125L11.5557 11.8184H4.44434C3.9535 11.8183 3.55571 11.4112 3.55566 10.9092C3.55566 10.443 3.89874 10.0584 4.34082 10.0059L4.44434 10H11.5557ZM6.22266 6.36328C6.71329 6.36352 7.11119 6.77065 7.11133 7.27246C7.11133 7.73858 6.76812 8.12314 6.32617 8.17578L6.22266 8.18164H4.44434C3.95347 8.18158 3.55566 7.7745 3.55566 7.27246C3.55579 6.80637 3.89883 6.42262 4.34082 6.37012L4.44434 6.36328H6.22266ZM10.667 5.4541H12.9639L10.667 3.10449V5.4541Z"
                                fill="#C9C9CD" />
                        </svg>

                        <!-- Input Field -->
                        <input v-model="inputShippingCode" type="text" placeholder="Ejemplo: 0000045487"
                            class="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent font-medium" />
                    </div>


                    <div class="inconbox-mobile-custom flex justify-center pt-10 sm:pt-0 sm:pl-5">
                        <button class="pointer" @click="handlerRequestShippingState">
                            <IconBox :height="75" :width="75" />
                        </button>
                    </div>

                </fieldset>
            </div>

            <div class="w-full lg:w-1/2" v-if="shippingStatesResult === undefined && resultMessage !== ''">
                <NotFoundResult :message="resultMessage" />
            </div>

            <div v-else-if="shippingStatesResult !== undefined" class="w-full lg:w-2/3">
                <DetailTrackingShipping :shipping-history="shippingStatesResult.result" :shipping-code="setShippingCode"
                    :info-shipping-state="shippingInfoState?.result || []" />
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


// Verificar si ya tenemos un token al cargar el componente
onMounted(async () => {


})


// POSIBLE MEJORA UNIFICANDO LOS COMPOSABLES DE CONSULTA DE ESTADO Y DE HISTORIAL CON UN "Promise.all"
const handlerRequestShippingState = async (): Promise<void> => {

    if (!inputShippingCode.value.trim()) {
        resultMessage.value = 'Debe ingresar el código de seguimiento'
        return;
        // early return
    }

    // Limpiar resultados anteriores
    resultMessage.value = ''
    shippingStatesResult.value = undefined
    shippingInfoState.value = undefined // Limpiar info anterior
    modalState.value = true;

    try {

        const getJWTAkeron = await getAuthAkeronJWT(apiClient, apiSecret)

        if (!getJWTAkeron) {
            modalState.value = false;
            throw new Error("No se pudo obtener el jwt del store!")
        }

        let statusShipping, infoShipping

        // Realizar ambas consultas en paralelo si hay token
        if(getJWTAkeron.result[0]?.api_token !== undefined) {
            const apiToken = getJWTAkeron.result[0]?.api_token
            const [historyRes, infoRes] = await Promise.all([
                getHistoryShipping(inputShippingCode.value, apiToken),
                getInfoState(inputShippingCode.value, apiToken)
            ])
            statusShipping = historyRes
            infoShipping = infoRes
        }

        if (!statusShipping?.status) {
            modalState.value = false;
            throw new Error(statusShipping?.msg);

        } else {
            const successResponse = statusShipping as TrackingSuccess
            shippingStatesResult.value = successResponse
            setShippingCode.value = inputShippingCode.value
            // Guardar info adicional del estado
            if (infoShipping?.status) {
                shippingInfoState.value = infoShipping as StateSuccess
            } else {
                shippingInfoState.value = undefined
            }
            modalState.value = false
            console.log(shippingStatesResult.value)
            console.log(shippingInfoState.value)
        }

    } catch (error) {
        modalState.value = false;
        error instanceof Error
            ? resultMessage.value = 'El código de envio ingresado no arrojó resultados'
            : resultMessage.value = 'Ocurrio un error al intentar buscar el envio'
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