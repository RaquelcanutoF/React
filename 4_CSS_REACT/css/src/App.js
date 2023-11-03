import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from "react";
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Lago");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ 
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red" 
        }}
      >
        Elemento estilizado pelo inline
      </p>
      <p style={{ 
          color: "pink", 
          padding: "50px", 
          borderTop: "4px solid red" 
          }}
      >
        Elemento estilizado pelo inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 
        style={
          name === "Lago" 
          ? { color: "green", backgroundColor: "#000" } 
          : null 
        }
      >
        Teste nome
      </h2>
        {/* Classe dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este titulo vai ter classe dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
      
    </div>
  );
}

export default App;
