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

    <HeroSection />

    <main class="mx-auto max-w-7xl px-6 pb-12">
      <FilterBar
        :categories="categories"
        @search="handleSearch"
        @filter="handleFilter"
      />

      <div class="mb-12 grid gap-4 md:grid-cols-3">
        <div class="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
            Why Choose Us
          </p>
          <h3 class="mt-2 text-2xl font-black text-stone-900 dark:text-white">
            Premium Product Curation
          </h3>
          <p class="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
            Carefully selected fashion items displayed in a clean, international-style shopping interface.
          </p>
        </div>

        <div class="rounded-[2rem] bg-black p-6 text-white shadow-sm dark:bg-white dark:text-black">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300 dark:text-rose-600">
            Trending
          </p>
          <h3 class="mt-2 text-2xl font-black">
            Global luxury-inspired browsing
          </h3>
          <p class="mt-3 text-sm leading-6 text-stone-300 dark:text-stone-700">
            Modern structure, improved cart flow, responsive experience, and better visual quality.
          </p>
        </div>

        <div class="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
            User Experience
          </p>
          <h3 class="mt-2 text-2xl font-black text-stone-900 dark:text-white">
            Smooth and professional
          </h3>
          <p class="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
            Better spacing, premium cards, cleaner sections, and polished icon-based actions.
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
import CartDrawer from '../components/CartDrawer.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import FilterBar from '../components/FilterBar.vue'
import HeroSection from '../components/HeroSection.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NavBar from '../components/NavBar.vue'
import ProductGrid from '../components/ProductGrid.vue'
import { useTheme } from '../composables/useTheme'
import { getProducts } from '../services/api'
import type { Product } from '../types/product'

const CLOTH_CATEGORIES: string[] = [
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

const { isDark, toggleTheme } = useTheme()

const allProducts = ref<Product[]>([])
const isLoading = ref<boolean>(true)
const errorMessage = ref<string>('')
const searchQuery = ref<string>('')
const selectedCategory = ref<string>('')
const isCartOpen = ref<boolean>(false)

const clothProducts = computed<Product[]>(() => {
  return allProducts.value.filter((product) =>
    CLOTH_CATEGORIES.includes(product.category)
  )
})

const categories = computed<string[]>(() => {
  const uniqueCategories = new Set(
    clothProducts.value.map((product) => product.category)
  )
  return Array.from(uniqueCategories)
})

const filteredProducts = computed<Product[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return clothProducts.value.filter((product) => {
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
  try {
    isLoading.value = true
    errorMessage.value = ''

    const data = await getProducts()
    allProducts.value = data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    errorMessage.value = 'Failed to load clothing products.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  void fetchProducts()
})
</script>