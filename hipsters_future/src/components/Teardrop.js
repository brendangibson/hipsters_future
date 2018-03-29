import React from 'react';
import Draggable from 'react-draggable';
import colors from '../colors';

const targetSize = '6vh';
const visualSize = '3vh';
const centerOffset = '3vh';
const teardropOffset = '1.5vh';

const teardropStyle = {
  height: visualSize,
  width: visualSize,
  left: teardropOffset,
  top: teardropOffset,
  borderRadius: '50%',
  background: colors.teardrop,
  position: 'absolute'
}

/**
*
* Component that shows a teardrop in the supplied position
*
*/
const Teardrop = props => {

    const top = props.position && props.position[1];
    const left = props.position && props.position[0];
    const hasPosition = typeof top !== undefined &&
      typeof left !== undefined && top !== undefined && left !== undefined;

    // Do not show without a position
    if (!hasPosition) {
      return null;
    }

    const style = {
      position: 'absolute',
      top: `-${centerOffset}`,
      left: `-${centerOffset}`,
      height: targetSize,
      width: targetSize,
      cursor: 'pointer'
    };

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


    return hasPosition ? (
        <Draggable onDrag={onDrag} onStart={onDragStart} onStop={onDragEnd} onMouseDown={onMouseDown} position={{x: left, y: top}}>
          <div style={style}>
            <div style={teardropStyle} />
          </div>
        </Draggable>
      )
      : null
  };

export default Teardrop;
