import "./ComponenteExercicio5.css"

function ComponenteExercicio5(props) {
  return (
    
    <div className="container-exer-5">

      <h5 className="dados-exer-5">Chapa com mais experiência: {props.nomeChapa}</h5>
      <h5 className="dados-exer-5">Candidato à Presidência: {props.candidato}</h5>
      <h5 className="dados-exer-5">Vice Candidato: {props.vice}</h5>


    </div>
  )
}

export default ComponenteExercicio5
