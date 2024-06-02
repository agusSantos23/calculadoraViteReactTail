import { useState } from 'react';
import Botones from './components/Botones.jsx';
import Pantalla from './components/Pantalla.jsx';

function App() {
  const [expresion, setExpresion] = useState('0');
  const [resultado, setResultado] = useState('');

  function presionado(caracter) {
    switch (caracter) {
      case '=':
        try {
          setResultado(eval(expresion.replace('X', '*')).toString());
          setExpresion('0');
          
        } catch {
          setResultado('Error');
        }
        break;
      case 'C':
        setExpresion('0');
        setResultado('');
        break;
      default:
        if (expresion === '0') {
          setExpresion(caracter);
        } else {
          setExpresion(expresion + caracter);
        }
        break;
    }
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around items-center flex-wrap bg-blue-500 w-1/3 h-5/6 border-r-8 border-blue-800 rounded-lg p-10">
      <Pantalla expresion={expresion} resultado={resultado} />
      <Botones presionado={presionado} />
    </div>
  );
}

export default App;
