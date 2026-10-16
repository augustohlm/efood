import { Link } from 'react-router-dom'

import { FooterContainer, RedesSociais, Descricao } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <img src={logo} alt="Página inicial do efood" />
    </Link>

    <RedesSociais aria-label="Redes sociais">
      <li>
        <img src={instagram} alt="Instagram" />
      </li>
      <li>
        <img src={facebook} alt="Facebook" />
      </li>
      <li>
        <img src={twitter} alt="Twitter" />
      </li>
    </RedesSociais>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Descricao>
  </FooterContainer>
)

export default Footer
