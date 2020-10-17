import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/event/:id',
      name: 'single',
      component: () => import('../views/Single.vue'),
      // beforeEnter: authGuard
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: () => import('../services/Service.js'),
      // beforeEnter: authGuard
    },
    {
      path: '/artists',
      name: 'Artists',
      component: () => import('../services/Service.js'),
      // beforeEnter: authGuard
    },
    {
      path: '/recently-played',
      name: 'RecentlyPlayed',
      component: () => import('../services/Service.js'),
      // beforeEnter: authGuard
    },
  ]
})
