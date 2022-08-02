import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
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
                {rel: 'icon', type: 'image/x-icon', href: '/static/favicons/favicon.ico'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicons/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicons/favicon-16x16.png'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/static/favicons/apple-touch-icon.png'},
                {rel: 'manifest', href: '/static/favicons/site.webmanifest'},
                {rel: 'mask-icon', href: '/static/favicons/safari-pinned-tab.svg', color: '#ffd8d8'},
            ],
        },

        /**
         * Подключаем файл с вендорными стилями и файл с общими стилями
         */
    },

    css: [
        '~/assets/scss/vendors.scss',
        '~/assets/scss/common.scss'
    ],

    /**
     * Миксины и переменные доступны во всех компонентам и во всех scss файлах
     */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/shared/_variables.scss"; @import "@/assets/scss/shared/_mixins.scss";',
                },
            },
        },
    },
    target: 'static',
    router: {
        base: '/mahou-no-choukou/'
    }
})
