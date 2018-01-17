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
    let path = this.props.location.pathname;
    let linkClicked = path === '/' ? 'home' : path.replace('/', '');
    this.setNavLink(linkClicked, path, true);
  }

  setNavLink = (linkClicked, path, isOnLoad = false) => {
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
      this.props.history.push(process.env.PUBLIC_URL + path);
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <div className="App">
        <Header navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
          <Switch>
            <Route exact path='/' render={() => <Home setNavLink={this.setNavLink} />} />
            <Route path='/about' render={() => <About setNavLink={this.setNavLink} />} />
            <Route path='/contact' component={Contact} />
            <Redirect to='/' />
          </Switch>
        <Footer navigationLinks={this.state.navigationLinks} setNavLink={this.setNavLink} />
      </div>
    );
  }
}

export default App;
