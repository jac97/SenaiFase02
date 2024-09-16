import './App.css'
import { useState } from 'react'
import Exercicio6 from './Exercicio6'
import TituloPagina from './components/TituloPagina'

function App() {
  const [pagina, setPagina] = useState()

  return (

    <div className='container-app'>

      <TituloPagina/>

      <div className='div-instrucoes'>

        <p className='instrucoes'>Para acessar os exercícios basta clicar no número desejado, abaixo!!!</p>

      </div>

      <nav className='parte-navegacao'>

        <button className='botoes-navegacao' onClick={ () => setPagina()}>1</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>2</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>3</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>4</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>5</button>
        <button className='botoes-navegacao' onClick={ () => setPagina(<Exercicio6/>)}>6</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>7</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>8</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>9</button>
        <button className='botoes-navegacao' onClick={ () => setPagina()}>10</button>

      </nav>

      { pagina }
      
    </div>

  )
}

export default App
