import styled from 'styled-components';

const AngleSignsContainer = styled.section`
    background: #1b8dff22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-bottom: 5rem;

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        padding: 30px;
        max-width: 780px;

        h3 {
            padding: 40px 0 30px 0;

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

    .quadrants {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 750px;
        width: 70vw;

        .quadrant-container {
            text-align: center;

            .circle-quadrant {
                cursor: pointer;
                height: 200px;
                width: 200px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .circle-quadrant-part {
                    height: 100px;
                    width: 100px;
                    border: 2px solid white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 3rem;
                    transition: background .6s;
                    
                    &:nth-child(1) {
                        border-radius: 100% 0 0 0;
                        padding-top: 15px;
                        padding-left: 15px;
                    }
                    &:nth-child(2) {
                        border-radius: 0 100% 0 0;
                        padding-top: 15px;
                        padding-right: 15px;
                    }
                    &:nth-child(3) {
                        border-radius: 0 0 0 100%;
                        padding-bottom: 15px;
                        padding-left: 15px;
                    }
                    &:nth-child(4) {
                        border-radius: 0 0 100% 0;
                        padding-bottom: 15px;
                        padding-right: 15px;
                    }

                    &:hover {
                        color: white;
                    }
                }

                .less {
                    background: #1b8dff33;
                    font-size: 5rem;

                    &:hover {
                        background: #1b7ddd;
                    }
                }

                .plus {
                    background: #ff003066;

                    &:hover {
                        background: #ff0030;
                    }
                }
            }
        }
    }

    @media (max-width: 960px) {
        .quadrants {
            width: 85vw;
            max-width: 85vw;
        }
    }

    @media (max-width: 750px) {
        .quadrants {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default AngleSignsContainer;