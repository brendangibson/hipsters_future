import React from 'react';
import strings from '../strings';
import colors from '../colors';

const style = {
  color: colors.buttonText,
  background: colors.cta,
  textAlign: 'center',
  padding: '2vh',
  border: 'none',
  cursor: 'pointer',
  fontSize: '2vh',
  marginLeft: '2vw'
}

/**
*
* Button to be clicked when the user is happy with the picture they
* have taken.
*
*/
const ContinueButton = props => {
    return (
      <button onClick={props.onClick} style={style}>
        {strings.continueButton}
      </button>
    );
  };

export default ContinueButton;
