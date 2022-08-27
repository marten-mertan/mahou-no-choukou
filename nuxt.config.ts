import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,

    app: {
        baseURL: '/mahou-no-choukou/',
        buildAssetsDir: '/n/',

        /**
         * Метатеги, фавиконки и т.п
         * Для генерации фавиконок - https://realfavicongenerator.net/
         */

        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Mahou-no-choukou',
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Mahou-no-choukou description',
                },
                /* Favicons */
                {
                    name: 'msapplication-TileColor',
                    content: '#302939'
                },
                {
                    name: 'theme-color',
                    content: '#ffffff'
                },
            ],
            link: [
                /* Favicons */
                {rel: 'icon', type: 'image/x-icon', href: '/mahou-no-choukou/favicons/favicon.ico'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/mahou-no-choukou/favicons/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/mahou-no-choukou/favicons/favicon-16x16.png'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/mahou-no-choukou/favicons/apple-touch-icon.png'},
                {rel: 'manifest', href: '/mahou-no-choukou/favicons/site.webmanifest'},
                {rel: 'mask-icon', href: '/mahou-no-choukou/favicons/safari-pinned-tab.svg', color: '#ffd8d8'},
            ],
        },
    },

    /**
     * Подключаем файл с вендорными стилями и файл с общими стилями
     */

    css: [
        '~/assets/scss/vendors.scss',
        '~/assets/scss/common.scss'
    ],

    /**
     * Миксины и переменные доступны во всех компонентах и во всех scss файлах
     */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@import "@/assets/scss/shared/_variables.scss";',
                        '@import "@/assets/scss/shared/_mixins.scss";',
                    ].join(''),
                },
            },
        },
    },
})
