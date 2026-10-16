import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.creme};
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    display: block;
  }
`

export const RedesSociais = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-top: 32px;
`

export const Descricao = styled.p`
  margin-top: 80px;
  width: 100%;
  max-width: 480px;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`
