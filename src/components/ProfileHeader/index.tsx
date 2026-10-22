import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import type { RootReducer } from '../../store'

import { HeaderBar, Container } from './styles'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const quantidade = useSelector(
    (state: RootReducer) => state.cart.items.length
  )

  return (
    <HeaderBar>
      <Container>
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="Página inicial do efood" />
        </Link>
        <button type="button" onClick={() => dispatch(open())}>
          {quantidade} produto(s) no carrinho
        </button>
      </Container>
    </HeaderBar>
  )
}

export default ProfileHeader
