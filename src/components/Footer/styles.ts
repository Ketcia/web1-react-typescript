import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
    width: 100%;
    height: 15rem;

    background: ${colors.dkBlue};
    align-items: center;

    display:inline-flex;

    picture{
        background-color: ${colors.dkBlue};
        margin: 0 2rem;
        img{
            background-color: ${colors.dkBlue};
            width: 100%;
            outline: 1rem solid ${colors.dkBlue};
        }
    }

    ul{
        width: 90%;
        display: flex;
        flex-direction: row;
        background-color: ${colors.dkBlue};
        li{
            width: 100%;
            list-style: none;
            background-color: ${colors.dkBlue};

            ul{
                display: flex;
                flex-direction: column;

                li{
                    list-style: none;
                    background-color: ${colors.dkBlue};
                }
            }
        }
        h1{
            font-size: 2rem;
            background-color: ${colors.dkBlue};
            color: white;
            font-family: Gemunu Libre Light;
        }
        a{
            text-decoration: none;
            font-size: 1.5rem;
            background-color: ${colors.dkBlue};
            color: white;
            font-family: Gemunu Libre ExtraLight;
        }
    }


`

   