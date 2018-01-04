import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

const mobileNavCollapseClasses = {
    menuHidden: 'mobile-nav-collapse hidden',
    menuExpanded: 'mobile-nav-collapse expanded'
}
const mobileMaxWidth = 992;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageName: '',
            headerLinks: this.props.navigationLinks,
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
        const mobileNavButtonTarget = 'nav-dropdown-button icon-bar';

        document.removeEventListener('mousedown', this.handleClickOutside, false);
        if (mobileNavButtonTarget.indexOf(e.target.className) < 0) {
            this.setState({mobileNavMenuClass: mobileNavCollapseClasses.menuHidden});
        }
    }

    render() {
        return (
            <header className="Header">
                <div className="nav-header">
                        <div className="header-title-container">
                            <div className="header-title"  onClick={() => this.props.setNavLink('home')}>Jordan Foster</div>
                        </div>
                        <div className="navigation">
                            <ul className="nav-menu">
                                {
                                    this.state.headerLinks.map((link, index) => {
                                        return <li className={link.desktopClass} key={index} onClick={() => this.props.setNavLink(link.name)}>{link.value}</li>
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
                <div ref={node => this.node = node} className={this.state.mobileNavMenuClass}>
                    <ul className="mobile-nav-list">
                        {
                            this.state.headerLinks.map((link, index) => {
                                return <li className={link.mobileClass} key={index} onClick={() => this.props.setNavLink(link.name)}>{link.value}</li>
                            })
                        }
                    </ul>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    navigationLinks: PropTypes.array,
    setNavLink: PropTypes.func
};

export default Header;