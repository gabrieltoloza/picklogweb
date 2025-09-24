import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/css/main.css"],
    nitro: {
        compatibilityDate: '2025-09-12'
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
            appear: true
        },
        baseURL: '/picklogweb/',
        head: {
            title: 'Logística Empresarial - Última Milla | Tu Empresa',
            htmlAttrs: {
                lang: 'es-AR', // Argentina específico
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Empresa de logística especializada en última milla. Soluciones WMS, TMS personalizadas. No hay dos empresas iguales, nos adaptamos a tu negocio.'
                },
                { name: 'keywords', content: 'logística, última milla, WMS, TMS, distribución, Argentina, logística empresarial' },
                { name: 'author', content: 'Tu Empresa Logística' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Tu Empresa Logística' },
                { property: 'og:locale', content: 'es_AR' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'robots', content: 'index,follow' },
                // Schema.org básico
                { name: 'geo.region', content: 'AR' },
                { name: 'geo.position', content: '-34.6118;-58.3960' }, // Buenos Aires
                { name: 'ICBM', content: '-34.6118, -58.3960' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'canonical', href: 'https://tudominio.com' }
            ]
        }
    }
});



// DEFINIR BIEN LAS ESTRATEGIAS DE SEO Y POSICIONAMIENTO CON MAJO Y COMERCIAL
// DEFINIR BIEN LAS ESTRATEGIAS DE SEO Y POSICIONAMIENTO CON MAJO Y COMERCIAL
// DEFINIR BIEN LAS ESTRATEGIAS DE SEO Y POSICIONAMIENTO CON MAJO Y COMERCIAL