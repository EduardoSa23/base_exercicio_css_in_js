import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`

export const Variaveis = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export type Theme = {
  corPrincipal: string
  corSecundaria: string
}

export const ContainerVagas = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export default EstiloGlobal
