import PropTypes from 'prop-types';

function Pantalla({ expresion, resultado }) {
    
  return (
    <div className="w-11/12 h-40 bg-blue-200 rounded-md flex justify-around items-end flex-col p-3 text-blue-800 border-r-8 border-blue-800">
      <h2 className="text-3xl">{expresion}</h2>
      <h1 className="text-5xl">{resultado}</h1>
    </div>
  );
}

Pantalla.propTypes = {
  expresion: PropTypes.string.isRequired,
  resultado: PropTypes.string.isRequired,
};

export default Pantalla;
