<template>
    <div class="father-solutions min-h-[600px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1200px] xl:min-h-[2000px]">
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
    background-position: top left;
    background-repeat: no-repeat;
    background-attachment: local;
    min-height: 100vh;
    height: auto;
    width: 100%;
    position: relative;
    z-index: 2;
    padding-bottom: 200px;
}

.content-container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: inherit;
    padding-bottom: 150px;
}

@media (max-width: 639px) {
    .father-solutions {
        background-image: url('/bg_solutions_mobile.png');
        background-position: top left;
        background-attachment: fixed; /* Cambiado de local a fixed */
        background-size: cover;
        min-height: 100vh;
        padding-bottom: 300px;
    }
    
    .content-container {
        padding-bottom: 150px;
    }

    .no-padding-mobile {
        padding-top: 0 !important;
    }
}

/* Media queries para diferentes tamaños de pantalla */
@media (min-width: 640px) and (max-width: 767px) {
    .father-solutions {
        background-attachment: fixed; /* Agregado para tablets pequeñas */
        padding-bottom: 250px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .father-solutions {
        padding-bottom: 220px;
    }
}

@media (min-width: 1024px) {
    .father-solutions {
        padding-bottom: 200px;
    }
}

</style>