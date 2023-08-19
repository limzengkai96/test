import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/' element={<Navbar/>} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
