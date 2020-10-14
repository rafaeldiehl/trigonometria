import React from 'react';

import HeaderContainer from './styles';

function Header () {
    return (
        <HeaderContainer>
            <h1>Trigonometria<span>.</span></h1>
            <p>Trigonometria é a área da matemática que estuda as relações envolvendo os lados de um triângulo retângulo, um polígono que possui três ângulos.</p>
            <div className="scroll-down">
                <div className="scroll-down-circle"></div> 
            </div>
        </HeaderContainer>
    );
};

export default Header;