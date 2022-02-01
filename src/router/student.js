const studentRoutes = [
  {
    path: '/home',
    name: 'StudentHome',
    meta: {
      title: 'Home'
    },
    component: () =>
      import(/* webpackChunkName: "StudentHome" */ '../views/Student/Home.vue'),
  },
  {
    path: '/level',
    name: 'StudentLevel',
    meta: {
      title: 'Level'
    },
    component: () =>
      import(/* webpackChunkName: "StudentLevel" */ '../views/Student/Level.vue'),
  },
  {
    path: '/all-teachers',
    name: 'AllTeachers',
    meta: {
      title: 'All Teachers'
    },
    component: () =>
      import(/* webpackChunkName: "AllTeachers" */ '../views/Student/AllTeachers.vue'),
  },
  {
    path: '/special',
    name: 'StudentSpecial',
    meta: {
      title: 'Student Special'
    },
    component: () =>
      import(/* webpackChunkName: "StudentSpecial" */ '../views/Student/Special.vue'),
  },
  {
    path: '/packages/:id',
    name: 'StudentPackages',
    meta: {
      title: 'Packages'
    },
    component: () =>
      import(/* webpackChunkName: "StudentPackages" */ '../views/Student/StudentPackages.vue'),
  },
  {
    path: '/buy-packages/:id',
    name: 'BuyPackage',
    meta: {
      title: 'Buy Package'
    },
    component: () =>
      import(/* webpackChunkName: "BuyPackage" */ '../views/Student/BuyPackage.vue'),
  },
  {
    path: '/calendar',
    name: 'StudentCalendar',
    meta: {
      title: 'Calendar'
    },
    component: () =>
      import(/* webpackChunkName: "StudentCalendar" */ '../views/Student/Calendar.vue'),
  },
  {
    path: '/settings',
    name: 'StudentSettings',
    meta: {
      title: 'Settings'
    },
    component: () =>
      import(/* webpackChunkName: "StudentSettings" */ '../views/Student/Settings.vue'),
  },
  {
    path: '/faq',
    name: 'StudentFAQ',
    meta: {
      title: 'FAQ'
    },
    component: () =>
      import(/* webpackChunkName: "StudentFAQ" */ '../views/Student/FAQ.vue'),
  },
];

studentRoutes.forEach(route => {
  route.meta.requiresAuth = true
  route.meta.layout = 'student'
})

export default studentRoutes;