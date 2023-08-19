import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar />}></Route>
      
    </BrowserRouter>

  );
}

export default App;
