<template>
    <footer
        class="bg-custom w-full min-h-[450px] md:h-[450px] mx-auto border border-[#2d2d2d] bg-[#1d1d1d] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white font-montserrat">

        <!-- Container principal - vertical en mobile, horizontal en desktop -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-12 sm:gap-8 md:gap-4 h-full py-5 sm:py-20 md:py-20 lg:py-20 xl:py-20 lg:px-20">
            

            <!-- Sección Horario -->
            <nav class="flex flex-col items-center md:items-start w-full md:w-auto">
                <h6 class="font-medium text-xl mb-4">Horario de atención:</h6>
                <p class="text-base">9 a 18hs</p>
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
                        <a class="link link-hover text-sm md:text-base">info@picklog.com.ar</a>
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
                        <a class="link link-hover text-sm md:text-base">Panamá 3340, Munro</a>
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
                        <a class="link link-hover text-sm md:text-base">+54 9 11 2394-6455</a>
                    </div>
                </div>
            </nav>


            <!-- Sección Newsletter -->
            <form class="flex flex-col items-center md:items-start w-full md:w-auto">
                <h6 class="font-medium text-xl mb-4">Newsletter</h6>

                <fieldset class="w-full max-w-[400px] mb-6">
                    <div class="flex w-full">
                        <input type="text" placeholder="Subscribite a nuestro Mailing"
                            class="flex-grow p-3 pl-6 text-xs bg-[#3f4143] rounded-l-full border border-[#3f4143] border-r-0 placeholder-gray-200 focus:placeholder-transparent" />
                        <button
                            class="px-4 py-3 bg-[#F9BD6B] rounded-r-xl border border-[#3f4143] border-l-0 text-gray-700 font-medium whitespace-nowrap">Subscribite</button>
                    </div>
                </fieldset>

                <!-- Redes Sociales -->
                <div class="flex gap-4 justify-center md:justify-start">
                    <!-- Twitter logo -->
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F9BD6B" />
                        <path
                            d="M31 11.0101C31 11.0101 28.982 12.2021 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C29 15.2321 28.972 14.9541 28.92 14.6801C29.94 13.6741 31 11.0101 31 11.0101Z"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <!-- Instagram logo -->
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F9BD6B" />
                        <path
                            d="M31 11.0101C31 11.0101 28.982 12.2021 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C29 15.2321 28.972 14.9541 28.92 14.6801C29.94 13.6741 31 11.0101 31 11.0101Z"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <!-- Facebook logo -->
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F9BD6B" />
                        <path
                            d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </form>
        </div>
    </footer>

    
    <footer class="bg-custom w-full h-[185px] mx-auto border-t-2 bg-[#0f0f0f] text-white flex justify-center pt-5">
        <p class="text-sm">Ⓒ 2023 All rights reserved. </p>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg-custom {
    position: relative;
    z-index: 5;
}
</style>