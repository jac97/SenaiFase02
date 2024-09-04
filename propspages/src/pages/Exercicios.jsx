import { useState } from "react"
import Titulos from "../components/Titulos"
import "./Exercicios.css"
import Aprovado from "../components/Aprovado"
import Reprovado from "../components/Reprovado"
import Media from "../components/Media"

// let nomeAluno

function Exercicios() {
    
    const [valor, setValor] = useState()
    const [media, setMedia] = useState()

    function Exercicio525(){
        alert("Moedas do meu Cofrinho!!!")
        
        let valorProduto = Number(prompt("Por favor, informe o valor do produto (R$): "))

        alert("Vamos contar a moeda do seu cofrinho para ver se dá para comprar o produto, tudo bem?")

        let moedas1Real = Number(prompt("Quantas moedas de 1 real você tem no cofrinho: "))
        let moedas50Centavos = Number(prompt("Quantas moedas de 50 centavos você tem no cofrinho: "))
        let moedas25Centavos = Number(prompt("Quantas moedas de 25 centavos você tem no cofrinho: "))
        let moedas10Centavos = Number(prompt("Quantas moedas de 10 centavos você tem no cofrinho: "))
        let moedas5Centavos = Number(prompt("Quantas moedas de 5 centavos você tem no cofrinho: "))

        let total1real = moedas1Real * 1
        let total50centavos = moedas50Centavos * 0.50
        let total25centavos = moedas25Centavos * 0.25
        let total10centavos = moedas10Centavos * 0.10
        let total5centavos = moedas5Centavos * 0.05

        let totalGuardado = (total1real + total50centavos + total25centavos + total10centavos + total5centavos).toFixed(2)

        if (totalGuardado >= valorProduto){

            setValor(`FUNDO SUFICIENTE✅`)
            
        }else{
            
            setValor(`FUNDO INSUFICIENTE❌`)

        }

    }

    function Exercicio526(){

        alert("Cálculo da Média Ponderada de 4 provas!!!")
        let nomeAluno = prompt("Por favor, informe seu nome: ")

        let notaUm
        do {

            notaUm = Number(prompt("Digite a nota primeira prova (de 0 a 10): "))
            
        } while (notaUm < 0 || notaUm > 10);
        let pesoUm = Number(prompt("Agora digite o peso da nota da primeira prova: "))

        let notaDois
        do {
            
            notaDois = Number(prompt("Digite a nota segunda prova (de 0 a 10): "))
            
        } while (notaDois < 0 || notaDois > 10);
        let pesoDois = Number(prompt("Agora digite o peso da nota da segunda prova: "))

        let notaTres
        do {

            notaTres = Number(prompt("Digite a nota terceira prova (de 0 a 10): "))
            
        } while (notaTres < 0 || notaTres > 10);
        let pesoTres = Number(prompt("Agora digite o peso da nota da terceira prova: "))

        let notaQuatro
        do {

            notaQuatro = Number(prompt("Digite a nota quarta prova (de 0 a 10): "))
            
        } while (notaQuatro < 0 || notaQuatro > 10);
        let pesoQuatro = Number(prompt("Agora digite o peso da nota da quarta prova: "))

        let somaNotas = ((notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres) + (notaQuatro * pesoQuatro))

        let somaPesos = pesoUm + pesoDois + pesoTres + pesoQuatro

        let mediaPonderada = (somaNotas / somaPesos).toFixed(1)

        if (mediaPonderada >= 7){

            setMedia(<Media nome={nomeAluno} media={mediaPonderada} imagem={<Aprovado/>}/>)

        }else{

            setMedia(<Media nome={nomeAluno} media={mediaPonderada} imagem={<Reprovado/>}/>)

        }
    }
  return (
    <div className="exercicios-container">

        <Titulos texto={"Exercícios"} emoji={"📝"}/>

        <div className="botoes-exercicios">

            <button className="botao" onClick={Exercicio525}>Exercício 5.25</button>
            <button className="botao" onClick={Exercicio526}>Exercício 5.26</button>

        </div>

        <div className="resultado-exercicios525">
            {valor}
        </div>

        <div className="resultado-exercicios526">
            {media}
        </div>
      
    </div>
  )
}

export default Exercicios
