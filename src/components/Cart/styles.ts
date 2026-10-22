import styled from 'styled-components'

import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;

  display: flex;
  justify-content: flex-end;
`

export const Overlay = styled.button`
  position: absolute;
  inset: 0;

  border: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`

export const SideBar = styled.aside`
  position: relative;
  z-index: 1;
  width: 360px;
  max-width: calc(100% - 24px);
  height: 100%;
  padding: 32px 8px;

  overflow-y: auto;
  background-color: ${cores.salmao};
  color: ${cores.creme};

  > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
    list-style: none;
  }
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px;

  background-color: ${cores.creme};
  color: ${cores.salmao};

  > img {
    display: block;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    object-fit: cover;
  }

  > div {
    flex: 1;
    min-width: 0;
    padding-right: 24px;

    h3 {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 900;
      line-height: 20px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  > button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    img {
      display: block;
    }

    &:focus-visible {
      outline: 2px solid ${cores.salmao};
      outline-offset: 2px;
    }
  }
`

export const TotaPrice = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`
export const ContinueButton = styled.button`
  display: block;
  width: 100%;
  padding: 4px 8px;
  border: 0;

  background-color: ${cores.creme};
  color: ${cores.salmao};

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  &:disabled {
    cursor: pointer;
  }
`
