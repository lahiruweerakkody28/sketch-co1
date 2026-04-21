import { computed, ref } from 'vue'
import type { Product } from '../types/product'
import type { CartItem } from '../types/cart'

const STORAGE_KEY = 'shopping-cart'

function loadCart(): CartItem[] {
  const savedCart = localStorage.getItem(STORAGE_KEY)

  if (!savedCart) {
    return []
  }

  try {
    return JSON.parse(savedCart) as CartItem[]
  } catch (error) {
    console.error('Error loading cart:', error)
    return []
  }
}

const cartItems = ref<CartItem[]>(loadCart())

function saveCart(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems.value))
}

export function useCart() {
  const addToCart = (product: Product): void => {
    const existingItem = cartItems.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1,
      })
    }

    saveCart()
  }

  const removeFromCart = (productId: number): void => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
    saveCart()
  }

  const increaseQuantity = (productId: number): void => {
    const item = cartItems.value.find((item) => item.id === productId)

    if (item) {
      item.quantity += 1
      saveCart()
    }
  }

  const decreaseQuantity = (productId: number): void => {
    const item = cartItems.value.find((item) => item.id === productId)

    if (!item) {
      return
    }

    if (item.quantity > 1) {
      item.quantity -= 1
    } else {
      removeFromCart(productId)
      return
    }

    saveCart()
  }

  const clearCart = (): void => {
    cartItems.value = []
    saveCart()
  }

  const totalItems = computed<number>(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed<number>(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }
}