import type { RestaurantApi, ProductApi } from '../models/api'
import type { Product } from '../models/Product'
import type { Restaurant } from '../models/Restaurant'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const getRestaurants = async (
  signal?: AbortSignal
): Promise<RestaurantApi[]> => {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  const data: RestaurantApi[] = await response.json()

  return data
}

export const mapRestaurant = (restaurant: RestaurantApi): Restaurant => ({
  id: restaurant.id,
  title: restaurant.titulo,
  description: restaurant.descricao,
  image: restaurant.capa,
  cover: restaurant.capa,
  rating: restaurant.avaliacao,
  category: restaurant.tipo,
  highlighted: restaurant.destacado
})

export const mapProduct = (product: ProductApi): Product => ({
  id: product.id,
  title: product.nome,
  description: product.descricao,
  image: product.foto,
  price: product.preco,
  portion: product.porcao
})
