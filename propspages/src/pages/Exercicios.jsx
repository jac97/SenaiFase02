import { useState } from "react"
import Titulos from "../components/Titulos"
import "./Exercicios.css"

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

        let totalGuardado = total1real + total50centavos + total25centavos + total10centavos + total5centavos

        if (totalGuardado >= valorProduto){

            setValor("Você possui dinheiro suficiente para comprar o produto✅")

        }else{

            setValor("Você não possui dinheiro suficiente para comprar o produto❌")

        }

    }

    function Exercicio526(){
        alert("Cálculo da Média Ponderada de 4 provas!!!")
        // nomeAluno = prompt("Por favor, informe seu nome: ")

        let notaUm = Number(prompt("Digite a nota primeira prova: "))
        let pesoUm = Number(prompt("Agora digite o peso da nota da primeira prova: "))

        let notaDois = Number(prompt("Digite a nota segunda prova: "))
        let pesoDois = Number(prompt("Agora digite o peso da nota da segunda prova: "))

        let notaTres = Number(prompt("Digite a nota terceira prova: "))
        let pesoTres = Number(prompt("Agora digite o peso da nota da terceira prova: "))

        let notaQuatro = Number(prompt("Digite a nota quarta prova: "))
        let pesoQuatro = Number(prompt("Agora digite o peso da nota da quarta prova: "))

        let somaNotas = ((notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres) + (notaQuatro * pesoQuatro))

        let somaPesos = pesoUm + pesoDois + pesoTres + pesoQuatro

        let mediaPonderada = somaNotas / somaPesos

        if (mediaPonderada >= 7){

            setMedia("APROVADO✅")

        }else{

            setMedia("REPROVADO❌" )

        }
    }
  return (
    <div className="exercicios-container">

        <Titulos texto={"Exercícios"} emoji={"📝"}/>

        <div className="botoes-exercicios">

            <button className="botao" onClick={Exercicio525}>Exercício 5.25</button>
            <button className="botao" onClick={Exercicio526}>Exercício 5.26</button>

        </div>

        <div className="resultado-exercicios">
            {valor}
            {media}
        </div>
      
    </div>
  )
}

export default Exercicios
