import './App.css';
import Form from './Form.jsx'
import TypeQuote from './api';
//Please add <TypeQuote /> component in the return div of App() function


function App() {
  return (
    <div className="App">
      <Form />
      <TypeQuote />
    </div>
  );
}

export default App;
