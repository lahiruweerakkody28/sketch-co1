<template>
  <section class="relative z-10 -mt-6 mb-10">
    <div class="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/40 dark:border-stone-800 dark:bg-stone-900 dark:shadow-none">
      <div class="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
            Browse Collection
          </p>
          <h2 class="mt-2 text-3xl font-black text-stone-900 dark:text-white">
            Find fashion with a world-class look
          </h2>
          <p class="mt-2 text-sm text-stone-500 dark:text-stone-400">
            Search by product name, description, or select a premium category.
          </p>
        </div>

        <div class="grid flex-1 gap-4 md:grid-cols-3 xl:max-w-3xl">
          <div>
            <label class="mb-2 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
              <Search class="h-4 w-4" />
              Search
            </label>
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Search premium items..."
              class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:bg-stone-950"
              @input="onSearchInput"
            />
          </div>

          <div>
            <label class="mb-2 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
              <SlidersHorizontal class="h-4 w-4" />
              Category
            </label>
            <select
              v-model="selectedCategory"
              class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:bg-stone-950"
              @change="onCategoryChange"
            >
              <option value="">All Categories</option>
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ formatCategory(category) }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
              <RotateCcw class="h-4 w-4" />
              Reset
            </label>
            <button
              class="w-full rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600 dark:bg-white dark:text-black dark:hover:bg-stone-200"
              @click="resetFilters"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RotateCcw, Search, SlidersHorizontal } from 'lucide-vue-next'
import { ref } from 'vue'

defineProps<{
  categories: string[]
}>()

const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'filter', value: string): void
}>()

const searchTerm = ref<string>('')
const selectedCategory = ref<string>('')

const onSearchInput = (): void => {
  emit('search', searchTerm.value)
}

const onCategoryChange = (): void => {
  emit('filter', selectedCategory.value)
}

const resetFilters = (): void => {
  searchTerm.value = ''
  selectedCategory.value = ''
  emit('search', '')
  emit('filter', '')
}

const formatCategory = (value: string): string => {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>