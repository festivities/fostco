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
                {name: 'home', value: 'HOME', desktopClass: 'nav-item active', mobileClass: 'mobile-nav-item active'},
                {name: 'about', value: 'ABOUT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item'},
                {name: 'contact', value: 'CONTACT', desktopClass: 'nav-item', mobileClass: 'mobile-nav-item'}
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

    /*
    *
    */
    onLinkClick = (linkClicked) => {
        let linkArray = this.state.navLinks;

        for (let link of linkArray) {
            link.desktopClass = 'nav-item';
            link.mobileClass = 'mobile-nav-item';

            if (link.name === linkClicked) {
                link.desktopClass += ' active';
                link.mobileClass += ' active';
            }
        }

        this.setState({navLinks: linkArray});
    }

    render() {
        return (
            <header className="Header">
                <div className="nav-header">
                        <div className="header-title"><div className="title"  onClick={() => this.onLinkClick('home')}>Jordan Foster</div></div>
                        <div className="navigation">
                            <ul className="nav-menu">
                                {
                                    this.state.navLinks.map((link, index) => {
                                        return <li className={link.desktopClass} key={index} onClick={() => this.onLinkClick(link.name)}>{link.value}</li>
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
                                return <li className={link.mobileClass} key={index} onClick={() => this.onLinkClick(link.name)}>{link.value}</li>
                            })
                        }
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;