import "./Header.css"
import Logo from "./Logo"

function Header() {

    return (

    <div className="header-container">

        <Logo/>

        <h1>Bem-vindo/a à</h1>

        <button className="botao-sobre">Cadastrar</button>

    </div>

  )
}

export default Header
