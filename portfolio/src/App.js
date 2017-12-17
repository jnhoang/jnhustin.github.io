import React, { Component } from 'react';
import NameLogo             from './NameLogo';
import SymbolLogo           from './SymbolLogo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameLogo />
        <SymbolLogo />
      </div>
    );
  }
}

export default App;
