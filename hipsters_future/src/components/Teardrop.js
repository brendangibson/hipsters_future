import React from 'react';
import Draggable from './Draggable';
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

  const {zoom, position} = props

    const top = position && position[1];
    const left = position && position[0];
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

    return hasPosition ? (
        <Draggable zoom={zoom} handler={props.onDrag}
            parent={document.getElementById('mainImage')}
            position={{x: left, y: top}}>
          <div style={style}>
            <div style={teardropStyle} />
          </div>
        </Draggable>
      )
      : null
  };

export default Teardrop;
