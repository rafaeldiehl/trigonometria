import styled from 'styled-components';

const HeaderContainer = styled.header`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to bottom, #fff0  55%, #1b8dff33);

    h1 {
        span {
            color: var(--secundary-blue);
        }
    }

    p {
        width: 70vw;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 1rem 1.6rem;
        margin-top: 2.2rem;
        border-radius: 8px;
        background: var(--primary-blue);
    }

    @media (max-width: 600px) {
        height: 100vh;
        
        h1 {
            font-size: 12vw;
        }

        p {
            width: 80vw;
            font-size: 1rem;
        }
    }
`;

export default HeaderContainer;