import './App.css';
import { Data as appData } from './data';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from './main/NavBar/NavBar';
import DropMenu from './main/DropMenu/DropMenu';

import HomePage from './main/Pages/HomePage/HomePage';
import AboutPage from './main/Pages/AboutPage/AboutPage';
import ContactPage from './main/Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <NavBar data={appData.NavBar}/>
      <DropMenu data={appData.NavBar.pageLinks}/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
