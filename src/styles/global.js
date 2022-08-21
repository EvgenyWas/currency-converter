import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.jpg'

const GlobalStyles = createGlobalStyle`
    /* RESET STYLES */
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        text-decoration: none;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    ul {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: inherit;
        color: inherit;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: inherit;
            color: inherit;
        }
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        font-family: inherit;
        cursor: pointer;
    }

    input {
        all: unset;
    }

    input[type=text]::-ms-clear { display: none; width : 0; height: 0; }
    input[type=text]::-ms-reveal { display: none; width : 0; height: 0; }
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {-webkit-appearance:none;}

    input, textarea {outline:none;}
    input:active, textarea:active {outline:none;}
    :focus {outline:none;}
    textarea {resize:none;}
    textarea {resize:vertical;}
    textarea {resize:horizontal;}

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* BASE STYLES */
    html {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100%;
        font-family: Helvetica, sans-serif;
        font-style: normal;
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        color: ${({ theme }) => theme.colors.textColor};
    }

    .App {
        min-height: 100vh;
        background: no-repeat url(${background});
        background-size: cover;
    }
`

export default GlobalStyles
