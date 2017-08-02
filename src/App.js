import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import BalanceSheetContainer from './containers/BalanceSheetContainer';
import style from './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <BalanceSheetContainer />
      </div>
    );
  }
}

export default App;
