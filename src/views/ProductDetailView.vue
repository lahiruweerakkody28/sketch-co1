<template>
  <div class="min-h-screen bg-stone-50 transition-colors duration-300 dark:bg-stone-950">
    <NavBar
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
      @toggle-cart="isCartOpen = true"
    />

    <CartDrawer
      :is-open="isCartOpen"
      @close="isCartOpen = false"
    />

    <main class="mx-auto max-w-7xl px-6 py-12">
      <LoadingSpinner v-if="isLoading" />

      <ErrorMessage
        v-else-if="errorMessage"
        :message="errorMessage"
      />

      <div v-else-if="product" class="grid gap-10 md:grid-cols-2">
        <div class="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
            {{ formatCategory(product.category) }}
          </p>

          <h1 class="mt-3 text-4xl font-black text-stone-900 dark:text-white">
            {{ product.title }}
          </h1>

          <p class="mt-2 text-lg text-stone-500 dark:text-stone-400">
            {{ product.brand }}
          </p>

          <div class="mt-5 flex items-center gap-4">
            <span class="text-3xl font-black text-stone-900 dark:text-white">
              ${{ product.price }}
            </span>

            <span class="rounded-full bg-black px-3 py-1 text-sm font-semibold text-white dark:bg-white dark:text-black">
              ★ {{ product.rating }}
            </span>
          </div>

          <p class="mt-6 text-base leading-7 text-stone-600 dark:text-stone-300">
            {{ product.description }}
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div class="rounded-2xl border border-stone-200 p-4 dark:border-stone-800">
              <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Stock</p>
              <p class="mt-1 text-lg font-bold text-stone-900 dark:text-white">{{ product.stock }}</p>
            </div>

            <div class="rounded-2xl border border-stone-200 p-4 dark:border-stone-800">
              <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Brand</p>
              <p class="mt-1 text-lg font-bold text-stone-900 dark:text-white">{{ product.brand }}</p>
            </div>

            <div class="rounded-2xl border border-stone-200 p-4 dark:border-stone-800">
              <p class="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Rating</p>
              <p class="mt-1 text-lg font-bold text-stone-900 dark:text-white">{{ product.rating }}</p>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              class="rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-rose-600 dark:bg-white dark:text-black dark:hover:bg-stone-200"
              @click="handleAddToCart"
            >
              Add to Cart
            </button>

            <router-link
              to="/"
              class="rounded-2xl border border-stone-300 px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100 dark:border-stone-700 dark:text-white dark:hover:bg-stone-800"
            >
              Back to Shop
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppFooter from '../components/AppFooter.vue'
import CartDrawer from '../components/CartDrawer.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NavBar from '../components/NavBar.vue'
import { useCart } from '../composables/useCart'
import { useTheme } from '../composables/useTheme'
import { getProductById } from '../services/api'
import type { Product } from '../types/product'

const route = useRoute()
const router = useRouter()
const { addToCart } = useCart()
const { isDark, toggleTheme } = useTheme()

const product = ref<Product | null>(null)
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')
const isCartOpen = ref<boolean>(false)

const fetchProduct = async (): Promise<void> => {
  try {
    isLoading.value = true
    errorMessage.value = ''

    const id = Number(route.params.id)
    product.value = await getProductById(id)
  } catch (error) {
    console.error('Error fetching product:', error)
    errorMessage.value = 'Failed to load product.'
  } finally {
    isLoading.value = false
  }
}

const handleAddToCart = (): void => {
  if (!product.value) return
  addToCart(product.value)
  router.push('/')
}

const formatCategory = (value: string): string => {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

onMounted(() => {
  void fetchProduct()
})
</script>