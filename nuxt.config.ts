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
        baseURL: '/picklogweb/'
    }
});