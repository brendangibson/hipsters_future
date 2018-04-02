import React from 'react';
import DiscardButton from './DiscardButton';
import ContinueButton from './ContinueButton';
import InputImageButton from './InputImageButton';
import colors from '../colors';

const style = {
  height: '100vh',
  opacity: 0.7
}

const imageStyle = {
  width: '100%'
}

const overlayStyle = {
  background: colors.overlay,
  width: '100%',
  padding: '5vh',
  position: 'absolute',
  bottom: 0
}

/**
*
* Component that allows the user to upload or take a picture with the camera.
* Once the picture is in the system, it shows a preview, and buttons to
* discard or continue the process.
*
* Uses HTML5 input with capture attribute to access the camera.
*
*/
const ImagePreview = props => {


    // Clears the state holding the image data
    const onDiscard = () => {
      props.onImageLoad && props.onImageLoad(null)
    }

    const {imageData, onImageLoad} = props

    return (
      <div style={style}>
        {imageData ?
          <img style={imageStyle} src={imageData} alt='preview' />
        : null}

        <div style={overlayStyle}>
          {imageData ? null :
            <InputImageButton onImageLoad={onImageLoad}/>
          }
          {imageData ?
            <DiscardButton onClick={onDiscard}/>
          : null}
          {imageData ?
            <ContinueButton onClick={props.onContinue}/>
          : null}
        </div>
      </div>
    );
  };

export default ImagePreview;
