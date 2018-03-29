import React from 'react';
import colors from '../colors';
import Draggable from 'react-draggable';

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

    const {angle, teardrop1, teardrop2, junction} = props;

    if (typeof teardrop1 === undefined || typeof teardrop2 === undefined || teardrop1 === undefined || teardrop2 === undefined) {
      return null;
    }


    // percantage of teardrop line for the junction is given  by junction
    const x1 = (teardrop1[0] + teardrop2[0]) * junction;
    const y1 = (teardrop1[1] + teardrop2[1]) * junction;



    // angle of teardrop line
    const teardropAngle = Math.atan((teardrop2[1] - teardrop1[1]) / (teardrop2[0] - teardrop1[0]))
    console.log('teardropAngle: ', teardropAngle)

    const angleInRadians = ((Math.PI / 180)) *  angle;

    console.log('angleInRadians: ', angleInRadians);

    const realAngle =  teardropAngle - angleInRadians ;

    console.log('realAngle: ', realAngle);

    // Calculate an endpoint in the far distance
    const x2 = x1 + Math.cos(realAngle) * distance;
    const y2 = y1 + Math.sin(realAngle) * distance;


    const onDrag = (e, position) => {
      e.preventDefault();
      e.stopPropagation();
      props.onDrag && props.onDrag(position)
    }

    const onDragStart = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }

    const onDragEnd = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }

    const onMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }


    return (
      <Draggable onStart={onDragStart} onEnd={onDragEnd} onDrag={onDrag} onMouseDown={onMouseDown}>
        <g>
          <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
          <line x1={x1} y1={y1} x2={x2} y2={y2} style={targetStyle} onDrag={onDrag}/>
        </g>
      </Draggable>
    );
  };

export default InklinationLine;
