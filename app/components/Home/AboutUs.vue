<template>

    <div class="hero min-h-[1000px] bg-custom" style="background-image: url('/Nosotros.jpg');">

        <div class="hero-content text-neutral-content text-center w-full">

            <div class="w-full h-full flex flex-col justify-end items-center px-4 pb-0 pt-80 gap-8">

                <!-- Contenedor principal con backdrop -->
                <div
                    class="w-full max-w-5xl backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-2xl border border-gray-700 font-montserrat p-6 md:p-10 pt-12 md:pt-16 flex flex-col justify-between min-h-[400px] md:min-h-[430px]">

                    <!-- Contenido superior (vacío para empujar hacia abajo) -->
                    <div></div>

                    <!-- Contenido principal agrupado -->
                    <div class="flex flex-col">
                        <!-- Botón móvil (arriba) -->
                        <div class="sm:hidden mb-8 flex justify-center">
                            <NuxtLink to="/nosotros"
                                class="bg-[#F9BD6B] border border-[#F9BD6B] rounded-full p-3 px-9 w-60 h-16 text-[#efefef] font-medium cursor-pointer hover:bg-[#efefef] hover:text-[#1B2329] transition-all duration-300 flex items-center justify-center">
                                CONOCENOS MÁS
                            </NuxtLink>
                        </div>

                        <!-- Título -->
                        <h1 class="hidden sm:block mb-8 text-3xl md:text-5xl font-bold">Nosotros</h1>

                        <!-- Descripción -->
                        <p class="mb-8 text-xl md:text-base max-w-[80%] mx-auto text-white sm:py-2">
                            En Pick&Log ofrecemos un servicio personalizado para cada cliente, apoyándonos en el
                            uso de tecnología avanzada dentro del sector logístico.
                        </p>

                        <!-- Subtítulo -->
                        <h2 class="text-[#F9BD6B] text-sm md:text-base mb-0 font-bold tracking-widest sm:pb-6">
                            ATENCIÓN REAL. DE PERSONA A PERSONA.
                        </h2>
                    </div>

                </div>

                <!-- Botón desktop (fuera del contenedor) -->
                <div class="hidden sm:flex justify-center">
                    <NuxtLink to="/nosotros"
                        class="bg-[#F9BD6B] border border-[#F9BD6B] rounded-full p-3 px-9 w-60 h-16 text-[#efefef] font-medium cursor-pointer hover:bg-[#efefef] hover:text-[#1B2329] transition-all duration-300 flex items-center justify-center">
                        CONOCENOS MÁS
                    </NuxtLink>
                </div>

            </div>
        </div>
    </div>
    
</template>


<script setup lang="ts">


</script>


<style scoped>
.bg-custom {
    position: relative;
    z-index: 5;
}
</style>