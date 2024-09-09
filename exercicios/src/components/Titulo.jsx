import "./Titulo.css"

function Titulo(props) {
  return (
    <div className="container-titulo">

        <h1>{props.texto} {props.emoji}</h1>
        <p className="texto-enunciado">Lista de Exercícios - Programação de Aplicativos - Prof. Rafael Lindemann Duarte</p>
      
    </div>
  )
}

export default Titulo