import React from "react"
import * as S from "./styles";

const Faqmain = () =>{
    return(
        <S.Faq>
            <h1>Converse Conosco</h1>
            <div>
            <p>Página destinada a sugestões e iterações</p><br/>
            <form method="POST" action="">
                <label>Deixe sua interação aqui:</label><br/>
                <textarea name="interacao" id="int"required></textarea><br/>
                <button type="submit">Enviar</button>
                <button type="reset">Limpar</button>
            </form>
            </div>
        </S.Faq>
    )
}

export default Faqmain