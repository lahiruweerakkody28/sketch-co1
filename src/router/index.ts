import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router