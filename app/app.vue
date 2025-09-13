<template>
  <div data-theme="light" class="font-montserrat">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">

useRouter().afterEach((to) => {
  if(!to.hash) {
    window.scrollTo(0, 0)
  }
})

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>


<style>

html {
  scroll-behavior: smooth;
}

html, body, #app {
  font-family: 'Montserrat', sans-serif !important;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.6s ease; /* Incrementa a 0.6s y añade ease */
  position: relative;
  z-index: 10; /* Asegura que la página en transición tenga un z-index adecuado */
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Añade esto para asegurar que el contenido de Home tenga tiempo de aparecer */
.page-enter-active {
  transition-delay: 0.1s; /* Pequeño retraso al entrar */
}

</style>