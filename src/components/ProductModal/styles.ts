import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.dialog`
  width: calc(100% - 32px);
  max-width: 1024px;
  max-height: calc(100dvh - 32px);
  margin: auto;
  padding: 0;
  border: 0;
  overflow: auto;
  background-color: ${cores.salmao};
  color: ${cores.branca};

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const Conteudo = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;

  > button {
    position: absolute;
    top: 8px;
    right: 8px;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    > img {
      display: block;
      width: 16px;
      height: 16px;
    }

    &:focus-visible {
      outline: 2px solid ${cores.branca};
      outline-offset: 2px;
    }
  }

  > img {
    display: block;
    width: 280px;
    height: 280px;
    flex-shrink: 0;
    object-fit: cover;
  }

  > div {
    flex: 1;
    min-width: 0;

    > h2 {
      width: fit-content;
      max-width: 100%;
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 900;
      line-height: 1;
      text-align: center;
    }

    > p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    > p + p {
      margin: 16px 0;
    }

    > button {
      display: inline-block;
      padding: 4px 8px;
      border: 0;
      background-color: ${cores.creme};
      color: ${cores.salmao};
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      cursor: pointer;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    > img {
      width: 100%;
      max-width: 280px;
      height: auto;
      aspect-ratio: 1;
      align-self: center;
    }
  }
`
