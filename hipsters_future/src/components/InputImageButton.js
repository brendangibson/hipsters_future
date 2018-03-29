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
  fontSize: '2vh'
};

/**
*
* Button that prompts the user to input an image
*
*/
const InputImageButton = props => {
    return (
      <button onClick={props.onClick} style={style}>
        {strings.imageButton}
      </button>
    );
  };

export default InputImageButton;
