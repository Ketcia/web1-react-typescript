import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Galeria = styled.main `

    background-color:${colors.dkGrey};
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;

    h1{
    margin-top: 2rem;
    width: 20%;
    min-width: 8rem;
    padding: 1rem;
    background-color:${colors.dkGrey};
    
    text-align: center;
    color: white;
    font-size: 2rem;
    font-family: Gemunu Libre;
    }

    div{
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 2%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    background-color:${colors.dkGrey};
            picture{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color:${colors.dark};
                    img{
                width: 30%;
                padding: 2%;
                background-color:${colors.dkGrey};
                }

            }
        }

`