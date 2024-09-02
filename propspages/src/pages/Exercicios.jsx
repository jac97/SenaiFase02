import { useState } from "react"
import Titulos from "../components/Titulos"
import "./Exercicios.css"


function Exercicios() {

    const [valor, setValor] = useState()
    const [media, setMedia] = useState()

    function Exercicio525(){
        alert("sou o 5.25")
    }

    function Exercicio526(){
        alert("sou o 5.26")
    }
  return (
    <div className="exercicios-container">

        <Titulos texto={"Exercícios"} emoji={"📝"}/>

        <div className="botoes-exercicios">

            <button className="botao" onClick={Exercicio525}>Exercício 5.25</button>
            <button className="botao" onClick={Exercicio526}>Exercício 5.26</button>

        </div>

        <div>
            {valor}
            {media}
        </div>
      
    </div>
  )
}

export default Exercicios
