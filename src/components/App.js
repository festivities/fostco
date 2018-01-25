import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './common/Header';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './common/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: '',
      navigationLinks: [
        {name: 'home', path: '/', value: 'HOME', desktopClass: 'nav-item active', mobileClass: 'mobile-nav-item active', footerClass: 'footer-nav-item'},
        {name: 'about', path: '/about', value: 'ABOUT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item', footerClass: 'footer-nav-item'},
        {name: 'contact', path: '/contact', value: 'CONTACT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item', footerClass: 'footer-nav-item'}
      ]
    };
  }

  componentDidMount() {
    this.setNavOnLoad();
  }

  setNavOnLoad = () => {
    let pathName = this.props.location.pathname;
    let linkClicked = pathName === '/' ? 'home' : pathName.replace('/', '');
    this.setNavLink(linkClicked, pathName, true);
  }

  setNavLink = (linkClicked, pathName, isOnLoad = false) => {
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

    if (!isOnLoad) {
      this.props.history.push(this.setPublicPath(pathName));
      window.scrollTo(0,0);
    }
  }

  setPublicPath = (pathName) => {
    console.log("Public path: " + process.env.PUBLIC_URL);
    return process.env.PUBLIC_URL + pathName;
  }

  render() {
    return (
      <div className="App">
        <Header navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
          <Switch>
            <Route exact path={this.setPublicPath('/')} render={() => <Home setNavLink={this.setNavLink} />} />
            <Route path={this.setPublicPath('/about')} render={() => <About setNavLink={this.setNavLink} />} />
            <Route path={this.setPublicPath('/contact')} component={Contact} />
            <Redirect to='/' />
          </Switch>
        <Footer navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
      </div>
    );
  }
}

export default App;
