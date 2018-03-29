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

const inputStyle = {
  display: 'none'
};

/**
*
* Button that prompts the user to input an image
*
*/
const InputImageButton = props => {

  // Convert upload to data blob for use in an <img>
  const onImageLoad = (e) => {
    const file = e && e.target && e.target.files && e.target.files[0];
    const blob = window.URL.createObjectURL(file);
    props.onImageLoad && props.onImageLoad(blob);
    props.onClick && props.onClick();
  }
    return (
      <label style={style}>
        {strings.imageButton}
        <input style={inputStyle} type="file" accept="image/*" capture="camera" onChange={onImageLoad} />
      </label>
    );
  };

export default InputImageButton;
