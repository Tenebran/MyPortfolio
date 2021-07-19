import React from 'react';
import './App.scss';
import Header from './modules/components/Header/Header';
import Main from './modules/components/Main/Main';
import Skills from './modules/components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
