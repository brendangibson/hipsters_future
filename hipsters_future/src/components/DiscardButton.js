import React from 'react';
import strings from '../strings';

const DiscardButton = props => {
    return (
      <button onClick={props.onClick}>{strings.discardButton}
      </button>
    );
  };

export default DiscardButton;
