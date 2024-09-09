import { useState } from "react"
import Titulo from "./components/Titulo"
import "./Exercicio4.css"
import ComponenteExercicio4 from "./components/ComponenteExercicio4"

function Exercicio4() {
    const [temperatura, setTemperatura] = useState("Aguardando...")

    function celsiusFahrenheit(){
    
        let tempCelsius = Number(prompt("Digite a temperetura em Celsius (°C): "))

        let tempFahrenheit = (tempCelsius * 9/5) + 32

        setTemperatura(<ComponenteExercicio4 entrada={tempCelsius + "°C (Grau Celsius)"} saida={tempFahrenheit.toFixed(2) + "°F (Grau Fahrenheit)"}/>)

    }

    function fahrenheitCelsius(){
        
        let tempeFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit (°F): "))

        let tempeCelsius = (tempeFahrenheit - 32) * 5/9

        setTemperatura(<ComponenteExercicio4 entrada={tempeFahrenheit + "°F (Grau Fahrenheit)"} saida={tempeCelsius.toFixed(2) + "°C (Grau Celsius)"}/>)

    }

  return (
    <div className="container-exercicio4">

        <Titulo texto={"Exercício"} emoji={"4️⃣"}/>

        <div className="descricao4">

            <p className="enunciado4">Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>

        </div>

        <div className="div-botoes">

            <button className="botao-exercicio4" onClick={celsiusFahrenheit}>Celsius ➡ Fahrenheit</button>
            <button className="botao-exercicio4" onClick={fahrenheitCelsius}>Fahrenheit ➡ Celsius</button>

        </div>

        <div className="resultado4">

            {temperatura}

        </div>
      
    </div>
  )
}

export default Exercicio4
