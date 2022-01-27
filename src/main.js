import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

import BaseLink from "@/components/Base/Link.vue"
import BaseButton from "@/components/Base/Button.vue"
import BaseInput from "@/components/Base/Input.vue"

// import '@/assets/scss/main.scss'

const i18n = createI18n({
  locale: 'ru',
  messages: {
    en: { login: 'Login' },
    ru: { login: 'Войти' }
  }
})


const app = createApp(App)
  .use(store)
  .use(router)

app.use(i18n)

app.component('BaseLink', BaseLink)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)

app.mount('#app')
