import PropTypes from 'prop-types';

import Boton from './Boton.jsx'

function Botones({presionado}){
    const caracterBotones = ['7', '8', '9', '/', '4', '5', '6', 'X', '1', '2', '3', '-', '0', '.', '=', '+']


    return(
        
        <div className='grid grid-cols-4 gap-5 w-11/12'>
            <Boton key={'C'} caracter={'C'} presionado={presionado} beC={true}/>

            {caracterBotones.map(caracterE => (

                <Boton key={caracterE} caracter={caracterE} presionado={presionado} beC={false}/>
            ))}
                
        </div>
        
    )
}
Botones.propTypes = {
    presionado: PropTypes.func.isRequired
};


export default Botones
