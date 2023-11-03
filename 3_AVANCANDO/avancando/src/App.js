import {useState} from 'react';
import './App.css';

import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
    //const name = "Joaquim";
    const [userName] = useState("Amélia");

    const cars = [
      {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
      {id: 2, brand: "Fusca", color: "Preto", newCar: false, km: 1000},
      {id: 3, brand: "Kia", color: "Verde", newCar: true, km: 20000},
    ];

    function showMessage() {
      console.log("Evento do componente pai!");
    }

    const [message, setMessage] = useState("");
      
    const handleMessage = (msg) => {
        setMessage(msg);
    }


  return (
    <div className="App">
      <h1>Avancando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/imgflower.jpg" alt="Um sapo em seu habitat natural" />
      </div>
      {/*Imagem em asset */}
      <div>
      <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      {/* reproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={24500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
      <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
      />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* Container */}
      <Container myValue="testing">
          <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
          <p>Testando o container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

    </div>
  );
}

export default App;
