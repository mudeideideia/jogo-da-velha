import React from 'react';
import './App.css'
import Header from './component/Header';
import Grid from './component/Grid';
import CheckBox from './objects/CheckBox';

function App() {
  return (
    <main className="app">
      <Header />
      <Grid />
      <CheckBox id = 'show' value="show" content="Mostrar eventos"/>
    </main>
  );
}

export default App;
