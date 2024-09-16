import "./ComponenteExercicio6.css"

function ComponenteExercicio6(props) {
  return (
    <div className="container-exer-6">

        <h5 className="dados-exer-6">Nome Completo: {props.nome}</h5>
        <h5 className="dados-exer-6">Valor Total das Diárias: R${props.valorTotalDiarias}</h5>
        <h5 className="dados-exer-6">Desconto Emocional: R${props.descontoAtendente}</h5>
        <h5 className="dados-exer-6">Desconto Fidelidade: R${props.descontoCliente}</h5>
        <h5 className="dados-exer-6">Valor Total a Pagar: R${props.valorTotalPagar}</h5>
      
    </div>
  )
}

export default ComponenteExercicio6
