import "./Body.css"

function Body() {

    function Itens(){

    }
    
  return (
    <div className="body-container">

        <img className="farmarcia" src="./images/farmarcia.png" alt="" />

        <button className="botao-itens" onClick={Itens}>Ver itens</button>
      
    </div>
  )
}

export default Body
