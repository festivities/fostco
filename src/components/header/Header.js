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
            <header className="Header container-fluid">
                <div className="row header-row">
                    <div className="header-title col-xs-10 col-sm-10 col-md-7 col-lg-7">JORDAN FOSTER</div>
                    <div className="navigation col-md-5 col-lg-5">
                        {this.buildNavLinks()}
                    </div>
                    <div className="navigation-dropdown col-xs-2 col-sm-2 col-md-3">
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