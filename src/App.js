import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop';
import Main from './components/Main';
import Footer from './components/Footer'
import './css/app.css';

class App extends Component {
  state = {
    MenuOpen: false
  };

  menuClickHandler = () => {
    this.setState((prevState) => {
      return { MenuOpen: !prevState.MenuOpen };
    })
  };

  backdropClickHandler = () => {
    this.setState({ MenuOpen: false });
  };

  render() {
    let menu;
    let backdrop;

    if (this.state.MenuOpen) {
      menu = <Menu />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    };

    return (
      <Router>
        <div className="app">
          <Header menuOpenClickHandler={this.menuClickHandler} />
          {menu}
          {backdrop}
          <Main />
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App