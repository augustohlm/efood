import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.article`
  position: relative;
  width: 100%;
  max-width: 472px;
  background-color: ${cores.branca};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Conteudo = styled.div`
  padding: 8px;
  border: 1px solid ${cores.salmao};
  border-top: 0;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  max-width: calc(100% - 32px);
`

export const Cabecalho = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`

export const Titulo = styled.h2`
  flex: 1;
  min-width: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  min-height: 2.4em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const Avaliacao = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;

  img {
    display: block;
  }
`

export const Descricao = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
  line-height: 22px;
  min-height: 88px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`

export const SaibaMais = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 4px 6px;
  background-color: ${cores.salmao};
  color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${cores.salmao};
    outline-offset: 3px;
  }
`
