import React from 'react';
import colors from '../colors';

const style = {
  strokeWidth: 1,
  stroke: colors.teardropLine
};

/**
*
* A line that is drawn between the teardrops
*
*/
const TeardropLine = props => {

    const {teardrop1, teardrop2} = props;

    if (typeof teardrop1 === undefined || typeof teardrop2 === undefined
      || teardrop1 === undefined || teardrop2 === undefined) {
      return null;
    }

    const x1 = teardrop1[0];
    const y1 = teardrop1[1];
    const x2 = teardrop2[0];
    const y2 = teardrop2[1];

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} style={style}/>
    );
  };

export default TeardropLine;
