import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Game from "./components/Game";
import './App.scss';

class App extends Component {

render() {
  return (
    <Wrapper>
      <Game />
      <Footer />
    </Wrapper>
  )
};
};


export default App;
