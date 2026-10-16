import { Navigate, useParams } from 'react-router-dom'

import ProfileHeader from '../../components/ProfileHeader'
import RestaurantBanner from '../../components/RestaurantBanner'
import ProductsList from '../../components/ProductsList'

import { produtos } from '../../data/products'
import { restaurantes } from '../../data/restaurants'

const Profile = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find((item) => item.id === Number(id))

  if (!restaurante) {
    return <Navigate to="/" replace />
  }

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
