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

    <main class="mx-auto max-w-7xl px-6 py-10">
      <LoadingSpinner v-if="isLoading" />

      <ErrorMessage
        v-else-if="errorMessage"
        :message="errorMessage"
      />

      <div v-else-if="product" class="grid gap-8 md:grid-cols-2">
        <div class="overflow-hidden rounded-2xl bg-white shadow dark:bg-stone-900">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full object-cover"
          />
        </div>

        <div class="rounded-2xl bg-white p-6 shadow dark:bg-stone-900">
          <h1 class="text-3xl font-bold text-neutral-900 dark:text-white">{{ product.title }}</h1>
          <p class="mt-2 text-gray-500 dark:text-stone-400">{{ product.brand }}</p>
          <p class="mt-4 text-lg font-bold text-neutral-900 dark:text-white">${{ product.price }}</p>
          <p class="mt-4 text-gray-700 dark:text-stone-300">{{ product.description }}</p>

          <div class="mt-6 flex gap-4">
            <button
              class="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
              @click="handleAddToCart"
            >
              Add to Cart
            </button>

            <router-link
              to="/"
              class="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800 dark:bg-white dark:text-black"
            >
              Back
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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

onMounted(() => {
  void fetchProduct()
})
</script>