import axios from 'axios'
import type { Product, ProductResponse } from '../types/product'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
})

export const getProducts = async (): Promise<ProductResponse> => {
  const response = await api.get<ProductResponse>('/products?limit=0')
  return response.data
}

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`)
  return response.data
}

export default api