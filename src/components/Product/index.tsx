import type { Product as ProductData } from '../../models/Product'
import { Card, Titulo, Descricao, Botao } from './styles'

type Props = ProductData

const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />

    <Titulo>{title}</Titulo>

    <Descricao>{description}</Descricao>

    <Botao type="button" disabled>
      Adicionar ao carrinho
    </Botao>
  </Card>
)

export default Product
