import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Home from '../views/Home.vue'

NProgress.configure({ showSpinner: false })

const routes = [
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
    path: '/video/:id',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "Video" */ '../views/Video.vue'),
  },
  // Student
  {
    path: '/home',
    name: 'StudentHome',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentHome" */ '../views/Student/Home.vue'),
  },
  {
    path: '/level',
    name: 'StudentLevel',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentLevel" */ '../views/Student/Level.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  },
  {
    path: '/navigator',
    name: 'Navigator',
    component: () => import('../views/Navigator.vue'),
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

router.afterEach(() => {
  NProgress.done()
})

export default router
