import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={ Home } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
