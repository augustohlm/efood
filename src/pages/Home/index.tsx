import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { restaurantes } from '../../data/restaurants'

const Home = () => (
  <>
    <Header />
    <main>
      <RestaurantList restaurants={restaurantes} />
    </main>
  </>
)

export default Home
