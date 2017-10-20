// @flow
import React from 'react';
import logo from './create-react-app.png';
import './header.css';

type State = {
  showLogo: boolean
};

type Props = {
  text: string
};

class Header extends React.Component<Props, State> {
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

export default Header;