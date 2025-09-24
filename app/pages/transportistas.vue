<template>

    <div class="father-solutions">
        <div class="content-container">
            <TransportistasMain />
            <Requirements />
        </div>
    </div>

</template>


<script setup lang="ts">
import Requirements from '~/components/Transportistas/Requirements.vue';
import TransportistasMain from '~/components/Transportistas/TransportistasMain.vue';


useSeoMeta({
    title: 'Únete Como Transportista - Oportunidades Laborales en Logística',
    description: 'Buscamos transportistas con camioneta para última milla. Requisitos, beneficios y formulario de inscripción. ¡Forma parte de nuestro equipo!',
    keywords: 'trabajo transportista, chofer camioneta, trabajo logística, última milla, oportunidad laboral, repartidor',
    ogTitle: 'Trabaja con Nosotros - Transportistas',
    ogDescription: '¿Tienes camioneta? Únete a nuestro equipo de transportistas. Conoce los requisitos y postúlate.',
    ogImage: 'https://tudominio.com/images/transportistas-social.jpg',
    ogUrl: 'https://tudominio.com/transportistas',
    robots: 'index,follow'
})

useHead({
    link: [
        { rel: 'canonical', href: 'https://tudominio.com/transportistas' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Transportista - Logística de Última Milla",
                "description": "Buscamos transportistas con camioneta para unirse a nuestro equipo de logística",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Tu Empresa Logística"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "AR"
                    }
                },
                "employmentType": "CONTRACTOR",
                "validThrough": "2025-12-31"
            })
        }
    ]
})

</script>


<style scoped>
.father-solutions {
    background-image: url(/Transportistas-bg.png);
    background-size: cover;
    background-position: top left;
    /* Cambiado de 'top left' a 'top right' */
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
    padding-bottom: 5rem;
}

.content-container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
}
</style>