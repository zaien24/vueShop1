import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Features from '../views/Features.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/features',
    name: 'features',
    component: Features
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
