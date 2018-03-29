import React from 'react';
import InputImageButton from './InputImageButton';
import strings from '../strings';
import colors from '../colors';
import hip from '../hip.jpg';

const style = {
  backgroundImage: `url(${hip})`,
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
};

const titleStyle = {
  color: colors.titleText,
  width: '100%',
  textAlign: 'center',
  fontSize: '10vh'
};

const imageStyle = {
  display: 'block',
  margin: '5vh auto',
  height: '50vh'
};

const blurbStyle = {
  color: colors.text,
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontSize: '5vh',
  padding: '5vh',
  background: colors.overlay,
  position: 'absolute',
  bottom: '15vh'
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

    const {onInputImage} = props;

    return (
      <div style={style}>
        <h1 style={titleStyle}>{strings.title}</h1>
        <img style={imageStyle} src={hip} alt='hip' />
        <p style={blurbStyle}>{strings.openingBlurb}</p>
        <div style={buttonWrapperStyle}>
          <InputImageButton onClick={onInputImage}/>
        </div>
      </div>
    );
  };

export default OpeningView;
