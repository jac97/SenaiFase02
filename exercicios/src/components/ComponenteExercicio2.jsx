import "./ComponenteExercicio2.css"

function ComponenteExercicio2(props) {
  return (
    <div className="container-exer-2">

        <h5>Número digitado: {props.numero}</h5>
        <p>Resultado: {props.resultado}</p>
      
    </div>
  )
}

export default ComponenteExercicio2
