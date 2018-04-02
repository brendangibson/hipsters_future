import React, { Component } from 'react';
import strings from '../strings';
import colors from '../colors';

// max and min zoom levels
const MAX = 10;
const MIN = 1;

/**
*
* Buttons that allow the user to zoom in and out of the image.
* May not be necessary on an iPad, but helps on a laptop...
*
*/
class ZoomButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {zoom, onZoomClick} = this.props;

    const style = {
      color: colors.buttonText,
      background: colors.controlButton,
      textAlign: 'center',
      padding: '0 3vw',
      height: '8vh',
      border: 'none',
      cursor: 'pointer',
      fontSize: '5vh'
    }

    return (
      <div>
        <button style={style} onClick={onZoomClick(zoom + 1)} disabled={zoom === MAX ? true : null}>
          {strings.zoomInButton}
        </button>
        <div style={{width: '1vw', display: 'inline-block'}}/>
        <button style={style} onClick={onZoomClick(zoom - 1)} disabled={zoom === MIN ? true : null}>
          {strings.zoomOutButton}
        </button>
      </div>
    );
  };
}

export default ZoomButtons;
