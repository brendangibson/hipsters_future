import React, { Component } from 'react';
import strings from '../strings';

class InvertButton extends Component {

  render() {
    const {inverted} = this.props;
    const style = inverted ? {'border-style': 'inset'} : null;
    return (
      <button style={style} onClick={this.onInvertToggle}>{strings.invertButton}
      </button>
    );
  };
}

export default InvertButton;
