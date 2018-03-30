import React from 'react';
import colors from '../colors';

const style = {
  strokeWidth: 1,
  stroke: colors.teardropLine
};

const xMax = 5000;

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

    const m = (y2-y1)/(x2-x1);


    // when x is 0
    const y0 = m * (0 - x1) + y1;
    const yMax = m * (xMax - x1) + y1;

    return (
      <line x1={0} y1={y0} x2={xMax} y2={yMax} style={style}/>
    );
  };

export default TeardropLine;
