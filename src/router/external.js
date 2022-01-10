import Home from '../views/Home.vue'

const externalRoutes = [
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
  }
]

export default externalRoutes