import React from 'react';

import Image from '../../images/ciclo-trigonometrico.png';

import AnglesSymmetricsContainer from './styles';

function AnglesSymmetrics () {
    return (
        <AnglesSymmetricsContainer>
            <div className="text-container">
                <h3>Arcos Simétricos</h3>
                <p>Para entender a <strong>simetria</strong> do ciclo trigonométrico, precisamos analisar o ciclo trigonométrico abaixo, que contém os valores dos ângulos notáveis (junto de seus correspondentes em radianos) e seus simétricos.</p>
            </div>

            <img src={Image} alt="Ciclo trigonométrico" />

            <div className="text-container center">
                <p>A partir da análise da imagem e do conhecimento dos sinais dos quadrantes, podemos concluir que:</p>

                <div className="spacing-container">
                    <p><strong>sen (45°) = sen (135°)</strong></p>
                    <p><strong>cos (135°) = cos (225°)</strong></p>
                    <p><strong>sen (225º) = sen (315°)</strong></p>
                    <p><strong>cos (45º) = - cos (135º)</strong></p>
                    <p><strong>sen (45º) = - sen (315º)</strong></p>
                </div>

                <p>Também podemos encontrar os simétricos fazendo determinadas perguntas para cada quadrante. Para o <strong>2º Quadrante</strong> podemos perguntar "<strong>quanto falta para 180°?</strong>"; no <strong>3º Quadrante</strong> a pergunta é "<strong>quanto passou de 180°?</strong>" e por fim devemos verificar "<strong>quanto falta para 360°?</strong>" no <strong>4º Quadrante</strong>. Por exemplo, quando estamos no segundo quadrante e queremos encontrar o simétrico de <strong>45°</strong>, fazemos <strong>180° - 45 = 135°</strong> (que é positivo no caso do seno, e negativo no caso do cosseno e tangente).</p>

                <p className="top-margin">A seguir, as tabelas que mostram o seno, cosseno e tangente dos simétricos dos ângulos notáveis em cada quadrante e adicionalmente os seno, cosseno e tangente dos ângulos 0°, 90°, 180°, 270° e 360°.</p>
            </div>

            <div className="table-container">
                <h4>2º Quadrante</h4>
                <table>
                    <tr>
                        <th>α</th>
                        <th>120° <span className="or">ou</span> 2π/3</th>
                        <th>135° <span className="or">ou</span> 3π/4</th>
                        <th>150° <span className="or">ou</span> 5π/6</th>
                    </tr>
                    <tr>
                        <th>Seno</th>
                        <td>√3/2</td>
                        <td>√2/2</td>
                        <td>1/2</td>
                    </tr>
                    <tr>
                        <th>Cosseno</th>
                        <td>- 1/2</td>
                        <td>- √2/2</td>
                        <td>- √3/2</td>
                    </tr>
                    <tr>
                        <th>Tangente</th>
                        <td>- √3</td>
                        <td>- 1</td>
                        <td>- √3/3</td>
                    </tr>
                </table>
            </div>

            <div className="table-container">
                <h4>3º Quadrante</h4>
                <table>
                    <tr>
                        <th>α</th>
                        <th>210° <span className="or">ou</span> 7π/6</th>
                        <th>225° <span className="or">ou</span> 5π/4</th>
                        <th>240° <span className="or">ou</span> 4π/3</th>
                    </tr>
                    <tr>
                        <th>Seno</th>
                        <td>- 1/2</td>
                        <td>- √2/2</td>
                        <td>- √3/2</td>
                    </tr>
                    <tr>
                        <th>Cosseno</th>
                        <td>- √3/2</td>
                        <td>- √2/2</td>
                        <td>- 1/2</td>
                    </tr>
                    <tr>
                        <th>Tangente</th>
                        <td>√3/3</td>
                        <td>1</td>
                        <td>√3</td>
                    </tr>
                </table>
            </div>

            <div className="table-container">
                <h4>4º Quadrante</h4>
                <table>
                    <tr>
                        <th>α</th>
                        <th>300° <span className="or">ou</span> 5π/3</th>
                        <th>315° <span className="or">ou</span> 7π/4</th>
                        <th>330° <span className="or">ou</span> 11π/6</th>
                    </tr>
                    <tr>
                        <th>Seno</th>
                        <td>- 1/2</td>
                        <td>- √2/2</td>
                        <td>- √3/2</td>
                    </tr>
                    <tr>
                        <th>Cosseno</th>
                        <td>√3/2</td>
                        <td>√2/2</td>
                        <td>1/2</td>
                    </tr>
                    <tr>
                        <th>Tangente</th>
                        <td>- √3/3</td>
                        <td>- 1</td>
                        <td>- √3</td>
                    </tr>
                </table>
            </div>

            <div className="table-container">
                <h4>0°, 90°, 180°, 270° e 360°</h4>
                <table>
                    <tr>
                        <th>α</th>
                        <th>0° <span className="or">ou</span> 0π</th>
                        <th>90° <span className="or">ou</span> π/2</th>
                        <th>180° <span className="or">ou</span> π</th>
                        <th>270° <span className="or">ou</span> 3π/2</th>
                        <th>360° <span className="or">ou</span> 2π</th>
                    </tr>
                    <tr>
                        <th>Sen</th>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>-1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Cos</th>
                        <td>1</td>
                        <td>0</td>
                        <td>-1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Tg</th>
                        <td>0</td>
                        <td>∞</td>
                        <td>0</td>
                        <td>-∞</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
        </AnglesSymmetricsContainer>
    );
};

export default AnglesSymmetrics;