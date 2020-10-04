import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'


const App = () => {
  return (
    <div className="App">
      <Navbar title="Github finder" icon="fab fa-github" />
      <div className="container">
        <Users />

      </div>
    </div>

  );
}

export default App;
