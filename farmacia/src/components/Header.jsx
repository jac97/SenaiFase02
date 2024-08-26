import "./Header.css"
import Logo from "./Logo"

function Header() {

    function Sobre(){

        window.location.href = 'perfil.html'

    }

    return (

    <div className="header-container">

        <Logo/>

        <h1>Bem-vindo/a à</h1>

        <button className="botao-sobre" onClick={Sobre}>Sobre</button>

    </div>

  )
}

export default Header
