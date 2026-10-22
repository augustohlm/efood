import { useEffect, useRef } from 'react'
import type { Product } from '../../models/Product'
import { Conteudo, Modal } from './styles'

import closeIcon from '../../assets/images/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import type { RootReducer } from '../../store'

type Props = {
  product: Product
  onClose: () => void
}

const ProductModal = ({ product, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dispatch = useDispatch()
  const items = useSelector((state: RootReducer) => state.cart.items)

  const addToCart = () => {
    const productInCart = items.some((item) => item.id === product.id)

    if (productInCart) {
      window.alert('Este produto já está no carrinho')
    } else {
      dispatch(add(product))
    }

    dialogRef.current?.close()
    dispatch(open())
  }

  useEffect(() => {
    const dialog = dialogRef.current

    if (dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [])

  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price)

  return (
    <Modal
      ref={dialogRef}
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close()
        }
      }}
    >
      <Conteudo>
        <button
          type="button"
          aria-label="Fechar detalhes do produto"
          onClick={() => dialogRef.current?.close()}
        >
          <img src={closeIcon} alt="" />
        </button>

        <img src={product.image} alt={product.title} width={280} height={280} />

        <div>
          <h2 id="product-modal-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>Serve: {product.portion}</p>

          <button type="button" onClick={addToCart}>
            Adicionar ao carrinho - {precoFormatado}
          </button>
        </div>
      </Conteudo>
    </Modal>
  )
}

export default ProductModal
