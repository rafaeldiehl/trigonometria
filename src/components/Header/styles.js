import styled from 'styled-components';

const HeaderContainer = styled.header`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to bottom, #fff0  55%, #1b8dff22);

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

    .scroll-down {
        position: relative;
        height: 50px;
        width: 30px;
        border: 1px solid white;
        margin-top: 2rem;
        cursor: pointer;
        border-radius: 20px;

        .scroll-down-circle {
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background: white;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &::before, &::after {
            position: absolute;
            top: 110%;
            content: '';
            height: 10px;
            width: 10px;
            border: 1px solid white;
            transform: translate(-50%, -50%) rotate(45deg);
            border-top: transparent;
            border-left: transparent;
            animation: scroll-down 1s ease-in-out infinite;
        }

        &::after {
            top: 120%;
            animation-delay: .3s;
        }

        @keyframes scroll-down {
            0% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
            60% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                top: 160%;
            }
        }
    }

    @media (max-width: 600px) {
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