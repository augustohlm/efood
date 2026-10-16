import styled from 'styled-components'

import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.svg'

export const HeaderBar = styled.header`
  min-height: 360px;
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  background-color: ${cores.creme};
  background-image: url('${fundo}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;
`

export const Titulo = styled.h1`
  max-width: 539px;
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;
`
