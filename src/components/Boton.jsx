import PropTypes from 'prop-types';

function Boton({caracter, beC, presionado}){

    return(
        
        <button 
            className={`${beC && "col-start-4"}  bg-blue-200 text-blue-800 text-3xl py-5 rounded-xl transition-border ease-in-out duration-200 hover:border-r-8 focus:border-blue-800 active:border-red-400`}
            onClick={() => presionado(caracter)} 
        >
            {caracter}
        </button>
        
    )
}


Boton.propTypes = {
    caracter: PropTypes.string.isRequired,
    beC: PropTypes.bool.isRequired,
    presionado: PropTypes.func.isRequired
};

export default Boton 