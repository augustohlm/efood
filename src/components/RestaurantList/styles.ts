import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 16px 120px;
`

export const List = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    max-width: 472px;
  }
`
