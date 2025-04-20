import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'

const app = createApp(App)

// Ensure i18n is properly initialized
app.use(i18n, {
    globalInstall: true
})

// Mount the app only after i18n is initialized
app.mount('#app')
