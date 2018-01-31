import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mobileNavCollapseClasses = {
    menuHidden: 'mobile-nav-collapse hidden',
    menuExpanded: 'mobile-nav-collapse expanded'
}
const mobileMaxWidth = 992;

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.headerMenuCollapseClasses = {
            menuHidden: 'Header',
            menuActive: 'Header active'
        };

        this.state = {
            pageName: '',
            headerLinks: this.props.navigationLinks,
            mobileNavMenuClass: mobileNavCollapseClasses.menuHidden,
            headerClass: this.headerMenuCollapseClasses.menuHidden,
            isHeaderOpen: false
        };
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
        if (window.innerWidth > mobileMaxWidth && this.state.headerClass.indexOf(this.headerMenuCollapseClasses.menuActive) > -1) {
            this.setState({
                headerClass: this.headerMenuCollapseClasses.menuHidden,
                isHeaderOpen: false
            });
        }
    }

    /*
    * Toggles the mobile nav menu on click of the mobile nav menu button
    */
    toggleMobileNavMenu = () => {
        let headerClass = this.state.headerClass.indexOf(this.headerMenuCollapseClasses.menuActive) > -1 
                            ? this.headerMenuCollapseClasses.menuHidden 
                            : this.headerMenuCollapseClasses.menuActive;
        let isHeaderOpen = !this.state.isHeaderOpen;

        this.setState({
            headerClass: headerClass,
            isHeaderOpen: isHeaderOpen
        });

        if (isHeaderOpen) {
            document.addEventListener('mousedown', this.handleClickOutside, false);
        }
    }

    /*
    * Toggles the mobile nav menu when clicking outside of the mobile nav menu button or mobile nav menu
    */
    handleClickOutside = (e) => {
        const mobileNavButtonTarget = 'nav-dropdown-button icon-bar';

        document.removeEventListener('mousedown', this.handleClickOutside, false);
        if (mobileNavButtonTarget.indexOf(e.target.className) < 0) {
            this.setState({
                headerClass: this.headerMenuCollapseClasses.menuHidden,
                isHeaderOpen: false
            });
        }
    }

    render() {
        return (
            <header className={this.state.headerClass}>
                <div className="nav-header">
                        <div className="header-title-container">
                            <div className="header-title"  onClick={() => this.props.onNavigate('home')}>Jordan Foster</div>
                        </div>
                        <div className="navigation">
                            <ul className="nav-menu">
                                {
                                    this.state.headerLinks.map((link, index) => {
                                        return (
                                            <li className={'nav-item' + (link.isActive ? ' active' : '')} key={index} onClick={() => this.props.onNavigate(link)}>
                                                {link.value}
                                            </li>
                                        );
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
                <div className={this.state.mobileNavMenuClass}>
                    <ul className="mobile-nav-list">
                        {
                            this.state.headerLinks.map((link, index) => {
                                return (
                                    <li className={'mobile-nav-item' + (link.isActive ? ' active' : '')} key={index} onClick={() => this.props.onNavigate(link)}>
                                        {link.value}
                                    </li>
                                );
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
    onNavigate: PropTypes.func
};

export default Header;