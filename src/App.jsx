
import React, { useState } from 'react';
import MusicBox from './MusicBox';
import './App.css'
import { canales } from './canales';

function App() {
  const [chanel, setChanel] = useState(canales[0]);
  const [urlInput, setUrlInput] = useState("");
  const [canalPrueba, setCanalPrueba] = useState({ nombre: "canalprueba", direccion: "" }); // Variable para el canal de prueba
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleUrlInputChange = (event) => {
    setUrlInput(event.target.value);
  };

  const handleUrlSubmit = () => {
    setCanalPrueba({ nombre: urlInput, direccion: urlInput }); // Actualiza canalPrueba con la URL ingresada
    setChanel(canalPrueba); // Actualiza el canal actual con canalPrueba
  };

  // Función para filtrar la lista de canales según la categoría seleccionada
  const filterChannelsByCategory = () => {
    
    if (selectedCategory === 'todos') {
      return canales;
    } else {
      return canales.filter(canal => canal.categoria === selectedCategory);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>#PABLOTV</h1>
      </header>
      <main>
        <div className='canales'>
          <div className="selCategoria">
            <p>CATEGORIA:</p>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="todos">Todos</option>
              <option value="MUSICA">MUSICA</option>
              <option value="ARGENTINA">Argentina</option>
              {/* Agrega más opciones según las categorías que necesites */}
            </select>
          </div>

          <div className="listaCanales">
            {
              filterChannelsByCategory().map((canal) => (
                <img className="logoCanal" onClick={() => setChanel(canal)} src={canal.imagen} alt="" key={canal.nombre} />
              ))
            }
          </div>
        </div>
        <div className="player"><MusicBox canal={chanel} /></div>
      </main>
      <label htmlFor="texto">Ingresa URL:</label>
      <input type="url" id="texto" name="texto" value={urlInput} onChange={handleUrlInputChange} />
      <button onClick={handleUrlSubmit}>PROBAR URL</button>
      <h2>{console.log(chanel)}</h2>
    </div>
  );
}

export default App;
