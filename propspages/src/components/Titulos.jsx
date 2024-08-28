import './Titulos.css'

function Titulos(props) {

  return (

    <div className='titulo-container'>

        <h1>{props.texto} {props.emoji}</h1>
      
    </div>

  )

}

export default Titulos
