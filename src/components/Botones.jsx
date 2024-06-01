import Boton from './Boton.jsx'

function Botones(){



    return(
        <>
        <div className='grid grid-cols-4 gap-5 w-11/12'>
            <Boton caracter={'7'} />
            <Boton caracter={'8'} />
            <Boton caracter={'9'} />
            <Boton caracter={'/'} />
            <Boton caracter={'4'} />
            <Boton caracter={'5'} />
            <Boton caracter={'6'} />
            <Boton caracter={'X'} />
            <Boton caracter={'1'} />
            <Boton caracter={'2'} />
            <Boton caracter={'3'} />
            <Boton caracter={'-'} />
            <Boton caracter={'0'} />
            <Boton caracter={'.'} />
            <Boton caracter={'='} />
            <Boton caracter={'+'} />

        </div>
        </>
    )
}

export default Botones
