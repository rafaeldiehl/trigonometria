import styled from 'styled-components';

const FooterContainer = styled.section`
    background: var(--main-bg);
    text-align: center;
    padding: 10px;
    font-size: 1rem;

    a {
        text-decoration: none;
        color: var(--secundary-blue);

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default FooterContainer;