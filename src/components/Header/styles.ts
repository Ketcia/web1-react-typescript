import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
    width: 100%;
    height: 3.5rem;
    background-color:${colors.black};
    align-items: center;

    picture{
    display: flex;
    flex-direction: row;
    margin: 0 1rem;
    background-color: black;
        img{
            padding-top: 0.5rem;
            width: 3rem;
            background-color: black;
        }
    }

    h1{
    margin-top: 1rem;
    font-family: Gemunu Libre;
    width: 100%;
    background-color: black;
        a{
            margin:1rem;
            color: white;
            text-decoration: none;
            background-color: black;
        }
    }
`