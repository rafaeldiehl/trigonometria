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
        background: var(--main-bg);
        color: ${props => (props.darkColor ? 'var(--main-bg)' : 'var(--text-color)')};
        font-family: var(--primary-font);
        font-size: 1.2rem;
        
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
            font-size: 2.4rem;
        }
    }
`;

export default GlobalStyle;