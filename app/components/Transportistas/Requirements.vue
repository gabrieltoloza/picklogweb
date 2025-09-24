<template>
    <div
        class="w-full bg-transparent text-white flex flex-col justify-start items-center gap-20 pb-10 sm:pb-20 md:pb-32">

        <div class="sm:pr-96">
            <span
                class="requirements-custom text-left block text-xl font-semibold pr-60 sm:pr-[580px]">REQUISITOS:</span>
        </div>

        <div class="flex flex-col gap-7 text-lg tracking-wide px-10 sm:px-0">
            <div class="flex gap-5">
                <svg class="flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p class="text-sm sm:text-base">Tener 21 años o más.</p>
            </div>
            <div class="flex gap-5">
                <svg class="flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p class="text-sm">Tener una camioneta con una capacidad 600 a 2000 kg.</p>
            </div>
            <div class="flex gap-5">
                <svg class="flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p class="text-sm">Cumplir con todos los requisitos legales como VTV, Cédula Verde, Licencia de
                    Conducir, etc.</p>
            </div>
            <div class="flex gap-5">
                <svg class="flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p class="text-sm">Comprometerse a brindar un servicio de calidad.</p>
            </div>
        </div>

        <div class="button-mobile-custom sm:mt-7 ml-25 sm:ml-50 self-start">
            <NuxtLink to="/transportistas-formulario"
                class="btn border-0 bg-[#F9BD6B] text-lg rounded-full p-3 px-9 w-60 h-16 sm:ml-[360px] font-normal text-white hover:bg-transparent hover:text-[#F9BD6B] transition-all duration-300">
                POSTULARME
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

@media (max-width: 360px) {

    .requirements-custom {
        padding-right: 130px;
    }

    .button-mobile-custom {
        margin-left: 50px;
    }

}

</style>