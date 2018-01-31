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
        { name: 'home', path: '/', value: 'HOME', desktopClass: 'nav-item active', mobileClass: 'mobile-nav-item active' },
        { name: 'about', path: '/about', value: 'ABOUT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item' },
        { name: 'contact', path: '/contact', value: 'CONTACT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item' }
      ]
    };
  }

  componentDidMount() {
    this.setNavOnLoad();
  }

  /*
  * Sets the nav menu button active depending on the page visited
  */
  setNavOnLoad = () => {
    let pathName = this.props.location.pathname;
    let link = pathName === '/' || pathName === 'fostco/' ? 'home' : pathName.replace('/', '');
    this.setNavLink(link, pathName, true);
  }

  /*
  * Sets the nav menu button active on click and on load
  * - isOnLoad is used to determine if this function was called on app load
  * - this is so the function will not continuously try to load the page visited
  */
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

  /*
  * Appends the PUBLIC_URL path for routing
  */
  setPublicPath = (pathName) => {
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
        <Footer footerLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
      </div>
    );
  }
}

export default App;
