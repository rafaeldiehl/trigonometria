import React from 'react';

import HeaderContainer from './styles';

function Header () {
    return (
        <HeaderContainer>
            <h1>Trigonometria<span>.</span></h1>
            <p>Trigonometria é a área da matemática que estuda as relações envolvendo os lados de um triângulo retângulo, que um polígono que possui três ângulos.</p>
            <a href="#">Conheça</a>
        </HeaderContainer>
    );
};

export default Header;