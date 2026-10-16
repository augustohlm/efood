import styled from 'styled-components'

export const Container = styled.div`
  padding: 56px 16px 120px;
`

export const List = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 672px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
`
