import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --main-bg: #16171e;
        --text-color: #c3c6d3;
        --title-color: #ffffff;
        --primary-blue: #1b8dff;
        --secundary-blue: #4caeff;

        --primary-font: Roboto, sans-serif;
    }

    ::selection {
        background: #000d;
        color: inherit;
    }

    body {
        background-color: var(--main-bg);
        color: ${props => (props.darkColor ? 'var(--main-bg)' : 'var(--text-color)')};
        font-family: var(--primary-font);
        font-size: 1.2rem;

        input, button, textarea {
            font-family: var(--primary-font);
        }
        
        * {
            box-sizing: border-box;
        }
        
        p {
            color: var(--text-color);
            line-height: 1.7rem;
        }

        h1, h2, h3, h4, h5, h6 {
            color: var(--title-color);
            font-weight: 700;
            padding: 2rem;
        }

        h1 {
            font-size: 5rem;
        }

        h2 {
            font-size: 3.6rem;
        }

        h3 {
            position: relative;
            font-size: 2.4rem;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            padding: 30px;
            max-width: 780px;
            width: 70vw;

            h3 {
                padding: 40px 0 30px 0;
                line-height: 45px;

                &::after {
                    position: absolute;
                    top: -1.8rem;
                    content: '_';
                    font-weight: 300;
                    font-size: 3rem;
                    left: 0.2rem;
                    color: var(--secundary-blue);
                }
            }
        }

        strong {
            font-weight: 500;
            color: white;
        }

        @media (max-width: 960px) {
            .text-container {
                width: 90vw;
                max-width: 90vw;
            }
        }

        @media (max-width: 750px) {
            .text-container {
                width: 96vw;
                max-width: 96vw;
                font-size: 1rem;
            }
        }
    }
`;

export default GlobalStyle;