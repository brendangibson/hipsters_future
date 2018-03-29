import React, { Component } from 'react';
import InvertButton from './InvertButton';
import ZoomButtons from './ZoomButtons';
import MainImage from './MainImage';
import AngleEntry from './AngleEntry';
import Prompt from './Prompt';
import strings from '../strings';
import colors from '../colors';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

const controlsStyle = {
  position: 'absolute',
  padding: '5vh',
  background: colors.overlay,
  top: 0,
  right: 0,
  zIndex: 1
};

const angleOverlayStyle = {
  position: 'absolute',
  padding: '2vh',
  background: colors.overlay,
  bottom: 0,
  width: '100%'
};

/**
*
* View where the user can manipulate the teardrops and lines on the image
*
*/
class ManipulationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inverted: false,
      zoom: 1,
      angle: 45,
      teardrop1: undefined,
      teardrop2: undefined,
      inklinationJunction: 0.5
    };
  }

  onZoomClick = (zoomLevel) => {
    return () => {
      this.setState({zoom: zoomLevel})
    }
  }

  onAngleChange = (e) => {

    const value = e.target.value;

    // Ensure angle is within bounds
    // TODO: error checking on characters
    // if ((value > 0) && (value < 360)) {
      this.setState({angle: value})
    // }
  }

  getPromptString = () => {
    const {teardrop1, teardrop2, angle} = this.state
    if (!teardrop1) {
      return strings.addFirstTeardropPrompt;
    }
    if (!teardrop2) {
      return strings.addSecondTeardropPrompt;
    }
    if(!angle) {
      return strings.dragPrompt;
    }
    return null;
  }

  onImageChange = (values) => {
      this.setState(values)
  }

  onInvertToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({inverted: !this.state.inverted})
  }

  render() {
    const {inverted, zoom, angle, teardrop1, teardrop2, inklinationJunction} = this.state;
    const {imageData} = this.props;
    const promptString = this.getPromptString();

    return (
      <div style={style}>
        <div style={controlsStyle}>
          <InvertButton onInvertToggle={this.onInvertToggle} inverted={inverted}/>
          <ZoomButtons zoom={zoom} onZoomClick={this.onZoomClick}/>
        </div>
        <MainImage imageData={imageData} teardrop1={teardrop1}
          teardrop2={teardrop2} angle={angle} zoom={zoom}
          onChange={this.onImageChange} inverted={inverted} inklinationJunction={inklinationJunction}/>


        <div style={angleOverlayStyle}>
          <AngleEntry angle={angle} onChange={this.onAngleChange}/>
          <Prompt string={promptString}/>
        </div>
      </div>
    );
  };
}

export default ManipulationView;
