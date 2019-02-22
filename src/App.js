import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.inputRef = React.createRef();
  }
  pop(e){
    console.log("target", e.target);
    console.log("ref", this.inputRef.current);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <input type="button" ref={this.inputRef} value="Click here.." onClick={this.pop.bind(this)} />         </header>
      </div>
    );
  }
}

export default App;
