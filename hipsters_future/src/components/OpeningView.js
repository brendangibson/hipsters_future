import React from 'react';
import InputImageButton from './InputImageButton';
import strings from '../strings';
import colors from '../colors';

const titleStyle = {
  color: colors.titleText,
  width: '100%',
  textAlign: 'center',
  fontSize: '10vh'
};

const blurbStyle = {
  color: colors.text,
  width: '100%',
  textAlign: 'center',
  fontSize: '5vh'
}

const OpeningView = props => {

  const inputImage = () => {

  }

    return (
      <div>
        <h1 style={titleStyle}>{strings.title}</h1>
        <img src='' alt='hip' />
        <p style={blurbStyle}>{strings.openingBlurb}</p>
        <InputImageButton onClick={this.inputImage}/>
      </div>
    );
  };

export default OpeningView;
