import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            navLinks: [
                "HOME",
                "ABOUT",
                "CONTACT"
            ]
        }
    }

    buildNavLinks() {
        const navItems = this.state.navLinks.map((link, index) => {
            let navClassName = "col-lg-4 nav-item nav-item-" + link.toLowerCase();
            return <li className={navClassName} key={index}>{link}</li>
        });
        return <ul className="nav-menu">{navItems}</ul>
    }

    render() {
        return (
            <header className="Header container">
                <div className="row">
                    <div className="header-title col-md-2">JORDAN FOSTER</div>
                    <div className="navigation col-5 col-lg-5">
                        {this.buildNavLinks()}
                    </div>
                    <div className="navigation-dropdown col-xs-3 col-sm-3 col-md-10">
                        <button className="nav-dropdown-button">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;