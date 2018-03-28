import React from 'react';
import strings from '../strings';

const InputImageButton = props => {
    return (
      <button onClick={props.onClick}>
        {strings.imageButton}
      </button>
    );
  };

export default InputImageButton;
