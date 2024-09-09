import "./ComponenteExercicio3.css"

function ComponenteExercicio3(props) {
  return (
    <div className="container-exer-3">

        <h5 className="dados">Salário: {props.salario}</h5>
        <h5 className="dados">Empréstimo: {props.emprestimo}</h5>
        <h5 className="dados">Prestações: {props.prestacao}</h5>
      
    </div>
  )
}

export default ComponenteExercicio3
