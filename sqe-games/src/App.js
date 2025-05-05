import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Puzzle1 from './components/pages/Puzzle1';
import Puzzle2 from './components/pages/Puzzle2';
import Puzzle3 from './components/pages/Puzzle3';
import Puzzle4 from './components/pages/Puzzle4';
import Puzzle5 from './components/pages/Puzzle5';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route path="/puzzle1" element={<Puzzle1 />} />
        <Route path="/puzzle2" element={<Puzzle2 />} />
        <Route path="/puzzle3" element={<Puzzle3 />} />
        <Route path="/puzzle4" element={<Puzzle4 />} />
        <Route path="/puzzle5" element={<Puzzle5 />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
