import React from 'react';
import InputImageButton from './InputImageButton';
import strings from '../strings';
import colors from '../colors';
import hip from '../hip.jpg';
import hip2 from '../hip2.png';

const style = {
  backgroundImage: `url(${hip})`,
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
};

const imageStyle = {
  display: 'block',
  height: '50vh',
  boxShadow: '0 3px 3px',
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const blurbStyle = {
  color: colors.text,
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontSize: '5vh',
  padding: '5vh 10vw',
  background: colors.overlay,
  position: 'absolute',
  top: '5vh'
}

const buttonWrapperStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '5vh',
  position: 'absolute',
  bottom: 0,
  boxSizing: 'border-box'
}

/**
*
* The first view that a user sees.
* Shows some info and a Call To Action to input an image.
*
*/
const OpeningView = props => {

    const {onInputImage, onImageLoad} = props;

    return (
      <div style={style}>
        {/*}<h1 style={titleStyle}>{strings.title}</h1>*/}
        <img style={imageStyle} src={hip2} alt='hip' />
        <p style={blurbStyle}>{strings.openingBlurb}</p>
        <div style={buttonWrapperStyle}>
          <InputImageButton onClick={onInputImage} onImageLoad={onImageLoad}/>
        </div>
      </div>
    );
  };

export default OpeningView;
