import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Home from '../views/Home.vue'

import studentRoutes from './student'

NProgress.configure({ showSpinner: false })

const main = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/media',
    name: 'Media',
    component: () =>
      import(/* webpackChunkName: "Media" */ '../views/Media.vue'),
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () =>
      import(/* webpackChunkName: "Materials" */ '../views/Materials.vue'),
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: () =>
      import(/* webpackChunkName: "Presentation" */ '../views/Presentation.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue'),
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () =>
      import(/* webpackChunkName: "Hello" */ '../views/Hello.vue'),
  },
  {
    path: '/start',
    name: 'Start',
    component: () =>
      import(/* webpackChunkName: "Start" */ '../views/Start.vue'),
  },
  {
    path: '/touches',
    name: 'Touches',
    component: () =>
      import(/* webpackChunkName: "Start" */ '../views/Touches.vue'),
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "Video" */ '../views/Video.vue'),
  },
  
  {
    path: '/navigator',
    name: 'Navigator',
    component: () => import('../views/Navigator.vue'),
  },
  {
    path: '/ui-kit',
    name: 'UIKit',
    component: () => import('../views/UIKit.vue'),
  },
]

const routes = main.concat(studentRoutes)

routes.push({
  path: '/error',
  name: 'Error',
  component: () => import('../views/Error.vue'),
})

routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/error',
})

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
