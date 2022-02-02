import React from "react"
import * as S from "./styles";
import imgmain from "../../assets/img/flopa.png";

const Galeria = () =>{
    return (
        <S.Galeria>
            <h1>Galeria</h1>
            <div>
                <section>
                    <picture>
                        <img src={imgmain} alt="Logo do Site" />   
                        <img src={imgmain} alt="Logo do Site" />   
                        <img src={imgmain} alt="Logo do Site" />   
                         
                    </picture>
                </section>
                <section>
                    <picture>
                        <img src={imgmain} alt="Logo do Site" />   
                        <img src={imgmain} alt="Logo do Site" />   
                        <img src={imgmain} alt="Logo do Site" /> 
                    </picture>
                </section>
            </div>
        </S.Galeria>
    );
};

export default Galeria;