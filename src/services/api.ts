import axios from 'axios'
import type { ProductResponse } from '../types/product'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getProducts = async (): Promise<ProductResponse> => {
  const response = await api.get<ProductResponse>('/products')
  return response.data
}

export default api