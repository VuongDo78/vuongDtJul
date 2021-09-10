import './App.css';
import React, { Component } from 'react';
import { STAFFS } from './component/staffs';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS

    }
  }
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main staffs={this.state.staffs} />
          </div>
        </BrowserRouter>
      </Provider>





    );
  }
}

export default App;
