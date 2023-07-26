import './App.css';
import { Data as appData } from './data';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from './main/Components/NavBar/NavBar';
import DropMenu from './main/Components/DropMenu/DropMenu';

import HomePage from './main/Pages/HomePage/HomePage';
import AboutPage from './main/Pages/AboutPage/AboutPage';
import ContactPage from './main/Pages/ContactPage/ContactPage';

import AppDetailPage from './main/Pages/AppDetailPage/AppDetailPage';

function App() {

  const [page, setPage] = useState("home");
  const [subject, setSubject] = useState("hobbies");

  return (
    <div className="App">
      <NavBar data={appData.NavBar} page={page}/>
      <DropMenu data={appData.NavBar.pageLinks}/>
      <Routes>
        <Route path='/' element={
          <HomePage
            data={appData.HomePage}
            setPage={setPage}/>}></Route>
        <Route path='/about' element={
          <AboutPage 
            data={appData.AboutPage}
            subject={subject}
            setSubject={setSubject}
            setPage={setPage}/>}>
        </Route>
        <Route path='/:appName' element={
          <AppDetailPage
          data={appData.HomePage.appsSection.applications}
          />}>
        </Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
