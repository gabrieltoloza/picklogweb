<template>
    <div class="father-solutions min-h-[600px] sm:min-h-[700px] md:min-h-[1000px] lg:min-h-[900px]">
        <div class="content-container">
            <MainSolutions />
            <DropdownSolutions />
        </div>
    </div>
</template>

<script setup lang="ts">

import DropdownSolutions from '~/components/Soluciones/DropdownSolutions.vue';
import MainSolutions from '~/components/Soluciones/MainSolutions.vue';


useSeoMeta({
    title: 'Soluciones Tecnológicas WMS y TMS - Logística de Última Milla',
    description: 'Tecnología avanzada para logística: WMS, TMS, tomador de pedidos personalizado y soporte IT. Soluciones integradas para tu operativa de última milla.',
    keywords: 'WMS, TMS, sistema gestión almacén, sistema gestión transporte, tomador pedidos, soporte IT, integración tienda online',
    ogTitle: 'Soluciones WMS y TMS - Tecnología Logística',
    ogDescription: 'Descubre nuestra tecnología: WMS, TMS, tomador de pedidos y soporte IT para tu operativa logística.',
    ogImage: 'https://tudominio.com/images/soluciones-social.jpg',
    ogUrl: 'https://tudominio.com/soluciones',
    robots: 'index,follow'
})


useHead({
    link: [
        { rel: 'canonical', href: 'https://tudominio.com/soluciones' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Soluciones Tecnológicas Logísticas",
                "description": "Suite completa de soluciones WMS, TMS y soporte IT",
                "brand": {
                    "@type": "Organization",
                    "name": "Pick & Log"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31"
                }
            })
        }
    ]
})

</script>


<style scoped>
.father-solutions {
    background-image: url(/Soluciones-bg.png);
    background-size: cover;
    background-position: top -200px left;
    /* Cambiado de 'top left' a 'top right' */
    background-repeat: no-repeat;
    min-height: 100%;
    height: auto;
    width: 100%;
    position: relative;
    z-index: 2;
}


.content-container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
}

@media (max-width: 639px) {
    .father-solutions {
        background-image: url('/bg_solutions_mobile.png');
        background-position: top left;
        min-height: 1200px;
    }

    .no-padding-mobile {
        padding-top: 0 !important;
    }
}
</style>