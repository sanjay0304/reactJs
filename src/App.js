import './App.css';
import CounterApp from './CounterApp/CounterApp';
import Login from './Login/Login';
import Header from './Header/Header';
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return(<div>
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route exact="true" path="Login" element={<Login/>} />
      <Route exact="true" path="/" element={<CounterApp/>} />
  </Routes>
    
    
  {/* <Routes>
      <route></route>
  </Routes> */}
  
  </BrowserRouter>
  
  </div>
  )
}

export default App;
