import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import DevItem from '../../components/DevItem';
import DevForm from '../../components/DevForm';


import '../../global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: Bloco isolado de HTML,CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que o componente pai passa pro componente filho
//Estado: Informações mantidas pelo componente (lembrar: imutabilidade)


function App() {
  //estados
  const [devs, setDevs] = useState([]);

  useEffect(() => {

    loadDevs();
  }, []);

  async function loadDevs() {
    const response = await api.get('/devs');
    setDevs(response.data);
  }

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);

  }

  async function loadDeleteDevs() {
    await loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {
            devs.map(dev => <DevItem key={dev._id} dev={dev} callback={loadDeleteDevs} />)
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
