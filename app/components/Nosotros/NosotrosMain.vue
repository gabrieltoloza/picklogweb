<template>
    <section class="pt-20 bg-transparent text-white min-h-[600px] font-montserrat">
        <div class="container px-4 ml-30 flex flex-row">

            <!-- Primer div -->
            <div class="max-w-4xl mx-auto text-center w-1/2 justify-start flex flex-col items-center gap-10">
                <div class="pr-80">
                    <Dactilar />
                </div>
                <h1 class="text-5xl font-bold mb-6 pt-10 pr-44 text-[#F9BD6B]">Nosotros</h1>
                <div class="text-xl mb-8 w-[400px] flex flex-col items-start text-start">
                    <p> Somos una pyme de logística con mas de 15 años de experiencia en el
                        mercado.
                    </p>
                    <p>
                        En constante crecimiento..
                    </p>
                </div>
            </div>

            <!-- Segundo div -->
            <div class="flex flex-col gap-5 w-1/2 items-center justify-center pt-32">
                <div class="estadistica-box flex gap-10 p-4 px-10 border border-white rounded-2xl bg-[#1B2329]">
                    <h3 class="text-3xl text-[#F9BD6B] font-semibold">+2.000</h3>
                    <p>Clientes</p>
                </div>
                <div class="estadistica-box flex gap-10 p-4  border border-white rounded-2xl bg-[#1B2329]">
                    <h3 class="text-3xl text-[#F9BD6B] font-semibold">+20</h3>
                    <p>Camionetas</p>
                </div>
                <div class="estadistica-box flex gap-10 p-4 px-12 border border-white rounded-2xl bg-[#1B2329]">
                    <h3 class="text-3xl text-[#F9BD6B] font-semibold">+70</h3>
                    <p>Empleados</p>
                </div>
            </div>
            
        </div>
    </section>
</template>



<script setup lang="ts">

import Dactilar from '../svg/Dactilar.vue';






</script>



<style scoped>
.estadistica-box {
    position: relative;
    background-clip: padding-box;
    border: none;
    padding: 1rem 2.5rem; /* Aumentamos el padding para compensar la falta de borde */
}

.estadistica-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    border: 2px solid transparent;
    background: linear-gradient(to bottom, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0) 10%, 
                rgba(255, 255, 255, 0.8) 70%) 
                border-box;
    -webkit-mask: 
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0) border-box;
    mask: 
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}
</style>