import Restaurant from '../Restaurant'

import type { Restaurant as RestaurantData } from '../../models/Restaurant'

import { Container, List } from './styles'

type Props = {
  restaurants: RestaurantData[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Restaurant {...restaurant} />
        </li>
      ))}
    </List>
  </Container>
)

export default RestaurantList
