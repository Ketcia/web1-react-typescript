import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Faq = styled.main`
    background-color:${colors.grey};
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    h1{
        margin-top: 2rem;
        width: 25%;
        min-width: 8rem;
        padding: 1rem;
        background-color: ${colors.darkBg};
    
        text-align: center;
        color: white;
        font-family: Gemunu Libre;
    }
    div{
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
        padding: 2%;
        margin-bottom: 2rem;
        border-radius: 1rem;
        background-color:  ${colors.dkGrey};
            p{
                font-size:2rem;
                color:white;
                font-family: Gemunu Libre Light;
                padding-bottom: 2rem;
                background-color:${colors.dkGrey};
            }
            form{
                background-color:${colors.dkGrey};
                label{
                font-size:1.5rem;
                color:white;
                background-color:${colors.dkGrey};
               
                }
            
                textarea{
                    padding:0.5rem;
                    width:100%;
                    height:10rem;
                    border: 1px solid black;
                    font-size:1.5rem;
                    color: white;
                }
                button{
                    font-size:1rem;
                    color:white;
                    width:10rem;
                    border: 1px solid black;
                    margin:1rem;
                }
            }
            
            
        }

`