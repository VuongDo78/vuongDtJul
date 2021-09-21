import logo from './logo.svg';
import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Confision</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
