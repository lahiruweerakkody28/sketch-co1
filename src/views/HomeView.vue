<template>
  <div class="min-h-screen bg-slate-50">
    <NavBar />
    <HeroSection />

    <main class="mx-auto max-w-7xl px-6 py-12">
      <LoadingSpinner v-if="isLoading" />

      <ErrorMessage
        v-else-if="errorMessage"
        :message="errorMessage"
      />

      <ProductGrid
        v-else
        :products="products"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import HeroSection from '../components/HeroSection.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NavBar from '../components/NavBar.vue'
import ProductGrid from '../components/ProductGrid.vue'
import { getProducts } from '../services/api'
import type { Product } from '../types/product'

const products = ref<Product[]>([])
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')

const fetchProducts = async (): Promise<void> => {
  try {
    isLoading.value = true
    errorMessage.value = ''

    const data = await getProducts()
    products.value = data.products
  } catch (error) {
    console.error('Failed to fetch products:', error)
    errorMessage.value = 'Unable to load products. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  void fetchProducts()
})
</script>