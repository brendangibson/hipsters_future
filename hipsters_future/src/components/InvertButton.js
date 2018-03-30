import React, { Component } from 'react';
import strings from '../strings';
import colors from '../colors';
/**
*
* Toggle button that inverts the colors of the image
*
*/
class InvertButton extends Component {

  render() {
    const {inverted, onInvertToggle} = this.props;
    const style = {
      color: colors.buttonText,
      background: colors.controlButton,
      textAlign: 'center',
      padding: '3vh 2vw',
      border: 'none',
      cursor: 'pointer',
      fontSize: '4vh',
      borderStyle: inverted ? 'inset' : 'none',
      marginBottom: '2vh'
    };

    return (
      <button style={style} onClick={onInvertToggle}>{strings.invertButton}
      </button>
    );
  };
}

export default InvertButton;
