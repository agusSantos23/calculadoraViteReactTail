import Botones from './components/Botones.jsx'
import Pantalla from './components/Pantalla.jsx'

function App() {

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-around items-center flex-wrap  bg-blue-500 w-1/3 h-5/6 border-r-8 rounded-lg p-10">

        <Pantalla />
        <Botones />

      </div>
    </>
  )
}

export default App
