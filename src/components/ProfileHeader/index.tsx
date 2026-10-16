import { Link } from 'react-router-dom'
import { HeaderBar, Container } from './styles'
import logo from '../../assets/images/logo.svg'

const ProfileHeader = () => (
  <HeaderBar>
    <Container>
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="Página inicial do efood" />
      </Link>
      <span>0 produto(s) no carrinho</span>
    </Container>
  </HeaderBar>
)

export default ProfileHeader
