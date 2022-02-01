import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Formulario = styled.main`
    background-color:${colors.dkGrey};
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;

    form {
        border:2rem;
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
        padding: 2%;
        margin-bottom: 2rem;
        border-radius: 1rem;
        background-color:${colors.dkGrey};

        div {
        display: flex;
        margin: 1rem 0;
        border: 0.2rem solid ${colors.white};
        background-color:${colors.dkGrey};
        border-radius: 0.5rem;
            input {
                margin-left:1rem;
                background-color:${colors.darkBg};
                width:40%;
                height:3rem;
                font-size:1.5rem;
                border:1px;
                padding:0.5rem;
                border-style: solid;
            }
        }
        button{
            margin:2rem;
            border:1px;
            padding:0.5rem;
            border-style: solid;
            border-radius:1rem;
            background-color:${colors.darkBg};
            font-size: 1rem;
            cursor: pointer;
        }
        a{
            margin:2rem;
            border:1px;
            padding:0.5rem;
            border-style: solid;
            border-radius:1rem;
            background-color:${colors.darkBg};
            font-size: 1rem;
            cursor: pointer;
            text-decoration: none;
            color:black;
        }
    }
  }
`