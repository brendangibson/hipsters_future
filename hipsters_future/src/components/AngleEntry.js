import React from 'react';
import strings from '../strings';

const AngleEntry = props => {

    const {angle, onChange} = props

    return (
      <label>
        {strings.inklinationAngleLabel}
        <input type="text" defaultValue={angle} onChange={onChange}/>
      </label>
    );
  };

export default AngleEntry;
