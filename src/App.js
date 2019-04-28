import React from 'react';
import Sidebar from './component/Sidebar';
import UserMovieList from './container/UserMovieList';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Sidebar>
      <UserMovieList />
    </Sidebar>
  );
}

export default App;
