import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './components/themes/dark'
import temaLight from './components/themes/light'
import { useState } from 'react'

function App() {
  const [usoTemaDark, setUsoTemaDark] = useState(false)

  function trocaTema() {
    setUsoTemaDark(!usoTemaDark)
  }

  return (
    <ThemeProvider theme={usoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
