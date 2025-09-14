<template>
    <div class="w-full min-h-[750px] bg-transparent text-white flex flex-col justify-start items-center pb-1 gap-20">

        <div class="pr-96">
            <span class="text-left block text-xl font-semibold pr-[580px]">REQUISITOS:</span>
        </div>

        <div class="flex flex-col gap-7 text-lg tracking-wide">
            <div class="flex gap-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>Tener 21 años o más.</p>
            </div>
            <div class="flex gap-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>Tener una camioneta con una capacidad 600 a 2000 kg.</p>
            </div>
            <div class="flex gap-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>Cumplor con todos los requisitos legales como VTV, Cédula Verde, Licencia de Conducir, etc.</p>
            </div>
            <div class="flex gap-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H18M10 2L10 18" stroke="#F9BD6B" stroke-width="3" stroke-linecap="round" />
                </svg>
                <p>Comprometerse a brindar un servicio de calidad.</p>
            </div>
        </div>

        <div class="mt-7 ml-50 self-start">
            <NuxtLink to="/transportistas-formulario"
                class="btn border-0 bg-[#F9BD6B] text-lg rounded-full p-3 px-9 w-60 h-16 ml-[360px] font-normal text-white hover:bg-transparent hover:text-[#F9BD6B] transition-all duration-300">
                POSTULARME
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>