import { useState } from "react";
import Titulos from "../components/Titulos";
import "./Sorteio.css";

// let num_sorteado, tamanho_dino = 35;
let num_sorteado

function Sorteio() {

  const [numero, setNumero] = useState()

  function Sorteiar() {

    num_sorteado = Math.floor(Math.random() * 101);

    setNumero(num_sorteado)

    // if (num_sorteado === tamanho_dino) {
    //   alert(
    //     `Parabéns! Acertou a altura do dinossauro👏🏿👏🏿👏🏿\n\nAltura do Dinossauro: ${tamanho_dino} metros.\n\nAltura sorteada: ${num_sorteado} metros.`
    //   );
    // } else {
    //   alert(
    //     `Errado! Você não acertou a altura do dinossauro😥😥😥\n\nAltura sorteada: ${num_sorteado} metros.`
    //   );
    // }
  }

  function aumentar(){
    setNumero(numero + 1)
  }

  function diminuir(){
    setNumero(numero - 1)
  }

  return (

    <div className="sorteio-container">

      <Titulos texto={"Sorteio de Altura do Dinossauro"} emoji={"🎲"} />

      <button className="botao-sorteio" onClick={Sorteiar}>Sortear altura</button>

      <button className="botoes-sorteio" onClick={aumentar}>+</button>
      <div className="numero-sorteado">

        {numero} 
        {/* numero sorteado aparece na própia página e não no mais através do alert; */}

      </div>
      <button className="botoes-sorteio" onClick={diminuir}>-</button>

    </div>

  );

}

export default Sorteio;
