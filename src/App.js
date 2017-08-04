import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import BalanceSheetContainer from './containers/BalanceSheetContainer';
import FooterComponent from './components/FooterComponent';
import style from './styles/App.css'; //eslint-disable-line

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <BalanceSheetContainer />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
