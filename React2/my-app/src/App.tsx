import React from 'react';
import Soma from './Soma';
/*
  1 - Um compone  DEVE ser nomeado com a primeira letra maiuscula EX: (App)
  2 - Um componente DEVE ser uma Funcao EX: function, mas pode ser implementado como uma classe...
  3 - Um componente DEVE retornar apenas um elemento pai HTML EX: <div></div>
  4 - O componente DEVE ser exportado EX: (export default App;)
  5 - 
*/

function App() {
  return (
    <div>
      <Soma />
    </div>
  );
}

export default App;
