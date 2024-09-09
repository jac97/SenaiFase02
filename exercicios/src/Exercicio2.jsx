import { useState } from "react"
import Titulo from "./components/Titulo"
import "./Exercicio2.css"
import ComponenteExercicio2 from "./components/ComponenteExercicio2"

function Exercicio2() {
    const [numeroDigitado, setNumeroDigitado] = useState("Aguardando...")

    function Botao2(){
        
        let numeroDigitado = Number(prompt("Informe o número que deseja verificar: "))

        if (numeroDigitado % 2 === 0 && numeroDigitado > 0){

            setNumeroDigitado(<ComponenteExercicio2 numero={numeroDigitado} resultado={"Número Par e Positivo"}/>)

        }else{

            setNumeroDigitado(<ComponenteExercicio2 numero={numeroDigitado} resultado={"O número não corresponde..."}/>)
        }

    }

  return (

    <div className="container-exercicio2">

        <Titulo texto={"Exercício"} emoji={"2️⃣"}/>

        <div className="descricao2">

            <p className="enunciado2">Dois copos meio cheios - Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.</p>

            <button className="botao-exercicio2" onClick={Botao2}>Digitar número</button>

        </div>

        <div className="resultado2">

            {numeroDigitado}

        </div>
      
    </div>

  )
}

export default Exercicio2
