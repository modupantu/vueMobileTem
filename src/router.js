import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'

Vue.use(Router)
console.log(process.env.BASE_URL)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})