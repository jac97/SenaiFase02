import "./Exercicio6.css"
import ComponenteExercicio6 from "./components/ComponenteExercicio6"
import Titulo from "./components/Titulo"
import { useState } from "react"

function Exercicio6() {
    
    const [valorDiarias, setValorDiarias] = useState('')
    const [resultadoCalculo, setResultadoCalculo] = useState()

    let valorTotal, valorPago

    function pegarValorInput(event){

      setValorDiarias(event.target.value);

    }

    function calcularDiarias(){

      if(valorDiarias <= 0){

        setResultadoCalculo("A quantidade de diárias precisa ser maior que zero!!!")

      }else if (valorDiarias > 0 && valorDiarias <= 5){

        valorTotal = valorDiarias * 100

      }else if(valorDiarias > 5 && valorDiarias <= 10){

        valorTotal = valorDiarias * 90

      }else{

        valorTotal = valorDiarias * 80

      }

      let descontoEmocional = valorTotal * 0.10

      let descontoFidelidade = valorTotal * 0.15

      valorPago = (valorTotal - descontoEmocional - descontoFidelidade).toFixed(2)

      setResultadoCalculo(<ComponenteExercicio6 nome={"Mano Juca"} valorTotalDiarias={valorTotal.toFixed(2)} descontoAtendente={descontoEmocional.toFixed(2)} descontoCliente={descontoFidelidade.toFixed(2)} valorTotalPagar={valorPago}/>)

    }

  return (
    <div className="container-exercicio6">

        <Titulo texto={"Exercício"} emoji={"6️⃣"}/>

        <div className="container-descricao6"> 

        </div>

        <div className="botao-exer-6">

            <input type="text" className="input-6" placeholder="Informe a quantidade de diárias" 
              value={valorDiarias} 
              onChange={pegarValorInput}
            />

            <button className="botao-6" onClick={calcularDiarias}>Consultar valor a pagar...</button>

        </div>

        <div className="resultado6">

          {resultadoCalculo}

        </div>
      
    </div>
  )
}

export default Exercicio6
