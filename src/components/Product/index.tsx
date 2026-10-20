import { useState } from 'react'
import type { Product as ProductData } from '../../models/Product'
import { Card, Titulo, Descricao, Botao } from './styles'
import ProductModal from '../ProductModal'

type Props = ProductData

const Product = (product: Props) => {
  const [modalAberta, setModalAberta] = useState(false)
  const { title, description, image } = product

  return (
    <>
      <Card>
        <img src={image} alt={title} />

        <Titulo>{title}</Titulo>

        <Descricao>{description}</Descricao>

        <Botao type="button" onClick={() => setModalAberta(true)}>
          Mais detalhes
        </Botao>
      </Card>
      {modalAberta && (
        <ProductModal product={product} onClose={() => setModalAberta(false)} />
      )}
    </>
  )
}

export default Product
