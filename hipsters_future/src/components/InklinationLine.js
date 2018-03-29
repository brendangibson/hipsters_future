import React from 'react';
import colors from '../colors';

const distance = 1000;

const style = {
  strokeWidth: 1,
  stroke: colors.inklinationLine
}

const targetStyle = {
  strokeWidth: '10vh',
  cursor: 'pointer'
}

/**
*
* Draws a line at the inklination angle from the teardrop line
*
*/
const InklinationLine = props => {

    const {angle, teardrop1, teardrop2} = props;

    if (typeof teardrop1 === undefined || typeof teardrop2 === undefined || teardrop1 === undefined || teardrop2 === undefined) {
      return null;
    }


    // midpoint of teardrop line
    const x1 = (teardrop1[0] + teardrop2[0]) / 2;
    const y1 = (teardrop1[1] + teardrop2[1]) / 2;

    // angle of teardrop line
    const teardropAngle = Math.atan((teardrop2[1] - teardrop1[1]) / (teardrop2[0] - teardrop1[0]))
    console.log('teardropAngle: ', teardropAngle)

    const angleInRadians = ((Math.PI / 180)) *  angle;

    console.log('angleInRadians: ', angleInRadians);

    const realAngle = angleInRadians + teardropAngle;

    console.log('realAngle: ', realAngle);

    // Calculate an endpoint in the far distance
    const x2 = x1 + Math.cos(realAngle) * distance;
    const y2 = y1 + Math.sin(realAngle) * distance;

    const onDrag = (e) => {
        const x = e && e.target && e.target.clientX;
        const y = e && e.target && e.target.clientY;

        console.log('x: ', x, 'y: ', y)

        props.onDrag && props.onDrag([x, y])
    }


    return (
      <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={targetStyle} onDrag={onDrag}/>
      </g>
    );
  };

export default InklinationLine;
