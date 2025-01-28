import React from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { ContainerVagas, Variaveis } from './styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={Variaveis}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <ContainerVagas>
        <ListaVagas />
      </ContainerVagas>
    </ThemeProvider>
  )
}

export default App
