import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import externalRoutes from './external'
import studentRoutes from './student'

NProgress.configure({ showSpinner: false })

const routes = [
  ...externalRoutes,
  ...studentRoutes,
  {
    path: '/error',
    name: 'Error',
    meta: {
      title: 'Error'
    },
    component: () => import('../views/Error.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/#message=login') 
  } else {
    next() 
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router