export default [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    redirect: '/home/vuex-test',
    children: [
      {
        path: '/vuex-test',
        name: 'vuex-test',
        component: () => import(/* webpackChunkName: "vuex-test" */ '@/views/home/vuex-test/index.vue')
      },
      {
        path: '/axios-test',
        name: 'axios-test',
        component: () => import(/* webpackChunkName: "axios-test" */ '@/views/home/axios-test/index.vue')
      }
    ]
  }
]
