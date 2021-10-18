import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Formulario = styled.form`

    background-color:${colors.dkGrey};
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;

        
    div{
    border:2rem;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 2%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    background-color:${colors.dkGrey};

    label{
        font-size:2rem;
        color:white;
        margin:1rem;
        
    }
    input{
        
        margin-left:1rem;
        background-color:${colors.dkGrey};
        width:40%;
        height:3rem;
        font-size:1.5rem;
        border:1px;
        padding:0.5rem;
        border-style: solid;

    }
    button{
        margin:2rem;
        border:1px;
        padding:0.5rem;
        border-style: solid;
        border-radius:1rem;
        background-color:${colors.dkGrey};
        font-size: 1rem;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        margin:2rem;
        border:1px;
        padding:0.5rem;
        border-style: solid;
        border-radius:1rem;
        background-color:${colors.dkGrey};
        font-size: 1rem;
        color:black;
    }

    }

    
`
