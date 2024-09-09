import { useState } from "react"
import Titulo from "./components/Titulo"
import "./Exercicio3.css"
import ComponenteExercicio3 from "./components/ComponenteExercicio3"
import ComponenteExercicio3_1 from "./components/ComponenteExercicio3_1"

function Exercicio3() {
    const [dados, setDados] = useState("Aguardando...")
    const [resultado, setResultado] = useState("Aguardando...")

    function Botao3(){
         
        //receber dados do usuário e imprimir no quadro a esquerda
        let salarioDigitado = Number(prompt("Informe o salário: "))
        let emprestimoDigitado = Number(prompt("Digite o valor que deseja emprestar: "))
        let quantPrestacoes = Number(prompt("Informe a quantidade de prestações que deseja pagar: "))

        if (salarioDigitado <= 0 || emprestimoDigitado <= 0 || quantPrestacoes <= 0){
                
            alert("Atenção: Nenhum dos valores informados pode ser zero ou negativo!!!")

        }else{

            setDados(<ComponenteExercicio3 salario={"R$"+salarioDigitado.toFixed(2)} emprestimo={"R$"+emprestimoDigitado.toFixed(2)} prestacao={quantPrestacoes}/>)
        
            //processar os dados recebidos e mostrar no quadro a direita
            let porcentagemSalario = salarioDigitado * 0.30
                
            if (emprestimoDigitado > porcentagemSalario){
                setResultado(<ComponenteExercicio3_1 mensagem={"O empréstimo não pode ser concedido"}/>)
            }else{
                setResultado(<ComponenteExercicio3_1 mensagem={"O empréstimo pode ser concedido"}/>)
            }

        }  

    }

  return (
    <div className="container-exercicio3">

        <Titulo texto={"Exercício"} emoji={"3️⃣"}/>

        <div className="descricao3">

            <p className="enunciado3">Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo</p>

            <button className="botao-exercicio3" onClick={Botao3}>Digitar número</button>

        </div>

        <div className="resultado3">

            <div className="dados-entrada">

                {dados}

            </div>

            <div className="dados-saida">

                {resultado}

            </div>
            
        </div>
      
    </div>
  )
}

export default Exercicio3
