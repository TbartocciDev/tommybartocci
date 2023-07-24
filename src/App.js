import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
