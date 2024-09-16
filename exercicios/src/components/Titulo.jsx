import "./Titulo.css"

function Titulo(props) {
  return (
    <div className="container-titulo">

        <p className="numero-exercicio">{props.texto} {props.emoji}</p>
      
    </div>
  )
}

export default Titulo