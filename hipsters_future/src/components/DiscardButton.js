import React from 'react';
import strings from '../strings';
import colors from '../colors';

const style = {
  color: colors.buttonText,
  background: colors.errorButton,
  textAlign: 'center',
  padding: '2vh',
  border: 'none',
  cursor: 'pointer',
  fontSize: '2vh'
}

/**
*
* Button to be clicked when the user is not happy with the picture that has
* been taken.
*
*/
const DiscardButton = props => {
    return (
      <button style={style} onClick={props.onClick}>
        {strings.discardButton}
      </button>
    );
  };

export default DiscardButton;
