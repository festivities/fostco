import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            navLinks: [
                "HOME",
                "ABOUT",
                "CONTACT"
            ],
            wrapperRef: {},
            showMobileNavMenu: false
        }
    }

    buildNavLinks = (isMobile) => {
        let listClass = isMobile ? 'mobile-nav-menu' : 'nav-menu';
        let navItemClass = isMobile ? 'mobile-nav-item mobile-nav-item-' : 'nav-item nav-item-';

        const navItems = this.state.navLinks.map((link, index) => {
            navItemClass += link.toLowerCase();
            return <li className={navItemClass} key={index}>{link}</li>
        });
        return <ul className={listClass}>{navItems}</ul>
    }

    toggleMobileNavMenu = () => {
        document.addEventListener('mousedown', (e) => this.handleClickOutside(e));
        this.setState({showMobileNavMenu: !this.state.showMobileNavMenu});
    }

    handleClickOutside = (e) => {
         if (e.target.className.indexOf('mobile-nav-item') > -1 && this.state.showMobileNavMenu) {
            console.log('clicked');
            document.removeEventListener('mousedown', (e) => this.handleClickOutside(e));
            this.setState({showMobileNavMenu: false});
        } else {
            console.log('didnt click');
        }
    }

    render() {
        return (
            <header className="Header">
                <div className="nav-header">
                        <div className="header-title">JORDAN FOSTER</div>
                        <div className="navigation">
                            {this.buildNavLinks(false)}
                        </div>
                        <div className="navigation-dropdown">
                            <button className="nav-dropdown-button" onClick={this.toggleMobileNavMenu}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                </div>
                {
                    this.state.showMobileNavMenu ? <div className="mobile-nav-collapse">{this.buildNavLinks(true)}</div> : null
                }
                {/* <div ref={this.setWrapperRef} className="mobile-nav-collapse">{this.buildNavLinks(true)}</div> */}
            </header>
        );
    }
}

export default Header;