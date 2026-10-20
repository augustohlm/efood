import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import ProfileHeader from '../../components/ProfileHeader'
import RestaurantBanner from '../../components/RestaurantBanner'
import ProductsList from '../../components/ProductsList'

import type { RestaurantApi } from '../../models/api'
import {
  getRestaurants,
  mapRestaurant,
  mapProduct
} from '../../services/restaurants'

const Profile = () => {
  const { id } = useParams()

  const [restaurantes, setRestaurantes] = useState<RestaurantApi[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getRestaurants(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setRestaurantes(data)
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setErro('Não foi possivel carregar o restaurante. Atualize a página.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setCarregando(false)
        }
      })

    return () => controller.abort()
  }, [])

  if (carregando) {
    return <p role="status">Carregando restaurante...</p>
  }

  if (erro) {
    return <p role="alert">{erro}</p>
  }

  const dadosRestaurante = restaurantes.find((item) => item.id === Number(id))

  if (!dadosRestaurante) {
    return <Navigate to="/" replace />
  }

  const restaurante = mapRestaurant(dadosRestaurante)
  const produtos = dadosRestaurante.cardapio.map(mapProduct)

  return (
    <>
      <ProfileHeader />
      <main>
        <RestaurantBanner
          title={restaurante.title}
          category={restaurante.category}
          image={restaurante.cover ?? restaurante.image}
        />
        <ProductsList products={produtos} />
      </main>
    </>
  )
}

export default Profile
