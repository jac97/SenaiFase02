import Titulos from "../components/Titulos";
import "./Sorteio.css";

let num_sorteado,
  tamanho_dino = 35;

function Sorteio() {
  function Sorteiar() {
    num_sorteado = Math.floor(Math.random() * 101);

    if (num_sorteado === tamanho_dino) {
      alert(
        `Parabéns! Acertou a altura do dinossauro👏🏿👏🏿👏🏿\n\nAltura do Dinossauro: ${tamanho_dino} metros.\n\nAltura sorteada: ${num_sorteado} metros.`
      );
    } else {
      alert(
        `Errado! Você não acertou a altura do dinossauro😥😥😥\n\nAltura sorteada: ${num_sorteado} metros.`
      );
    }
  }

  return (
    <div className="sorteio-container">
      <Titulos texto={"Sorteio de Altura do Dinossauro"} emoji={"🎲"} />

      <button className="botao-sorteio" onClick={Sorteiar}>
        Adivinhar tamanho
      </button>
    </div>
  );
}

export default Sorteio;
