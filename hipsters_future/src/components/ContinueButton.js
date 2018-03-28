import React from 'react';
import strings from '../strings';

const ContinueButton = props => {
    return (
      <button onClick={props.onClick}>{strings.continueButton}
      </button>
    );
  };

export default ContinueButton;
