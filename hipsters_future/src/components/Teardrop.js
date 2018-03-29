import React from 'react';
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
      top: `calc(${top}px - ${centerOffset})`,
      left: `calc(${left}px - ${centerOffset})`,
      height: targetSize,
      width: targetSize,
      cursor: 'pointer'
    };

    console.log('style: ', style)
    console.log('teardropStyle: ', teardropStyle)

    const onDrag = (e) => {
      const target = e.target;
      if (!target) {
        return
      }

      const x = target.clientX;
      const y = target.clientY;

      props.onDrag && props.onDrag([x, y])
    }


    return hasPosition ? (
        <div style={style} onDrag={onDrag}>
          <div style={teardropStyle} />
        </div>
      )
      : null
  };

export default Teardrop;
