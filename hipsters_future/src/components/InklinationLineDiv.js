import React from 'react';
import colors from '../colors';
import Draggable from 'react-draggable';

const lineStyle = {
  position: 'absolute',
  height: 0,
  width: 5000,
  border: '1px dashed ' + colors.inklinationLine,
  top: '50%'
};

/**
*
* Draws a line at the inklination angle from the teardrop line using a <div>
*
*/
const InklinationLineDiv = props => {

    const {angle, teardrop1, teardrop2, junction, zoom} = props;

    if (typeof teardrop1 === undefined || typeof teardrop2 === undefined || teardrop1 === undefined || teardrop2 === undefined) {
      return null;
    }

    // percantage of teardrop line for the junction is given by junction
    const x1 = (teardrop2[0] - teardrop1[0]) * junction + teardrop1[0];
    const y1 = (teardrop2[1] - teardrop1[1]) * junction + teardrop1[1];

    // angle of teardrop line
    const teardropAngle = Math.atan((teardrop2[1] - teardrop1[1]) / (teardrop2[0] - teardrop1[0]));
    const angleInRadians = ((Math.PI / 180)) *  angle;
    const realAngle =  teardropAngle - angleInRadians ;


    const onDrag = (e, position) => {
      e.preventDefault();
      e.stopPropagation();
      const zoomedPosition = {
        x: position.lastX + position.deltaX / zoom,
        y:position.lastY + position.deltaY / zoom
      }
      props.onDrag && props.onDrag(zoomedPosition)
    }

    // Need to prevent elements lower in the tree from being dragged
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

    const wrapperStyle = {
      cursor: 'pointer',
      position: 'absolute',
      height: 50,
      width: 5000,
      transform: `translateY(-25px) rotate(${realAngle}rad)`,
      transformOrigin: '0 50%'
    }

    return (
      <Draggable onStart={onDragStart} onEnd={onDragEnd} onDrag={onDrag}
        onMouseDown={onMouseDown} position={{x: x1,y: y1}}>
        <div>
            <div style={wrapperStyle}>
              <div style={lineStyle} />
            </div>
        </div>
      </Draggable>
    );
  };

export default InklinationLineDiv;
