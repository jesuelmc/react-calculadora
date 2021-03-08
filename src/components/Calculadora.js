import React from 'react';
import Input1 from './Input1';
import Input2 from './Input2';
import InputResultado from './InputResultado';
import BotonSuma from './BotonSuma';
import BotonResta from './BotonResta';
import BotonMultiplicacion from './BotonMultiplicacion';
import BotonDivision from './BotonDivision';
import BotonResultado from './BotonResultado'
import './Calculadora.css'
const Calculadora = ({props}) => (
    <div>
        <div className="title">
            <h2>CALCULADORA</h2>
        </div>
        <div>
            <div className="container">
                <Input1/>
                <Input2/>
                <InputResultado/>
            </div>
            <div className="container">
                <BotonSuma/>
                <BotonResta/>
                <BotonMultiplicacion/>
                <BotonDivision/>
                <BotonResultado/>
            </div>
        </div>
    </div>
);

export default Calculadora;