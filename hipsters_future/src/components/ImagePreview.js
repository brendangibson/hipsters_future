import React from 'react';
import DiscardButton from './DiscardButton';
import ContinueButton from './ContinueButton';

const ImagePreview = props => {

    return (
      <div>
        <DiscardButton onClick={props.onDiscard}/>
        <ContinueButton onClick={props.onContinue}/>
      </div>
    );
  };

export default ImagePreview;
