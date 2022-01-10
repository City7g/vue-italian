import Home from '../views/Home.vue'

const externalRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Main page'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About page'
    },
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/media',
    name: 'Media',
    meta: {
      title: 'Media page'
    },
    component: () =>
      import(/* webpackChunkName: "Media" */ '../views/Media.vue'),
  },
  {
    path: '/materials',
    name: 'Materials',
    meta: {
      title: 'Materials'
    },
    component: () =>
      import(/* webpackChunkName: "Materials" */ '../views/Materials.vue'),
  },
  {
    path: '/presentation',
    name: 'Presentation',
    meta: {
      title: 'Presentation'
    },
    component: () =>
      import(/* webpackChunkName: "Presentation" */ '../views/Presentation.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: 'Blog'
    },
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: 'Test'
    },
    component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue'),
  },
  {
    path: '/hello',
    name: 'Hello',
    meta: {
      title: 'Hello'
    },
    component: () =>
      import(/* webpackChunkName: "Hello" */ '../views/Hello.vue'),
  },
  {
    path: '/start',
    name: 'Start',
    meta: {
      title: 'Start'
    },
    component: () =>
      import(/* webpackChunkName: "Start" */ '../views/Start.vue'),
  },
  {
    path: '/touches',
    name: 'Touches',
    meta: {
      title: 'Touches'
    },
    component: () =>
      import(/* webpackChunkName: "Start" */ '../views/Touches.vue'),
  },
  {
    path: '/video/:id',
    name: 'Video',
    meta: {
      title: 'Video'
    },
    component: () =>
      import(/* webpackChunkName: "Video" */ '../views/Video.vue'),
  },
  {
    path: '/navigator',
    name: 'Navigator',
    meta: {
      title: 'Navigator'
    },
    component: () => import('../views/Navigator.vue'),
  },
  {
    path: '/ui-kit',
    name: 'UIKit',
    meta: {
      title: 'UIKit'
    },
    component: () => import('../views/UIKit.vue'),
  }
]

export default externalRoutes