import React, { Component } from 'react';
import strings from '../strings';

/**
*
* Toggle button that inverts the colors of the image
*
*/
class InvertButton extends Component {

  render() {
    const {inverted, onInvertToggle} = this.props;
    const style = inverted ? {borderStyle: 'inset'} : null;
    return (
      <button style={style} onClick={onInvertToggle}>{strings.invertButton}
      </button>
    );
  };
}

export default InvertButton;
