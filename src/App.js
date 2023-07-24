import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './main/HomePage';
import AboutPage from './main/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
