import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import '@/assets/scss/main.scss'

const app = createApp(App)
  .use(store)
  .use(router)

// const addBottomShadow = el => {
//   console.log(el)
//   if (window.pageYOffset > 100) {
//     el.classList.add('header--shadow')
//   } else {
//     el.classList.remove('header--shadow')
//   }
// }

// app.directive('add-shadow', {
//   mounted(el) {
//     window.addEventListener('scroll', addBottomShadow(el))
//   },
//   beforeUnmount(el) {
//     window.removeEventListener('scroll', addBottomShadow(el))
//   },
// })

app.mount('#app')
