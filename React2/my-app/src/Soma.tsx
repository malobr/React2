import React, { useState } from 'react';
/*
    1 - Um compone  DEVE ser nomeado com a primeira letra maiuscula EX: (App)
    2 - Um componente DEVE ser uma Funcao EX: function, mas pode ser implementado como uma classe...
    3 - Um componente DEVE retornar apenas um elemento pai HTML EX: <div></div>
    4 - O componente DEVE ser exportado EX: (export default App;)
    5 - 
*/

function Soma() {
    
    //Declaracao de Variavel 
    const [contador, setContador] = useState(0);

    function clicar(){
        setContador(contador + 1);
        console.log(contador);
    }

    return (
    <div>
        <br></br>
            <label htmlFor="">Caixa 1: </label>
            <input type="text" />
            <br></br>
            <label htmlFor="">Caixa 2: </label>
            <input type="text" />
            <br></br>
            <br></br>
            <button onClick={clicar}>Calcular</button>
    </div>
    );
}

export default Soma;//Nome do arquivo
