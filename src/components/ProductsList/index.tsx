import Product from '../Product'

import type { Product as ProductData } from '../../models/Product'

import { Container, List } from './styles'

type Props = {
  products: ProductData[]
}

const ProductsList = ({ products }: Props) => (
  <Container>
    <List>
      {products.map((product) => (
        <li key={product.id}>
          <Product {...product} />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductsList
