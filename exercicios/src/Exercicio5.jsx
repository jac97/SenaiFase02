import { useState } from "react"
import "./Exercicio5.css"
import Titulo from "./components/Titulo"
import ComponenteExercicio5 from "./components/ComponenteExercicio5"

function Exercicio5() {

    const [chapa, setChapa] = useState("Aguardando...")

    let nomeChapa1, nomeChapa2
    let nomeCanditato1, nomeVice1
    let nomeCanditato2, nomeVice2
    let idadeCandidato1, idadeVice1
    let idadeCandidato2, idadeVice2
    let cont = 1, somaIdadeChapa1, somaIdadeChapa2

    function analisarChapas(){

        //Pegar dados da primeira chapa
        alert(`${cont}ª CHAPA`)
        nomeChapa1 = prompt("Digite o nome da 1ª Chapa: ")
        nomeCanditato1 = prompt("Digite o nome do Candidato a Presidência: ")
        idadeCandidato1 = Number(prompt("Informe a idade do candidato: "))
        nomeVice1 = prompt("Digite o nome do vice da chapa: ")
        idadeVice1 = Number(prompt("Informe a idade do vice da chapa: "))

        somaIdadeChapa1 = idadeCandidato1 + idadeVice1

        //pegar dados da segunda chapa
        alert(`${cont + 1}ª CHAPA`)
        nomeChapa2 = prompt("Digite o nome da 1ª Chapa: ")
        nomeCanditato2 = prompt("Digite o nome do Candidato a Presidência: ")
        idadeCandidato2 = Number(prompt("Informe a idade do candidato: "))
        nomeVice2 = prompt("Digite o nome do vice da chapa: ")
        idadeVice2 = Number(prompt("Informe a idade do vice da chapa: "))

        somaIdadeChapa2 = idadeCandidato2 + idadeVice2
        
        //analisando a idade dos candidatos para mostrar o resultado
        if (somaIdadeChapa1 > somaIdadeChapa2){

            setChapa(<ComponenteExercicio5 nomeChapa={nomeChapa1} candidato={nomeCanditato1} vice={nomeVice1}/>)
            
        }else if( somaIdadeChapa1 < somaIdadeChapa2){
            
            setChapa(<ComponenteExercicio5 nomeChapa={nomeChapa2} candidato={nomeCanditato2} vice={nomeVice2}/>)
            
        }else{
            
            setChapa(<ComponenteExercicio5 nomeChapa={"Deu empate"} candidato={"..."} vice={"..."}/>)

        }
        
    }

  return (
    <div className="container-exercicio5">

        <Titulo texto={"Exercício"} emoji={"5️⃣"}/>

        <div className="descricao5">

            <p className="enunciado5">DEMOcracia: faça um programa que leia a idade dos candidatos à presidência e de seus vices e depois indique qual chapa acumula mais experiência. Considere que estamos no segundo turno, com duas chapas candidato+vice.</p>

        </div>

        <div className="botao-exer-5">

            <button className="botao-5" onClick={analisarChapas}>Iniciar análise do 2º turno</button>

        </div>

        <div className="resultado5">

            {chapa}

        </div>
      
    </div>
  )
}

export default Exercicio5
