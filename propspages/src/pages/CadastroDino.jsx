import Titulos from "../components/Titulos"
import "./CadastroDino.css"

function CadastroDino() {

    function Cadastrar(){
        alert("Cadastro bem sucedido!")
    }

  return (

    <div className="cadastro-container">

        <Titulos texto={"Cadastro Dinossauro"} emoji={"📝🦖"}/>

        <label className="label-cadastro">Nome</label>
        <input className="inpt-cadastro" type="text" />

        <label className="label-cadastro">Altura</label>
        <input className="inpt-cadastro" type="text" />

        <button className="botao-cadastro" onClick={Cadastrar}>Cadastrar</button>
      
    </div>

  )

}

export default CadastroDino
