import "./Media.css"

function Media(props) {
  return (
    <div className="media-container">

      <div>
              <h2>Nome: {props.nome}</h2>
              <p>Média Ponderada:{props.media}</p> 
              {props.imagem}

      </div>
      
    </div>
  )
}

export default Media
