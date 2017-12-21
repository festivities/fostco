import React, { Component } from 'react';
import $ from 'jquery';

const mobileNavCollapseClasses = {
    menuHidden: 'mobile-nav-collapse hidden',
    menuExpanded: 'mobile-nav-collapse expanded'
}
const mobileMaxWidth = 992;
const mobileNavItemTarget = 'mobile-nav-item';
const mobileNavButtonTarget = 'nav-dropdown-button icon-bar';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            navLinks: [
                "HOME",
                "ABOUT",
                "CONTACT"
            ],
            mobileNavMenuClass: mobileNavCollapseClasses.menuHidden
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
    }

    /*
    * Used to hide open mobile nav menu when window width is greater than 992px
    */
    handleResize = () => {
        if ($(window).width() > mobileMaxWidth && this.state.mobileNavMenuClass.indexOf(mobileNavCollapseClasses.menuExpanded) > -1) {
            this.setState({mobileNavMenuClass: mobileNavCollapseClasses.menuHidden});
        }
    }

    /*
    * Toggles the mobile nav menu on click of the mobile nav menu button
    */
    toggleMobileNavMenu = () => {
        if (this.state.mobileNavMenuClass.indexOf(mobileNavCollapseClasses.menuHidden) > -1) {
            this.setState({mobileNavMenuClass: mobileNavCollapseClasses.menuExpanded});
            document.addEventListener('mousedown', this.handleClickOutside, false);
        } else {
            this.setState({mobileNavMenuClass: mobileNavCollapseClasses.menuHidden});
        }
    }

    /*
    * Toggles the mobile nav menu when clicking outside of the mobile nav menu button or mobile nav menu
    */
    handleClickOutside = (e) => {
        if (mobileNavItemTarget.indexOf(e.target.className) < 0) {
            document.removeEventListener('mousedown', this.handleClickOutside, false);
            if (mobileNavButtonTarget.indexOf(e.target.className) < 0) {
                this.setState({mobileNavMenuClass: mobileNavCollapseClasses.menuHidden});
            }
        }
    }

    render() {
        return (
            <header className="Header">
                <div className="nav-header">
                        <div className="header-title">JORDAN FOSTER</div>
                        <div className="navigation">
                            <ul className="nav-menu">
                                {
                                    this.state.navLinks.map((link, index) => {
                                        return <li className="nav-item" key={index}>{link}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="navigation-dropdown">
                            <button className="nav-dropdown-button" onClick={this.toggleMobileNavMenu}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                </div>
                <div ref="mobile-nav-collapse" className={this.state.mobileNavMenuClass}>
                    <ul className="mobile-nav-list">
                        {
                            this.state.navLinks.map((link, index) => {
                                return <li className="mobile-nav-item" key={index}>{link}</li>
                            })
                        }
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;