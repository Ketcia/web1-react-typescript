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
    @media (max-width: 778px){
        width: 100%;
        height: 10rem;
    
        background:${colors.dkBlue};
    
        display:inline-flex;
        justify-content: space-around;

        picture{
            display: none;
            background-color:${colors.dkBlue};
            margin: 0;
        }

        ul {
            li {
                width: 100%;
                list-style: none;
                background-color:${colors.dkBlue};
                ul{
                     li{
                        margin-left: 2rem;
                        list-style: none;
                        background-color:${colors.dkBlue};
                     }
                }
            }

            h1{
                margin-left: 2rem;
                width: 100%;
                font-size: 1.5rem;
                background-color:${colors.dkBlue};
                color: white;
                font-family: Gemunu Libre Light;
            }

            a{
                width: 60%;
                text-decoration: none;
                font-size: 1rem;
                background-color:${colors.dkBlue};
                color: white;
                font-family: Gemunu Libre ExtraLight;
            }

        }
    }
    @media (max-width: 500px){
        width: 100%;
        height: 10rem;
    
        background:${colors.dkBlue};
        align-items: center;
    
        display:inline-flex;
        justify-content: space-around;

        picture{
            display: none;
            background-color:${colors.dkBlue};
            margin: 0;
        }
        ul {
            h1{
                margin-left: 0;
                width: 100%;
                text-align: center;
                font-size: 1.5rem;
                background-color:${colors.dkBlue};
                color: white;
                font-family: Gemunu Libre Light;
                &:hover{
                    background-color:${colors.dkBlue};
                    ul{
                        display: block;
                        margin: 12 0 0 -12px;
                    }
                }
            }
            li{
                ul{
                    display: none;
                    position: absolute;
                    z-index: 1;
                    text-align: center;
                    width: 19%;
                    li{
                        display: block;
                    }
                }
            }
        }
    }
    
`

   