import Titulos from "../components/Titulos"
import "./Sorteio.css"

let num_sorteiado, tamanho_dino = 35

function Sorteio() {

    function Sorteiar(){

        num_sorteiado = Math.floor(Math.random() * 101)

        if (num_sorteiado === tamanho_dino){
    
            alert(`Parabéns! Acertou o tamanho do dinossauro👏🏿👏🏿👏🏿`)
    
        }else{
    
            alert(`Errado! Você não acertou o tamanho do dinossauro😥😥😥`)
    
        }
    }


  return (

    <div className="sorteio-container">

        <Titulos texto={"Sorteio"} emoji={"🎲"}/>

        <button className="botao-sorteio" onClick={Sorteiar}>Adivinhar tamanho</button>
      
    </div>

  )

}

export default Sorteio
