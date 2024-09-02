import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";
import { useState } from "react"
import Titulos from "../components/Titulos"
import "./Dado.css"

function Dado() {

    const [dado, setDado] = useState()
    const dados = [BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6] //lista de ícones com todas as faces do dado

    function jogarDado(){
        
        let numero_sorteado = Math.floor(Math.random() * 6)
        // arredonda de 1 a 6, ou seja, inclui o 6 no sorteio
        // let numero_sorteado = Math.ceil(Math.random() * 6) -> arredonda de 1 a 6 de forma direta

        // if (numero_sorteado == 1){
            
        //     setDado(dados[0])
            
        // }else if (numero_sorteado == 2){
            
        //     setDado(dados[1])

        // }else if (numero_sorteado == 3){
            
        //     setDado(dados[2])

        // }else if (numero_sorteado == 4){
            
        //     setDado(dados[3])

        // }else if (numero_sorteado == 5){
            
        //     setDado(dados[4])

        // }else{
            
        //     setDado(dados[5])

        // }

        setDado(dados[numero_sorteado]) //forma resumida sem precisar usar as estruturas de condição, pega os icones da posição 0 a 5 na lista, de acordo com o número sorteado, totalizando 6 possíveis números.

    }

  return (
    <div className="dado-container">

        <Titulos texto={"Dado"} emoji={"🎲"}/>
        
        <div className="logo-dados">

            <BsDice1/>
            <BsDice2/>
            <BsDice3/>
            <BsDice4/>
            <BsDice5/>
            <BsDice6/>

        </div>

        <button className="sortear-dado" onClick={jogarDado}>Jogar Dado</button>

        <div className="num-sorteado">

            {dado}

        </div>

    </div>

  )
}

export default Dado
