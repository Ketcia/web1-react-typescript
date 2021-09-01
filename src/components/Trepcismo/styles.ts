import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
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

        section{
            color: white;
            font-size: 1.5rem;

            h2{
                font-family: Gemunu Libre;
                padding: 1rem 0;
                background-color:  ${colors.dkGrey};
            }
            p{
                font-family: Gemunu Libre Light;
                padding-bottom: 10rem;
                background-color:${colors.dkGrey};
            }
            ol{
                padding: 1rem;
                background-color:${colors.dkGrey};

                li{
                    font-family: Gemunu Libre Light;
                    background-color:${colors.dkGrey};
                }
            }

        }
    }
    @media (max-width: 778px){
        div{
            section{
            color: white;
            font-size: 1rem;
                h2{
                    font-family: Gemunu Libre;
                    padding: 0.5rem 0;
                    background-color: #595959;
                    font-size: 1.5rem;
                }
            }
        } 
    }
    @media (max-width: 500px){
        h1{
            margin-top: 2rem;
            width: 25%;
            min-width: 8rem;
            padding: 1rem;
            background-color: #262626;
            
            text-align: center;
            color: white;
            font-family: Gemunu Libre;
            font-size: 30px;
        }
    }
`