import "./Exercicio6.css"
import Titulo from "./components/Titulo"
import { useState } from "react"

function Exercicio6() {
    
    const [valorDiarias, setValorDiarias] = useState()

  return (
    <div className="container-exercicio6">

        <Titulo texto={"Exercício"} emoji={"6️⃣"}/>

        <div className="container-descricao6">

            

        </div>

        <div className="botao-exer-6">

            <input type="text" className="input-6" placeholder="Informe a quantidade de diárias"/>

        </div>

        <div className="resultado6">

        </div>
      
    </div>
  )
}

export default Exercicio6
