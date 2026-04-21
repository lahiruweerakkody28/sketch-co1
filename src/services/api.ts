import type { Product, ProductsResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com/products'

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(`${BASE_URL}?limit=194`)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return await response.json() as ProductsResponse
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }

  return await response.json() as Product
}