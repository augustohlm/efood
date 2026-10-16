import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  creme: '#FFEBD9',
  fundo: '#FFF8F2',
  branca: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
  color: ${cores.salmao};
  background-color: ${cores.fundo};
}

`
