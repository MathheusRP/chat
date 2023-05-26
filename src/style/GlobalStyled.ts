import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    h1, h2, h3, h4, p, span, input, label, button {
        font-family: 'Bebas Neue', sans-serif;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        color: var(--grey-1);
    }

    ul, li {
        list-style: none;
    }

    :root {
        --grey-1: #282828;
        --grey-2: #C8C8C8;

        --grey-3: rgb(90, 90, 90);
        --grey-4: rgb(120, 120, 120);
        --grey-5: rgb(150, 150, 150);
        --grey-6: rgb(170, 170, 170);
        --grey-7: rgb(200, 200, 200);
        --grey-8: rgb(230, 230, 230);

        --color-1: #e9c46a;
        --color-2: #165895;
        --color-3: #e76f51;
    }
`