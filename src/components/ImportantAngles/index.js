import React from 'react';

import ImportantAnglesContainer from './styles';

function ImportantAngles () {
    return (
        <ImportantAnglesContainer>
            <div className="text-container">
                <h3>Ângulos Notáveis</h3>
                <p>A partir de deduções geométricas e cálculos matemáticos, conseguimos calcular as relações trigonométricas <strong>seno</strong>, <strong>cosseno</strong> e <strong>tangente</strong> dos ângulos de <strong>30°</strong>, <strong>45°</strong> e <strong>60°</strong> do triângulo retângulo. Junto aos ângulos temos seus correspondentes em radianos (lembrando-se sempre que <strong>π = 180°</strong>). A seguinte tabela ilustra essas relações:</p>
            </div>

            <div className="table-container">
                <table>
                    <tr>
                        <th>α</th>
                        <th>30° <span className="or">ou</span> π/6</th>
                        <th>45° <span className="or">ou</span> π/4</th>
                        <th>60° <span className="or">ou</span> π/3</th>
                    </tr>
                    <tr>
                        <th>Seno</th>
                        <td>1/2</td>
                        <td>√2/2</td>
                        <td>√3/2</td>
                    </tr>
                    <tr>
                        <th>Cosseno</th>
                        <td>√3/2</td>
                        <td>√2/2</td>
                        <td>1/2</td>
                    </tr>
                    <tr>
                        <th>Tangente</th>
                        <td>√3/3</td>
                        <td>1</td>
                        <td>√3</td>
                    </tr>
                </table>
            </div>
        </ImportantAnglesContainer>
    );
};

export default ImportantAngles;