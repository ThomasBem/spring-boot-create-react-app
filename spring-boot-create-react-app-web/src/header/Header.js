// @flow
import React, { Component, PropTypes } from 'react';
import logo from './create-react-app.png';
import './header.css';

class Header extends Component {

    state = {
        showLogo: Boolean
    }

    constructor() {
        super();
        this.state = {
            showLogo: true,
        }
    }

    toggleLogo() {
        this.setState({
            showLogo: !this.state.showLogo
        })
    }

    render() {
        let logoElement;
        if (this.state.showLogo) {
            logoElement = <img src={logo} className="Header-logo" alt="" />;
        }

        return (
            <div className="Header">
                {logoElement}
                <h2>{this.props.text}</h2>
                <button onClick={() => this.toggleLogo()}>Toggle Logo</button>
            </div>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Header;