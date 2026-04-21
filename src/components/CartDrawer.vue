<template>
  <div v-if="isOpen" class="fixed inset-0 z-40">
    <div
      class="absolute inset-0 bg-black/40"
      @click="$emit('close')"
    ></div>

    <div
      class="absolute right-0 top-0 h-full w-[85vw] max-w-md bg-white shadow-2xl sm:w-full"
    >
      <div class="flex h-full flex-col">
        <div class="flex items-center justify-between border-b px-4 py-4">
          <h2 class="text-xl font-bold">Shopping Cart</h2>
          <button
            class="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
            @click="$emit('close')"
          >
            Close
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-4">
          <div v-if="cartItems.length === 0" class="text-center text-gray-500">
            Your cart is empty
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="rounded-xl border p-4 shadow-sm"
            >
              <div class="flex gap-3">
                <img
                  :src="item.thumbnail"
                  :alt="item.title"
                  class="h-20 w-20 rounded-lg object-cover"
                />

                <div class="min-w-0 flex-1">
                  <h3 class="truncate font-semibold">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500">{{ item.brand }}</p>
                  <p class="mt-1 font-bold">${{ item.price }}</p>

                  <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <button
                        class="rounded bg-gray-200 px-2 py-1"
                        @click="decreaseQuantity(item.id)"
                      >
                        -
                      </button>

                      <span>{{ item.quantity }}</span>

                      <button
                        class="rounded bg-gray-200 px-2 py-1"
                        @click="increaseQuantity(item.id)"
                      >
                        +
                      </button>
                    </div>

                    <button
                      class="text-sm text-red-500 hover:text-red-700"
                      @click="removeFromCart(item.id)"
                    >
                      Remove
                    </button>
                  </div>

                  <p class="mt-2 text-sm font-medium">
                    Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t p-4">
          <div class="mb-2 flex justify-between">
            <span>Total Items:</span>
            <span class="font-semibold">{{ totalItems }}</span>
          </div>

          <div class="mb-4 flex justify-between">
            <span>Total Price:</span>
            <span class="text-lg font-bold">${{ totalPrice.toFixed(2) }}</span>
          </div>

          <button
            class="mb-2 w-full rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="cartItems.length === 0"
          >
            Checkout
          </button>

          <button
            class="w-full rounded-lg bg-red-500 px-4 py-3 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="cartItems.length === 0"
            @click="clearCart"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
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