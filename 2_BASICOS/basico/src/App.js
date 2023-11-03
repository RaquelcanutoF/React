// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

import Events from './components/Events';

// Styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>O Basico em React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
};

export default App;