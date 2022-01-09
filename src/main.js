import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import BaseLink from "@/components/Base/Link.vue"
import BaseButton from "@/components/Base/Button.vue"
import BaseInput from "@/components/Base/Input.vue"

// import '@/assets/scss/main.scss'

const app = createApp(App)
  .use(store)
  .use(router)

app.component('BaseLink', BaseLink)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)

app.mount('#app')
