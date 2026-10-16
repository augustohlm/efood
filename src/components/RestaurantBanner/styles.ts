import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.section`
  position: relative;
  min-height: 280px;
  padding: 0 16px;
  color: ${cores.branca};

  > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Conteudo = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1024px;
  min-height: 280px;
  margin: 0 auto;
  padding: 24px 0 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`

export const Categoria = styled.p`
  font-size: 32px;
  font-weight: 100;
  line-height: 1.2;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 1.2;
`
