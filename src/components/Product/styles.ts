import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.article`
  width: 100%;
  max-width: 320px;
  padding: 8px;
  background-color: ${cores.salmao};
  color: ${cores.creme};

  > img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Titulo = styled.h2`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
`

export const Descricao = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  padding: 4px 0;
  border: 0;
  background-color: ${cores.creme};
  color: ${cores.salmao};
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`
