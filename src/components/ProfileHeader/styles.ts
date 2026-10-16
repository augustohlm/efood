import styled from 'styled-components'

import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.svg'

export const HeaderBar = styled.header`
  min-height: 164px;
  padding: 40px 16px;

  background-color: ${cores.creme};
  background-image: url('${fundo}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 24px;

  > a:first-child {
    justify-self: start;
  }

  > span {
    justify-self: end;
  }

  font-size: 18px;
  font-weight: 900;

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
    justify-items: center;

    > a:first-child,
    > span {
      justify-self: center;
    }
  }
`
