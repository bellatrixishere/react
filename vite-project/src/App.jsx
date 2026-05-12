import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import FormulariosDeCadastro from '../components/formulariosDeCadastro'
import Cabecalho from '../components/cabecalho' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, World!</h1>
      <Cabecalho />
      <FormulariosDeCadastro />
    </>
  )
}

export default App
