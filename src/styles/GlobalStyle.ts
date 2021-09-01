import {createGlobalStyle} from "styled-components"


export default createGlobalStyle`
    @font-face{
        font-family: 'Gemunu Libre';
        font-style: normal;
        font-weight: 400;
        src: url('assets/fonts/GemunuLibre-Regular.woff')format('woff');
    }
*{
    background-color: #363636;
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:"Gemunu Libre"
}

body{
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    min-width: 480px;
}
`

export const colors = {
    darkBg: "#363636",
    black: "#000000",
    grey: "#D9D9D9",
    dark: "#262626",
    dkGrey: "#595959",
    dkBlue: "#243040",
    white: "ffffff"

}