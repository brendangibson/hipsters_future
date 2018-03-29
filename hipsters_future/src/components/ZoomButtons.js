import React, { Component } from 'react';
import strings from '../strings';

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

    return (
      <div>
        <button onClick={onZoomClick(zoom + 1)} disabled={zoom === MAX ? true : null}>
          {strings.zoomInButton}
        </button>
        <button onClick={onZoomClick(zoom - 1)} disabled={zoom === MIN ? true : null}>
          {strings.zoomOutButton}
        </button>
      </div>
    );
  };
}

export default ZoomButtons;
