import "./Body.css"
import Itens from "./Itens"


function Body() {

    function MeusItens(){

      alert("Olá, os itens ainda não estão disponíveis, apenas os modelos a serem produzidos!")

    }
    
  return (

    <div className="body-container">

        <img className="farmarcia" src="./images/farmarcia.png" alt="" />

        <button className="botao-itens" onClick={MeusItens}>Ir para loja</button>

        <Itens/>
      
    </div>
    
  )
}

export default Body
