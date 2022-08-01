import logo from "../../images/Mask Group.png"
import { HeaderStyled } from "./styles"

const Header = () => {
    return (
        <HeaderStyled>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="inputSearch">
                    <form action="">
                        <input type="text" placeholder="Digitar Pesquisa" />
                        <button type="button">Pesquisar</button>
                    </form>
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header