<template>
    <div class="min-h-[400px] bg-transparent flex justify-between p-16 px-48 gap-4">
        <!-- Item 1 -->
        <div class="flex-1 p-6 bg-transparent">
            <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                <OkLogo />
                <span class="ml-4">2009</span>
            </div>
            <div class="text-white flex">
                <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1">
                    <p class="tracking-widest">100 Clientes,</p>
                    <p class="tracking-widest">1 Camioneta,</p>
                    <p class="tracking-widest">5 Empleados,</p>
                    <p class="tracking-widest">500mts²</p>
                </span>
            </div>
        </div>
        
        <!-- Item 2 -->
        <div class="flex-1 p-6 bg-transparent">
            <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                <OkLogo />
                <span class="ml-4">2014</span>
            </div>
            <div class="text-white">
                <span class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 text-balance">
                    <p class="tracking-widest">Mudanza a Panama 3340,</p>
                    <p class="tracking-widest">Munro. Duplicamos a</p>
                    <p class="tracking-widest">1000mts²</p>
                </span>
            </div>
        </div>
        
        <!-- Item 3 -->
        <div class="flex-1 p-6 bg-transparent">
            <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                <OkLogo />
                <span class="ml-4">2020</span>
            </div>
            <div class="text-white">
                <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide">
                    +40 Empleados
                </p>
            </div>
        </div>
        
        <!-- Item 4 -->
        <div class="flex-1 p-6 bg-transparent">
            <div class="flex items-center gap-2 mb-4 text-white text-2xl font-medium">
                <OkLogo />
                <span class="ml-4">2024</span>
            </div>
            <div class="text-white">
                <p class="whitespace-pre-line text-sm pt-10 pl-13 flex flex-col gap-1 tracking-wide text-balance">
                    Ampliación de tamaño, nuevamente 
                    duplicamos a 2000mts².
                    Nuevo deposito, Nuevas oficinas
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import OkLogo from '../svg/OkLogo.vue';


</script>

<style scoped></style>