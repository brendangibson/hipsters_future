import React from 'react';
import strings from '../strings';
import colors from '../colors';

const fontSize = '2vh';

const style = {
  color: colors.text,
  fontSize: fontSize
};

const inputStyle = {
  background: colors.entry,
  border: 'none',
  fontSize: fontSize,
  padding: '1vh',
  color: colors.text,
  marginLeft: '2vw'
}

/**
*
* Form field to enter the inklination angle for the hip socket alignment
*
*/
const AngleEntry = props => {

    const {angle, onChange} = props

    return (
      <label style={style}>
        {strings.inklinationAngleLabel}
        <input style={inputStyle} type="text" value={angle} onChange={onChange} size={3}/>
      </label>
    );
  };

export default AngleEntry;
