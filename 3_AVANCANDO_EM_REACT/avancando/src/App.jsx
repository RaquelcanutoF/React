import "./App.css";

// 2 - imagem em assets
import speedway from "./assets/speedway.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderizacao de lista
import ListRender from "./components/ListRender";

// 7 - render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props
import CarDetails from "./components/CarDetails";

// 11 - renderização de listas com componentes
const cars = [
{id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
{id: 2, brand: "KIA", color: "Branco", km: 2000},
{id: 3, brand: "Renault", color: "Azul", km: 30000},
];

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - funcao em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import {useState} from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {  
  // 14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={speedway} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - render de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName  name="Luara" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={123456} color="Branco" />
      <CarDetails km={89435} color="Azul" brand="Audi" />
      {/* 11 - renderizacao de componentes */}
      {cars.map((car) =>(
      <CarDetails 
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
      />
      ))};
      {/* 12 - fragment */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container> 
      <Container>
       <div>
        <h2>Teste</h2>
        <p>Meu container</p>
       </div>
      </Container>  
       {/* 14 - funcao em prop */}   
       <ExecuteFunction myFunction={showMessage} />
       {/* 15 - state lift */} 
       <Message msg={message} />
       <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}
export default App;
