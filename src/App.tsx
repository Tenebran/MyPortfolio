import React from 'react';
import './App.scss';
import Contacts from './modules/components/Contacts/Contacts';
import Footer from './modules/components/Footer/Footer';
import Header from './modules/components/Header/Header';
import Main from './modules/components/Main/Main';
import Projects from './modules/components/Projects/Projects';
import Skills from './modules/components/Skills/Skills';
import { Certificates } from './modules/components/Certificates/Certificates';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
