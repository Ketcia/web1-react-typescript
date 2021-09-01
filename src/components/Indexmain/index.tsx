import * as S from "./styles";
import lobo from "assets/img/main.png";

const Indexmain = () =>{
    return (
        <S.Main>
            <picture>
                <img src={lobo} alt="Fundo"/>
            </picture>
        </S.Main>
    );
};
export default Indexmain;