import React, { Component } from 'react';
import InvertButton from './InvertButton';
import ZoomButtons from './ZoomButtons';
import MainImage from './MainImage';
import AngleEntry from './AngleEntry';
import Prompt from './Prompt';
import strings from '../strings';

class ManipulationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inverted: false,
      zoom: 0,
      angle: 45,
      teardrop1: undefined,
      teardrop2: undefined
    };
  }

  onZoomClick = (zoomLevel) => {
    return () => {
      this.setState({zoom: zoomLevel})
    }
  }

  onAngleChange = (value) => {

    // Ensure angle is within bounds
    // TODO: error checking on characters
    if ((value > 0) && (value < 360)) {
      this.setState({angle: value})
    }
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
    return () => {
      this.setState(values)
    }
  }

  render() {
    const {inverted, zoom, angle, teardrop1, teardrop2} = this.state;
    const promptString = this.getPromptString();

    return (
      <div>
        <InvertButton onInvertToggle={this.onInvertToggle} inverted={inverted}/>
        <ZoomButtons zoom={zoom} onZoomClick={this.onZoomClick}/>
        <MainImage teardrop1={teardrop1} teardrop2={teardrop2} angle={angle} onChange={this.onImageChange}/>
        <AngleEntry angle={angle} onChange={this.onAngleChange}/>
        <Prompt string={promptString}/>
      </div>
    );
  };
}

export default ManipulationView;
