import { useState } from "react"
import Titulo from "./components/Titulo"
import "./Exercicio1.css"

function Exercicio1() {
    const [numero, setNumero] = useState("Aguardando...")

    function verificarNumero(){
        
        let numero = Number(prompt("Informe o número: "))

        if (numero === 0){
            setNumero("Número Nulo")
        }else if (numero < 0){
            setNumero("Número Negativo")
        }else{
            setNumero("Número Positivo")
        }

    }

  return (
    <div className="container-exercicio1">

        <Titulo texto={"Exercício"} emoji={"1️⃣"}/>

        <div className="container-descricao">

            <p className="enunciado1">Copo meio cheio - Ler um número e informar se ele é positivo, negativo ou nulo.</p>

            <button className="botao-enunciado" onClick={verificarNumero}>Informar número</button>

        </div>

        <div className="resultado">

            {numero}

        </div>
      
    </div>
  )
}

export default Exercicio1
