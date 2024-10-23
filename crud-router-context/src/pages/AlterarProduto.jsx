import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'

function AlterarProduto() {
    const {produtoMagico, setProdutoMagico} = useContext(GlobalContext)
    const [produtoNovo, setProdutoNovo] = useState('')

    function atualizarProduto(){
        setProdutoMagico(produtoNovo)
    }
  return (
    <div>
        <Navbar/>
        <h1>Alteração Mágico</h1>
        <p>Produto atual: {produtoMagico}</p>

        <div className='input-container'>
            <label htmlFor="">Produto novo </label>
            <input type="text" 
                value={produtoNovo}
                onChange={(event) => setProdutoNovo(event.target.value)}
            />
        </div>
        <button onClick={atualizarProduto}>Alterar</button>
        {/* <button onClick={() => setProdutoMagico(produtoNovo)}>Alterar</button> */}
    </div>
  )
}

export default AlterarProduto
