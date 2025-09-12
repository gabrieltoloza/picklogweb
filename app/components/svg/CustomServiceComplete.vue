<template>
  <div class="relative">
    <!-- Componente de fondo -->
    <CustomService1 class="w-[79px] h-[80px]" />
    
    <!-- Componente de contenido centrado -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CustomService2 class="w-[28px] h-[32px]" />
    </div>
  </div>
</template>

<script setup lang="ts">

import CustomService1 from './CustomService1.vue';
import CustomService2 from './CustomService2.vue';

</script>