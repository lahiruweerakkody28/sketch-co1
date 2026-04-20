<template>
  <div class="min-h-screen bg-stone-50">
    <NavBar />

    <main class="mx-auto max-w-7xl px-6 py-12">
      <LoadingSpinner v-if="isLoading" />

      <ErrorMessage
        v-else-if="errorMessage"
        :message="errorMessage"
      />

      <div v-else-if="product" class="grid gap-10 md:grid-cols-2">
        <div class="overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-rose-600">
            {{ formatCategory(product.category) }}
          </p>

          <h1 class="mt-3 text-4xl font-black text-neutral-900">
            {{ product.title }}
          </h1>

          <p class="mt-2 text-lg text-stone-500">
            {{ product.brand }}
          </p>

          <div class="mt-4 flex items-center gap-4">
            <span class="text-3xl font-bold text-neutral-900">
              ${{ product.price }}
            </span>

            <span
              v-if="product.discountPercentage > 0"
              class="rounded-full bg-rose-600 px-3 py-1 text-sm font-semibold text-white"
            >
              -{{ Math.round(product.discountPercentage) }}%
            </span>
          </div>

          <p class="mt-6 text-base leading-7 text-stone-600">
            {{ product.description }}
          </p>

          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div class="rounded-2xl bg-white p-4 shadow-sm">
              <p class="text-sm text-stone-500">Rating</p>
              <p class="mt-1 text-lg font-bold text-neutral-900">★ {{ product.rating }}</p>
            </div>

            <div class="rounded-2xl bg-white p-4 shadow-sm">
              <p class="text-sm text-stone-500">Stock</p>
              <p class="mt-1 text-lg font-bold text-neutral-900">{{ product.stock }}</p>
            </div>

            <div class="rounded-2xl bg-white p-4 shadow-sm">
              <p class="text-sm text-stone-500">Category</p>
              <p class="mt-1 text-lg font-bold text-neutral-900">{{ formatCategory(product.category) }}</p>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              class="rounded-xl bg-neutral-900 px-6 py-3 font-semibold text-white transition hover:bg-rose-600"
            >
              Add to Cart
            </button>

            <router-link
              to="/"
              class="rounded-xl border border-stone-300 px-6 py-3 text-center font-semibold text-neutral-900 transition hover:border-neutral-900"
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
import { useRoute } from 'vue-router'
import AppFooter from '../components/AppFooter.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NavBar from '../components/NavBar.vue'
import { getProductById } from '../services/api'
import type { Product } from '../types/product'

const route = useRoute()

const product = ref<Product | null>(null)
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')

const fetchProduct = async (): Promise<void> => {
  try {
    isLoading.value = true
    errorMessage.value = ''

    const id = Number(route.params.id)
    product.value = await getProductById(id)
  } catch (error) {
    console.error('Failed to load product:', error)
    errorMessage.value = 'Unable to load this item right now.'
  } finally {
    isLoading.value = false
  }
}

const formatCategory = (value: string): string => {
  return value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

onMounted(() => {
  void fetchProduct()
})
</script>