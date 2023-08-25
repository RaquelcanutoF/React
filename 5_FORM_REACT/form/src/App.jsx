import "./App.css";
import MyForm from "./components/MyForm";


function App() {
  
  return (
    <div className="App">
      <h1>Form em React</h1>
     <MyForm userName="Kel" userEmail="kel@email.com.br" />
    </div>
  );
}

export default App;
