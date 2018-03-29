import React from 'react';
import colors from '../colors';

const style = {
  color: colors.text,
  fontSize: '1.5vh',
  display: 'inline-block',
  marginLeft: '3vw'
}

/**
*
* Text area that provides helpful hints for the user
*
*/
const Prompt = props => {
    return (
      <p style={style}>
        {props.string}
      </p>
    );
  };

export default Prompt;
