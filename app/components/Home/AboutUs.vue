<template>

    <div class="hero min-h-[1000px] bg-custom" style="background-image: url('/Nosotros.jpg');">

        <div class="hero-content text-neutral-content text-center w-full md:w-2/3">
            <div class="max-w-md min-h-screen w-full flex flex-col justify-end pb-10 relative
            pt-20 sm:pt-28 md:pt-32 lg:pt-36">

                <div
                    class="mb-6 px-6 md:px-10 mt-auto pt-36 flex flex-col gap-2 w-full md:w-[1033px] md:h-[408px] md:absolute md:top-[391px] md:left-1/2 md:-translate-x-1/2 backdrop-filter backdrop-blur-lg  bg-opacity-20 rounded-2xl border border-gray-700 font-montserrat">
                    <h1 class="mb-5 text-3xl md:text-5xl font-bold">Nosotros</h1>
                    <p class="mb-8 text-sm md:text-lg max-w-[80%] mx-auto text-white">
                        En Pick&Log ofrecemos un servicio personalizado para cada cliente, apoyándonos en el
                        uso de tecnología avanzada dentro del sector logístico.
                    </p>
                    <h2 class="text-[#F9BD6B] text-sm md:text-base mb-10 font-bold tracking-widest">ATENCIÓN REAL. DE
                        PERSONA A PERSONA.</h2>
                </div>

                <div>
                    <button
                        class="bg-[#F9BD6B] border border-[#F9BD6B] rounded-full p-3 mt-3 px-9 w-60 h-16 text-[#efefef] font-medium cursor-pointer hover:bg-[#efefef] hover:text-[#1B2329] transition-all duration-300">
                        CONOCENOS MÁS
                    </button>
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