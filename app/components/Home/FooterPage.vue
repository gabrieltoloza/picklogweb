<template>
    <footer
        class="bg-custom w-full min-h-[450px] md:h-[450px] mx-auto border border-[#2d2d2d] bg-[#1d1d1d] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white font-montserrat">

        <!-- Container principal - vertical en mobile, horizontal en desktop -->
        <div
            class="flex flex-col md:flex-row md:justify-around md:items-start gap-12 sm:gap-8 md:gap-4 h-full py-5 sm:py-20 md:py-20 lg:py-20 xl:py-20 lg:px-20">


            <!-- Sección Horario -->
            <nav class="flex flex-col items-center md:items-start w-full md:w-auto">
                <h6 class="font-medium text-xl mb-4">Horario de atención</h6>
                <div class="flex flex-row gap-3">
                    <Contact />
                    <p class="text-base">9 a 18hs</p>
                </div>
            </nav>


            <!-- Sección Contacto -->
            <nav class="flex flex-col items-center md:items-start w-full md:w-auto">
                <h6 class="font-medium text-xl mb-4">Contacto</h6>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-2 items-center">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_209_118)">
                                <path
                                    d="M15.1663 2.66663H1.83301V13.3333H15.1663V2.66663ZM13.833 5.33329L8.49967 8.66663L3.16634 5.33329V3.99996L8.49967 7.33329L13.833 3.99996V5.33329Z"
                                    fill="#F9BD6B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_209_118">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <a class="link link-hover text-sm md:text-base"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@picklog.com.ar" target="_blank"
                            rel="noopener noreferrer" title="Enviar correo con Gmail">info@picklog.com.ar</a>
                    </div>
                    <div class="flex gap-2 items-center">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_209_121)">
                                <path
                                    d="M8.49967 5.33337C5.91967 5.33337 3.83301 7.42004 3.83301 10C3.83301 13.5 8.49967 18.6667 8.49967 18.6667C8.49967 18.6667 13.1663 13.5 13.1663 10C13.1663 7.42004 11.0797 5.33337 8.49967 5.33337ZM8.49967 11.6667C7.57967 11.6667 6.83301 10.92 6.83301 10C6.83301 9.08004 7.57967 8.33337 8.49967 8.33337C9.41967 8.33337 10.1663 9.08004 10.1663 10C10.1663 10.92 9.41967 11.6667 8.49967 11.6667Z"
                                    fill="#F9BD6B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_209_121">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5 4)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <a class="link link-hover text-sm md:text-base"
                            href="https://www.google.com/maps/search/?api=1&query=Panamá+3340,+Munro" target="_blank"
                            rel="noopener noreferrer" title="Ver en Google Maps">
                            Panamá 3340, Munro
                        </a>
                    </div>
                    <div class="flex gap-2 items-center">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_209_125)">
                                <path
                                    d="M14.4999 10.3067L10.9866 9.9L9.3066 11.58C7.41994 10.62 5.87327 9.08 4.91327 7.18667L6.59994 5.5L6.19327 2H2.51994C2.13327 8.78667 7.71327 14.3667 14.4999 13.98V10.3067Z"
                                    fill="#F9BD6B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_209_125">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span class="text-sm md:text-base">+54 9 11 2394-6455</span>
                    </div>
                </div>

                <!-- Redes Sociales -->
                <div class="flex gap-4 justify-center md:justify-start py-5 pt-15 sm:pt-10">

                    <!-- Instagram logo -->
                    <a href="https://www.instagram.com/picklogg/" target="_blank" rel="noopener noreferrer"
                        title="Ir a Instagram" aria-label="Instagram">
                        <Instagram />
                    </a>

                    <!-- Whatsapp logo -->
                    <a href="https://wa.me/541123946455" target="_blank" rel="noopener noreferrer"
                        title="Enviar mensaje por WhatsApp" aria-label="WhatsApp">
                        <Whatsapp />
                    </a>

                </div>
            </nav>




        </div>
    </footer>


    <footer class="bg-custom w-full h-[185px] mx-auto border-t-2 bg-[#0f0f0f] text-white flex justify-center pt-5">
        <p class="text-sm">Ⓒ {{ new Date().getUTCFullYear() }} Pick & Log - Derechos reservados. </p>
    </footer>
</template>



<script setup lang="ts">

import Contact from '../svg/Contact.vue';
import Instagram from '../svg/Instagram.vue';
import Whatsapp from '../svg/Whatsapp.vue';


</script>

<style scoped>
.bg-custom {
    position: relative;
    z-index: 5;
}
</style>