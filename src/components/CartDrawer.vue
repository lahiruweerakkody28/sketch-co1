<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100]">
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="$emit('close')"
    ></div>

    <aside class="absolute right-0 top-0 flex h-full w-[90vw] max-w-md flex-col bg-white shadow-2xl dark:bg-stone-950">
      <div class="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-800">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-400">
            Shopping Cart
          </p>
          <h2 class="mt-1 text-2xl font-black text-stone-900 dark:text-white">
            Your Selection
          </h2>
        </div>

        <button
          class="rounded-xl border border-stone-300 px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100 dark:border-stone-700 dark:text-white dark:hover:bg-stone-900"
          @click="$emit('close')"
        >
          Close
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div v-if="cartItems.length === 0" class="rounded-[2rem] border border-dashed border-stone-300 p-8 text-center dark:border-stone-800">
          <h3 class="text-xl font-black text-stone-900 dark:text-white">Your cart is empty</h3>
          <p class="mt-2 text-sm text-stone-500 dark:text-stone-400">
            Add premium items to view them here.
          </p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900"
          >
            <div class="flex gap-3">
              <img
                :src="item.thumbnail"
                :alt="item.title"
                class="h-20 w-20 rounded-2xl object-cover"
              />

              <div class="min-w-0 flex-1">
                <h3 class="truncate font-bold text-stone-900 dark:text-white">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-stone-500 dark:text-stone-400">
                  {{ item.brand }}
                </p>
                <p class="mt-1 font-black text-stone-900 dark:text-white">
                  ${{ item.price }}
                </p>

                <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-xl border border-stone-300 px-3 py-1 text-sm dark:border-stone-700 dark:text-white"
                      @click="decreaseQuantity(item.id)"
                    >
                      -
                    </button>

                    <span class="text-sm font-semibold text-stone-900 dark:text-white">
                      {{ item.quantity }}
                    </span>

                    <button
                      class="rounded-xl border border-stone-300 px-3 py-1 text-sm dark:border-stone-700 dark:text-white"
                      @click="increaseQuantity(item.id)"
                    >
                      +
                    </button>
                  </div>

                  <button
                    class="text-sm font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400"
                    @click="removeFromCart(item.id)"
                  >
                    Remove
                  </button>
                </div>

                <p class="mt-2 text-sm font-medium text-stone-700 dark:text-stone-300">
                  Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-stone-200 p-4 dark:border-stone-800">
        <div class="mb-2 flex justify-between text-sm">
          <span class="text-stone-500 dark:text-stone-400">Total Items</span>
          <span class="font-bold text-stone-900 dark:text-white">{{ totalItems }}</span>
        </div>

        <div class="mb-4 flex justify-between">
          <span class="text-base font-semibold text-stone-900 dark:text-white">Total Price</span>
          <span class="text-2xl font-black text-stone-900 dark:text-white">${{ totalPrice.toFixed(2) }}</span>
        </div>

        <button
          class="mb-2 w-full rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-stone-200"
          :disabled="cartItems.length === 0"
        >
          Checkout
        </button>

        <button
          class="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:text-white dark:hover:bg-stone-900"
          :disabled="cartItems.length === 0"
          @click="clearCart"
        >
          Clear Cart
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const {
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  totalItems,
  totalPrice,
} = useCart()
</script>