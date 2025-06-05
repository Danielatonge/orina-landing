import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import en from './i18n/en.js'
import ru from './i18n/ru.js'

const app = createApp(App)

// Create VueI18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: 'ru', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        ru
    }, // set locale messages
    globalInjection: true, // enable global injection
    silentTranslationWarn: true, // disable warnings for missing translations
    missingWarn: false, // disable warnings for missing translations
    fallbackWarn: false, // disable warnings for fallback translations
    silentFallbackWarn: true, // disable warnings for fallback translations
    allowComposition: true, // enable composition API
    sync: true, // enable sync mode
    warnHtmlMessage: false // disable HTML message warning
})

// Ensure i18n is properly initialized
app.use(i18n)
app.use(router)

// Mount the app only after i18n is initialized
app.mount('#app')
