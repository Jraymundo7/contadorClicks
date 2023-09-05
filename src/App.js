import './App.css';
import freeLogo from './img/cat_web_development.png'
import Butom from './components/Botom'
import Contador from './components/Contador';
import {useState} from 'react'; //hooks

function App() {

  //hoks: nos permite agregar estados a  componentes funcionales
  const [ numClicks, setnumClicks ] = useState(0);

  const manejarClicks = () =>{
          setnumClicks( numClicks + 1 );
  }
  const reiniciarClick = () =>{
    setnumClicks(0);
  }

  return (
    <div className="App">
        <div className="freecodecamp-logo-contenedor">
            <img  
              className='freecodecamp-logo'
              src={ freeLogo }
              alt='Logo de freeCodeCamp'
            />
            <div className='contenedor-contador'>
                < Contador numClicks={ numClicks } />
                < Butom
                  text="Click"
                  esBotonClick={true}
                  manejarClicks={manejarClicks}
                />
                < Butom
                  text="Reiniciar"
                  esBotonClick={false}
                  manejarClicks={reiniciarClick}
                />
            </div>
        
        </div>
    </div>
  );
}

export default App;
