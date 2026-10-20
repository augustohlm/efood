import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import type { Restaurant } from '../../models/Restaurant'
import { getRestaurants, mapRestaurant } from '../../services/restaurants'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getRestaurants(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setRestaurantes(data.map(mapRestaurant))
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setErro(
            'Não foi possível carregar os restaurantes. Atualize a página'
          )
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setCarregando(false)
        }
      })
    return () => controller.abort()
  }, [])

  return (
    <>
      <Header />
      <main>
        {carregando && <p role="status">Carregando restaurantes</p>}
        {erro && <p role="alert">{erro}</p>}
        {!carregando && !erro && <RestaurantList restaurants={restaurantes} />}
      </main>
    </>
  )
}
export default Home
