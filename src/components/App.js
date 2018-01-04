import React, { Component } from 'react';

import Header from './header/Header';
import ContentContainer from './content/ContentContainer';
import Footer from './footer/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'home',
      navigationLinks: [
        {name: 'home', value: 'HOME', desktopClass: 'nav-item active', mobileClass: 'mobile-nav-item active', footerClass: 'footer-nav-item'},
        {name: 'about', value: 'ABOUT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item', footerClass: 'footer-nav-item'},
        {name: 'contact', value: 'CONTACT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item', footerClass: 'footer-nav-item'}
      ]
    };
  }

  setNavLink = (linkClicked) => {
    this.setState({currentPage: linkClicked});

    let linkArray = this.state.navigationLinks;

    for (let link of linkArray) {
      link.desktopClass = 'nav-item';
      link.mobileClass = 'mobile-nav-item';

      if (link.name === linkClicked) {
        link.desktopClass += ' active';
        link.mobileClass += ' active';
      }
    }

    this.setState({ navigationLinks: linkArray });
  }

  render() {
    return (
      <div className="App">
        <Header navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
        <ContentContainer />
        <Footer navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
      </div>
    );
  }
}

export default App;
