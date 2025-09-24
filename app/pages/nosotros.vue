<template>

    <div class="bg-[#1B2329]">
        <NosotrosMain />
        <TimeLine />
        <Leyend />
    </div>


</template>


<script setup lang="ts">

import Leyend from '~/components/Nosotros/Leyend.vue';
import TimeLine from '~/components/Nosotros/TimeLine.vue';


useSeoMeta({
    title: 'Sobre Nosotros - Historia y Filosofía de Nuestra Logística',
    description: 'Conoce nuestra trayectoria en logística empresarial. Timeline de hitos importantes, filosofía empresarial y compromiso con nuestros clientes.',
    keywords: 'empresa logística, historia logística, filosofía empresarial, trayectoria logística Argentina',
    ogTitle: 'Nuestra Historia - Empresa de Logística',
    ogDescription: 'Descubre la historia y filosofía de nuestra empresa de logística especializada en última milla.',
    ogImage: 'https://tudominio.com/images/nosotros-social.jpg',
    ogUrl: 'https://tudominio.com/nosotros',
    robots: 'index,follow'
})

useHead({
    link: [
        { rel: 'canonical', href: 'https://tudominio.com/nosotros' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "mainEntity": {
                    "@type": "Organization",
                    "name": "Tu Empresa Logística",
                    "foundingDate": "2015", // Ajusta según tu timeline
                    "description": "Empresa especializada en logística de última milla con enfoque personalizado"
                }
            })
        }
    ]
})

</script>

<style scoped></style>