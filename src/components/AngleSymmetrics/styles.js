import styled from 'styled-components';

const AngleSymmetricsContainer = styled.section`
    background: #1b8dff22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    img {
        width: 60vw;
        margin-bottom: 3rem;
    }

    .text-container {
        .spacing-container {
            margin: 1rem 0 0.8rem;
        }

        .top-margin {
            margin-top: 2rem;
        }
    }

    .center {
        text-align: center;
    }

    .table-container {
        margin-bottom: 2rem;

        h4 {
            text-align: center;
            padding: 16px;
        }

        table {
            cursor: pointer;
            width: 80vw;
            max-width: 550px;

            td, th {
                padding: 10px;
                text-align: center;
                border: 2px solid #16273c;
                border-radius: 8px;
                font-weight: 500;
                transition: background .6s;
            }

            td {
                background: #1b8dff33;

                .underline {
                    border-bottom: 1px solid white;
                    margin-bottom: 3px;
                    padding-bottom: -1.6px;
                }

                &:hover {
                    background: #1b8dff88;
                    color: white;
                }
            }

            th {
                background: #112;
                color: white;

                .or {
                    font-weight: 400;
                    color: var(--text-color);
                }
            }
        }
    }

    @media (max-width: 800px) {
        img {
            width: 95vw;
            margin-bottom: 1rem;
        }
    }
`;

export default AngleSymmetricsContainer;