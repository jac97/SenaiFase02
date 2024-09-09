import "./ComponenteExercicio3_1.css"

function ComponenteExercicio3_1(props) {
  return (
    <div className="container-exer-3-1">

        <h5 className="mensagemUsuario">{props.mensagem}</h5>
        <h5 className="mensagemUsuario">Valor de prestação por mês: R${props.valor}</h5>
        <h5 className="mensagemUsuario">Obs.: {props.observacao}</h5>
      
    </div>
  )
}

export default ComponenteExercicio3_1
