import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/questions/:questionNumber',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "question" */ '../views/questions.vue'),
    props: true
  },
  {
    path: '/Result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
