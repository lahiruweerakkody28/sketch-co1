<template>
  <article
    class="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="relative overflow-hidden bg-stone-100">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div class="absolute left-4 top-4 flex gap-2">
        <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
          {{ formatCategory(product.category) }}
        </span>

        <span
          v-if="product.discountPercentage > 0"
          class="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white shadow"
        >
          -{{ Math.round(product.discountPercentage) }}%
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 class="line-clamp-2 text-lg font-bold text-neutral-900">
            {{ product.title }}
          </h3>
          <p class="mt-1 text-sm text-stone-500">
            {{ product.brand }}
          </p>
        </div>

        <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          ★ {{ product.rating }}
        </span>
      </div>

      <p class="mb-5 line-clamp-3 text-sm leading-6 text-stone-600">
        {{ product.description }}
      </p>

      <div class="mb-5 flex items-center justify-between text-sm">
        <span class="text-stone-500">Stock: {{ product.stock }}</span>
        <span class="font-medium text-stone-500">Fashion Pick</span>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-2xl font-black text-neutral-900">
            ${{ product.price }}
          </p>
        </div>

        <router-link
          :to="`/product/${product.id}`"
          class="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          View Item
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()

const formatCategory = (value: string): string => {
  return value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>