import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/navbar' element={<Navbar/>} ></Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
