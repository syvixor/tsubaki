// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@storyblok/nuxt"],
    devtools: { enabled: false },
    future: { compatibilityVersion: 4 },
    css: ["~/assets/css/main.css"],
    storyblok: { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }
});