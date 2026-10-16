import { HeaderBar, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="efood" width={125} height={58} />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </HeaderBar>
)

export default Header
