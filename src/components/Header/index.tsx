import * as S from "./styles";
import logo from "assets/img/logo.png";

const Header = () =>{
    return (
        <S.Header>
            <picture>
                <img src={logo} alt="Logo do Site" />
                <h1>
                    <a href="index.html">Trepcismo</a>
                </h1>
            </picture>
        </S.Header>
    );
};
export default Header;