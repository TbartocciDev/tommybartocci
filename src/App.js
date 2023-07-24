import './App.css';

import { Routes, Route } from 'react-router-dom';

import NavBar from './main/NavBar/NavBar';
import HomePage from './main/HomePage';
import AboutPage from './main/AboutPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
