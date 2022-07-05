import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

:root {
    --background: #000000;
    --white: #FFFFFF
}

@media (max-width:1080px) {
    html {
        font-size: 93.75%; 
    }
}

@media (max-width:720px) {
    html {
        font-size: 87.5%;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 10px
    }
}

body {
    background: var(--background);
    color: var(--white);

    font-family: Shrikhand;
}

body, input, button, textarea, select {
    font-size: 400 1rem 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`