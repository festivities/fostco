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
      navigationLinks: [
        { name: 'home', path: '/', value: 'HOME', isActive: false },
        { name: 'about', path: '/about', value: 'ABOUT', isActive: false },
        { name: 'contact', path: '/contact', value: 'CONTACT', isActive: false  }
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
    let cleanPath = pathName.indexOf('/fostco') > -1 ? pathName.replace('/fostco', '') : pathName;
    let pathInFocus = this.state.navigationLinks.find((navMatch) => navMatch.path === cleanPath);
    this.onNavigate(pathInFocus, true);
  }

  getNavLinkByName = (pathName) => {
    return this.state.navigationLinks.find((navMatch) => navMatch.name === pathName);
  }

  /*
  * Sets the nav menu button active on click or on load
  * - isOnLoad is used to determine if this function was called on app load
  * - this is so the function will not continuously try to load the page visited
  */
  onNavigate = (path, isOnLoad = false) => {
    // Check if onClick event came from inline link
    if (typeof path === 'string') {
      path = this.state.navigationLinks.find((navMatch) => navMatch.name === path);
    }

    let linkArray = this.state.navigationLinks;

    for (let link of linkArray) {
      link.isActive = link.name === path.name;
    }

    this.setState({ navigationLinks: linkArray });

    if (!isOnLoad) {
      this.props.history.push(this.setPublicPath(path.path));
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
        <Header navigationLinks={this.state.navigationLinks} onNavigate={this.onNavigate} />
          <Switch>
            <Route exact path={this.setPublicPath('/')} render={() => <Home onNavigate={this.onNavigate} />} />
            <Route path={this.setPublicPath('/about')} render={() => <About onNavigate={this.onNavigate} />} />
            <Route path={this.setPublicPath('/contact')} component={Contact} />
            <Redirect to='/' />
          </Switch>
        <Footer navigationLinks={this.state.navigationLinks} onNavigate={this.onNavigate} />
      </div>
    );
  }
}

export default App;
