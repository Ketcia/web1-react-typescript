import * as S from "./styles";
import logo from "assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <S.Header>
            <picture>
                <img src={logo} alt="Logo do Site" />
                <h1>
                    <Link to="/"> Trepcismo</Link>
                    <Link to="/Login">Entrar</Link>
                </h1>
               
            </picture>
            
          
        </S.Header>
    );
};
export default Header;