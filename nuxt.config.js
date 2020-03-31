export default {
    mode: 'universal',
    router: {
        base: '/acnh-deserted-islands/'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'ACNH Deserted Island Tracker',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/acnh-deserted-islands/favicon.ico'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@/assets/scss/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/eventBus.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        'nuxt-buefy'
    ],
    buefy: {
        defaultIconPack: 'mdi'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
