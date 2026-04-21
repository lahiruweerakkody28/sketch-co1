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

    <main class="mx-auto max-w-7xl px-6 py-10">
      <FilterBar
        :categories="categories"
        @search="handleSearch"
        @filter="handleFilter"
      />

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
  'womens-watches'
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