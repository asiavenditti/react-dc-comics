import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import comics from './db/comics.js';
import nav from './db/nav.js';

function App() {
  return (
    <>

      <Header navItems={nav} />

      <Main comics={comics} />

      <Footer />
    </>
  );
}

export default App;
