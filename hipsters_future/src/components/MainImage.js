import React from 'react';
import Draggable from 'react-draggable';
import Teardrop from './Teardrop';
import InklinationLineDiv from './InklinationLineDiv';
import TeardropLine from './TeardropLine';

const style = {
  height: '100%',
  width: '100%',
  display: 'block',
  margin: '0 auto',
  overflow: 'hidden',
  position: 'relative'
}

const svgStyle = {
  height: '100vh',
  width: '100vw'
}

/**
*
* Component that holds the image and the lines and teardrops that have been
* drawn on it.
*
*/
const MainImage = props => {

    const {imageData, zoom, teardrop1, teardrop2, inverted, angle} = props

    const innerStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transformOrigin: 'center center',
      // Using the same scale on the image and the lines and teardrops so they
      // stay in the same place relative to each other.
      // TODO: fix draggig when zoomed
      transform: `scale(${zoom})`
    }

    const imgStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      filter: inverted ? 'invert(1)' : null,
      zIndex: -1 // to be able to see SVG over the top
    }

    const onClick = (e) => {

      // Teardrops already added, ignore
      if (teardrop1 && teardrop1.length && teardrop2 && teardrop2.length) {
        return
      }

      const target = e.target
      if (!target) { return }

      // Get position relative to bounding box
      const boundingClientRect = target.getBoundingClientRect();
      const x = e.clientX - boundingClientRect.left;
      const y = e.clientY - boundingClientRect.top;

      if (!teardrop1 || !teardrop1.length) {
        props.onChange && props.onChange({teardrop1: [x, y]})
      } else {
        if (!teardrop2 || !teardrop2.length) {
          props.onChange && props.onChange({teardrop2: [x, y]})
        }
      }

      // otherwise do nothing
    }

    const onTeardrop1Drag = (position) => {
      props.onChange && props.onChange({teardrop1: [position.x, position.y]})
    }

    const onTeardrop2Drag = (position) => {
      props.onChange && props.onChange({teardrop2: [position.x, position.y]})
    }



    return (
      <div style={style} onClick={onClick}>
        <Draggable>
          <div>
          <div style={innerStyle} id='mainImage'>
            <img src={imageData} style={imgStyle} alt='hip alignment'/>
            <Teardrop position={teardrop1} onDrag={onTeardrop1Drag} zoom={zoom}/>
            <Teardrop position={teardrop2} onDrag={onTeardrop2Drag} zoom={zoom}/>
            <InklinationLineDiv teardrop1={teardrop1}
              teardrop2={teardrop2} angle={angle}
              zoom={zoom} />
            <svg style={svgStyle}>
              <TeardropLine teardrop1={teardrop1} teardrop2={teardrop2} />
            </svg>
          </div>
          </div>
        </Draggable>
      </div>
    );
  };

export default MainImage;
