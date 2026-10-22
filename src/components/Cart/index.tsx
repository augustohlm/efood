import { useDispatch, useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  SideBar,
  CartContainer,
  Overlay,
  CartItem,
  TotaPrice,
  ContinueButton
} from './styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem.png'

const formatadorPreco = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  if (!isOpen) {
    return null
  }

  const total = items.reduce((acumulador, item) => acumulador + item.price, 0)

  return (
    <CartContainer>
      <Overlay
        type="button"
        aria-label="Fechar carrinho"
        onClick={() => dispatch(close())}
      ></Overlay>

      <SideBar aria-label="Carrinho de compras">
        {items.length === 0 && <p>Seu carrinho está vazio.</p>}

        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} width={80} height={80} />

              <div>
                <h3>{item.title}</h3>
                <p>{formatadorPreco.format(item.price)}</p>
              </div>
              <button
                type="button"
                aria-label={`Remover ${item.title} do carrinho`}
                onClick={() => dispatch(remove(item.id))}
              >
                <img src={lixeira} alt="" width={16} height={16} />
              </button>
            </CartItem>
          ))}
        </ul>
        <TotaPrice>
          <span>Valor total:</span>
          <strong>{formatadorPreco.format(total)}</strong>
        </TotaPrice>
        <ContinueButton type="button" disabled>
          Continuar com a entrega
        </ContinueButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
