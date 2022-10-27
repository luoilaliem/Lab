import React, { Component } from 'react';
import './App.css';
import Menu from './Components/MenuComponent';
import { DISHES } from './share/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Menu dishes={this.state.dishes } />
      </div>
    );
  }
}
export default App;