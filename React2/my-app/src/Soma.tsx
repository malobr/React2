import React, { useState } from 'react';

function Soma() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultado, setResultado] = useState('');

    const handleCalculate = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        const sum = isNaN(num1) || isNaN(num2) ? 'Por favor, insira números válidos.' : `O resultado da soma é: ${num1 + num2}`;
        setResultado(sum);
    };

    return (
        <div>
            <h1>Soma de dois numeros: </h1>
            <br />
            <label htmlFor="number1">Número 1:</label>
            <input 
                type="number" 
                id="number1" 
                value={number1} 
                onChange={(e) => setNumber1(e.target.value)} 
            />
            <br />
            <label htmlFor="number2">Número 2:</label>
            <input 
                type="number" 
                id="number2" 
                value={number2} 
                onChange={(e) => setNumber2(e.target.value)} 
            />
            <br />
            <button onClick={handleCalculate}>Calcular</button>
            <br />
            <textarea 
                value={resultado} 
                readOnly  
                style={{ marginTop: '30px' }} 
            />
        </div>
    );
}

export default Soma;
/**
 * import React, { useState } from 'react';

function Soma() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultado, setResultado] = useState('');

    const handleCalculate = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        const sum = isNaN(num1) || isNaN(num2) ? 'Por favor, insira números válidos.' : `O resultado da soma é: ${num1 + num2}`;
        setResultado(sum);
    };

    return (
        <div>
            <label htmlFor="number1">Número 1:</label>
            <input 
                type="number" 
                id="number1" 
                value={number1} 
                onChange={(e) => setNumber1(e.target.value)} 
            />
            <br />
            <label htmlFor="number2">Número 2:</label>
            <input 
                type="number" 
                id="number2" 
                value={number2} 
                onChange={(e) => setNumber2(e.target.value)} 
            />
            <br />
            <button onClick={handleCalculate}>Calcular</button>
            <br />
            {resultado && (
                <div 
                    style={{
                        marginTop: '10px',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '4px',
                        width: '300px',
                        minHeight: '50px',
                        textAlign: 'center'
                    }}
                >
                    {resultado}
                </div>
            )}
        </div>
    );
}

export default Soma;

 */