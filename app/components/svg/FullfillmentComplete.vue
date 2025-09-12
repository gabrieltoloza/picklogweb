<template>
  <div class="relative">
    <!-- Componente de fondo -->
    <Fullfilment1 class="w-[79px] h-[80px]" />
    
    <!-- Componente de contenido centrado -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Fullfilment2 class="w-[30px] h-[27px]" />
    </div>
  </div>
</template>


<script setup lang="ts">

import Fullfilment1 from './Fullfilment1.vue';
import Fullfilment2 from './Fullfilment2.vue';

</script>