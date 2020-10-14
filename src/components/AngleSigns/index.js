import React from 'react';

import AngleSignsContainer from './styles';

function AngleSigns () {
    return (
        <AngleSignsContainer>
            <div className="text-container">
                <h3>Sinais dos quadrantes</h3>
                <p>Os ângulos possuem valores parecidos de seno, cosseno e tangente, e a <strong>distinção ocorre pelo sinal</strong>. Podemos ver a distinção entre os sinais, abaixo:</p>
            </div>

            <div className="quadrants">
                <div className="quadrant-container">
                    <h4>Seno</h4>
                    <div className="circle-quadrant">
                        <div className="circle-quadrant-part plus">+</div>
                        <div className="circle-quadrant-part plus">+</div>
                        <div className="circle-quadrant-part less">-</div>
                        <div className="circle-quadrant-part less">-</div>
                    </div>
                </div>
                <div className="quadrant-container">
                    <h4>Cosseno</h4>
                    <div className="circle-quadrant">
                        <div className="circle-quadrant-part less">-</div>
                        <div className="circle-quadrant-part plus">+</div>
                        <div className="circle-quadrant-part less">-</div>
                        <div className="circle-quadrant-part plus">+</div>
                    </div>
                </div>
                <div className="quadrant-container">
                    <h4>Tangente</h4>
                    <div className="circle-quadrant">
                        <div className="circle-quadrant-part less">-</div>
                        <div className="circle-quadrant-part plus">+</div>
                        <div className="circle-quadrant-part plus">+</div>
                        <div className="circle-quadrant-part less">-</div>
                    </div>
                </div>
            </div>
        </AngleSignsContainer>
    );
};

export default AngleSigns;