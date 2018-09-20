import React, {Component} from 'react';
import './App.css';
import MainLayout from "./components/MainLayout";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainLayout autoWidth={false} width="100%" listStyle={{width: '0.01%'}} style={{width: '100%'}}/>
      </div>
    );
  }
}

export default App;
