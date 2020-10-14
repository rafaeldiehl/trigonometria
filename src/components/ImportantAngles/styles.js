import styled from 'styled-components';

const ImportantAnglesContainer = styled.section`
    background: #1b8dff22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    .table-container {

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
`;

export default ImportantAnglesContainer;