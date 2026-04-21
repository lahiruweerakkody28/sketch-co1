<template>
  <div class="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-64 w-full object-cover"
    />

    <div class="p-4">
      <h3 class="text-lg font-bold">{{ product.title }}</h3>
      <p class="mt-1 text-sm text-gray-500">{{ product.brand }}</p>
      <p class="mt-2 line-clamp-2 text-sm text-gray-600">
        {{ product.description }}
      </p>

      <div class="mt-4 flex items-center justify-between">
        <span class="text-xl font-bold">${{ product.price }}</span>

        <div class="flex gap-2">
          <button
            class="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>

          <router-link
            :to="`/product/${product.id}`"
            class="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            View
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()

const { addToCart } = useCart()
</script>