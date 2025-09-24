<template>

    <div>
        <MainContent />
        <PersonPhoto />
        <SloganCompany />
        <BussinesFlow />
        <Brands />
        <AboutUs />
    </div>

</template>



<script setup lang="ts">

import AboutUs from '~/components/Home/AboutUs.vue';
import Brands from '~/components/Home/Brands.vue';
import BussinesFlow from '~/components/Home/BussinesFlow.vue';
import MainContent from '~/components/Home/MainContent.vue';
import PersonPhoto from '~/components/Home/PersonPhoto.vue';
import SloganCompany from '~/components/Home/SloganCompany.vue';



useSeoMeta({
    title: 'Logística Empresarial Personalizada - No hay dos empresas iguales',
    description: 'Soluciones de logística de última milla adaptadas a tu empresa. WMS, TMS y operaciones integradas. Nos adaptamos a tu negocio, no al revés.',
    keywords: 'logística personalizada, última milla, WMS, TMS, distribución empresarial, Argentina',
    ogTitle: 'Logística Empresarial - No hay dos empresas iguales',
    ogDescription: 'Soluciones de logística adaptadas a cada empresa. Tecnología WMS, TMS y operaciones integradas.',
    ogImage: 'https://tudominio.com/images/home-social.jpg',
    ogUrl: 'https://tudominio.com',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Logística Personalizada - Tu Empresa',
    twitterDescription: 'No hay dos empresas iguales. Adaptamos nuestras soluciones logísticas a tu negocio.',
    robots: 'index,follow'
});

useHead({
    link: [
        { rel: 'canonical', href: 'https://tudominio.com' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Logística de Última Milla",
                "provider": {
                    "@type": "Organization",
                    "name": "Pick & Log"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Logística",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "WMS - Sistema de Gestión de Almacén"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "TMS - Sistema de Gestión de Transporte"
                            }
                        }
                    ]
                }
            })
        }
    ]
});

</script>


<style scoped></style>