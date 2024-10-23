import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './CadastroProduto.css'

function CadastroProduto() {

    const {produtos, setProdutos} = useContext(GlobalContext) //baixar informações do GlobalContext

    const [inputNome, setInputNome] = useState('')
    const [inputPreco, setInputPreco] = useState('')

    useEffect(() => {
        console.log(produtos);
    }, [produtos])

    function cadastrarProduto(){

        let produto = {
            id: Date.now(),
            nome: inputNome,
            preco: inputPreco,
        }

        setProdutos([...produtos, produto])

    }

  return (
    <div>

        <Navbar/>
        <h1>Cadastro de Produtos</h1>

        <div className='input-container'>

            <label htmlFor="">Nome: </label>
            <input type="text" 
                value={inputNome}
                onChange={(event) => setInputNome(event.target.value)}
            />

        </div>

        <div className='input-container'>

            <label htmlFor="">Preço: </label>
            <input type="text" 
                value={inputPreco}
                onChange={(event) => setInputPreco(event.target.value)}
            />

        </div>

        {/* {inputNome} {inputPreco} */}

        <button onClick={cadastrarProduto}>Cadastrar</button>

        <div>

            {produtos.map((p) => (
                <div key={p.id} className='card-produto'>
                    <p>Id: {p.id}</p>
                    <p>Nome: {p.nome}</p>
                    <p>Preço: {p.preco}</p>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default CadastroProduto
