import diceSolid from './diceSolid.svg';
import './App.css';
import React, { Component } from 'react';
import Menu from './component/MenuComponent';
import { STAFFS } from './component/staffs';
import StaffList from './component/StaffListComponent'
import StaffDetail from'./component/StaffDetailComponent'
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './component/MainComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS

    }
  }
  render() {
    return (
      
        
        <Main staffs={this.state.staffs}/>


    
    );
  }
}

export default App;
