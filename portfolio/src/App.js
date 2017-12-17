import React, { Component } from 'react';
import NameLogo             from './NameLogo';
import SymbolLogo           from './SymbolLogo';
import background           from './background.jpg'
class App extends Component {
  componentDidMount() {
    console.log(background) 
  }

  render() {
    return (
      <div className="App" >
        <NameLogo />
        <SymbolLogo />
      </div>
    );
  }
}

export default App;
