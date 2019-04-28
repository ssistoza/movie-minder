import React from 'react';
import Sidebar from './component/Sidebar';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Sidebar>
      <Home />
    </Sidebar>
  );
}

export default App;
