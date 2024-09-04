import "./Media.css"

function Media(props) {
  return (
    <div className="media-container">

        <h1>{props.nome} {props.media} {props.imagem}</h1>
      
    </div>
  )
}

export default Media
