<template>
  <div class="min-h-screen bg-stone-50">
    <NavBar />
    <HeroSection />

    <main class="mx-auto max-w-7xl px-6 pb-12">
      <FilterBar
        :categories="categories"
        @search="handleSearch"
        @filter="handleFilter"
      />

      <div class="mb-12 grid gap-4 md:grid-cols-3">
        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Why Choose Us</p>
          <h3 class="mt-2 text-xl font-bold text-neutral-900">Modern Fashion Picks</h3>
          <p class="mt-2 text-sm leading-6 text-stone-500">
            A curated collection of stylish clothing and accessories.
          </p>
        </div>

        <div class="rounded-3xl bg-neutral-900 p-5 text-white shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">Trending</p>
          <h3 class="mt-2 text-xl font-bold">Fresh category-based browsing</h3>
          <p class="mt-2 text-sm leading-6 text-stone-300">
            Search and filter by fashion categories for a cleaner shopping experience.
          </p>
        </div>

        <div class="rounded-3xl bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">User Experience</p>
          <h3 class="mt-2 text-xl font-bold text-neutral-900">Responsive and polished</h3>
          <p class="mt-2 text-sm leading-6 text-stone-500">
            Built to look professional on mobile, tablet, and desktop.
          </p>
        </div>
      </div>

      <LoadingSpinner v-if="isLoading" />

      <ErrorMessage
        v-else-if="errorMessage"
        :message="errorMessage"
      />

      <ProductGrid
        v-else
        :products="filteredProducts"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import FilterBar from '../components/FilterBar.vue'
import HeroSection from '../components/HeroSection.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NavBar from '../components/NavBar.vue'
import ProductGrid from '../components/ProductGrid.vue'
import { getProducts } from '../services/api'
import type { Product } from '../types/product'

const FASHION_CATEGORIES: string[] = [
  'mens-shirts',
  'tops',
  'womens-dresses',
  'womens-bags',
  'mens-shoes',
  'womens-shoes',
  'sunglasses',
  'womens-jewellery',
  'mens-watches',
  'womens-watches',
]

const allProducts = ref<Product[]>([])
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')

const searchQuery = ref<string>('')
const selectedCategory = ref<string>('')

const fashionProducts = computed<Product[]>(() => {
  return allProducts.value.filter((product) =>
    FASHION_CATEGORIES.includes(product.category)
  )
})

const categories = computed<string[]>(() => {
  const uniqueCategories = new Set(
    fashionProducts.value.map((product) => product.category)
  )
  return Array.from(uniqueCategories)
})

const filteredProducts = computed<Product[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return fashionProducts.value.filter((product) => {
    const matchesSearch =
      query === '' ||
      product.title.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)

    const matchesCategory =
      selectedCategory.value === '' ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

const handleSearch = (value: string): void => {
  searchQuery.value = value
}

const handleFilter = (value: string): void => {
  selectedCategory.value = value
}

const fetchProducts = async (): Promise<void> => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await getProducts()
    allProducts.value = data.products
  } catch (error) {
    console.error('API Error:', error)
    errorMessage.value = 'Unable to load fashion items. Check your internet connection or API file.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})
</script>