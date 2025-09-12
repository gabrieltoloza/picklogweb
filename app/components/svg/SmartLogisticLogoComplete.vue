<template>
    <div class="relative">
        <!-- Componente de fondo circular -->
        <SmartLogistic1 class="w-[79px] h-[80px]" />

        <!-- Componente de contenido centrado (ícono de tecnología/datos) -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SmartLogistic2 class="w-[28px] h-[27px]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SmartLogistic1 from './SmartLogistic1.vue';
import SmartLogistic2 from './SmartLogistic2.vue';


// Importar los componentes SVG directamente desde la carpeta app/components/svg


</script>