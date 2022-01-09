const studentRoutes = [
  {
    path: '/home',
    name: 'StudentHome',
    meta: {
      layout: 'student',
      requiresAuth: true
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
    path: '/all-teachers',
    name: 'AllTeachers',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "AllTeachers" */ '../views/Student/AllTeachers.vue'),
  },
  {
    path: '/packages/:id',
    name: 'StudentPackages',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentPackages" */ '../views/Student/StudentPackages.vue'),
  },
  {
    path: '/buy-packages/:id',
    name: 'BuyPackage',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "BuyPackage" */ '../views/Student/BuyPackage.vue'),
  },
  {
    path: '/calendar',
    name: 'StudentCalendar',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentCalendar" */ '../views/Student/Calendar.vue'),
  },
  {
    path: '/settings',
    name: 'StudentSettings',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentSettings" */ '../views/Student/Settings.vue'),
  },
  {
    path: '/faq',
    name: 'StudentFAQ',
    meta: {
      layout: 'student'
    },
    component: () =>
      import(/* webpackChunkName: "StudentFAQ" */ '../views/Student/FAQ.vue'),
  },
];

export default studentRoutes;