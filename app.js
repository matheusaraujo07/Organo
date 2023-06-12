import { useState } from 'react';
import Banner from './Componentes/Banner/banner';
import Formulario from './Componentes/Formulario';

function App() {
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log("nova brende")
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador=> aoNovoColaboradorCadastrado(colaborador)}/>
    </div>
  );
}

export default App;

