import React, { Component } from 'react';

import Header from './header/Header';
import ContentContainer from './content/ContentContainer';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
