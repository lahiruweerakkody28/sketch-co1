<template>
  <section class="mb-10 -mt-6 relative z-10">
    <div class="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg shadow-stone-200/50">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Browse Collection
          </p>
          <h2 class="mt-2 text-2xl font-bold text-neutral-900">
            Find your perfect fashion match
          </h2>
          <p class="mt-2 text-sm text-stone-500">
            Search by name or filter by fashion category.
          </p>
        </div>

        <div class="grid flex-1 gap-4 md:grid-cols-3 lg:max-w-3xl">
          <div>
            <label class="mb-2 block text-sm font-medium text-stone-700">
              Search
            </label>
            <input
              v-model="searchTerm"
              @input="emitSearch"
              type="text"
              placeholder="Search clothing items..."
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-rose-500 focus:bg-white"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-stone-700">
              Category
            </label>
            <select
              v-model="selectedCategory"
              @change="emitFilter"
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-rose-500 focus:bg-white"
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
            <label class="mb-2 block text-sm font-medium text-stone-700">
              Action
            </label>
            <button
              @click="resetFilters"
              class="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
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

const emitSearch = (): void => {
  emit('search', searchTerm.value)
}

const emitFilter = (): void => {
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
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>