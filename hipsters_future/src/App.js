import React, { Component } from 'react';
import OpeningView from './components/OpeningView';
import ImagePreview from './components/ImagePreview';
import ManipulationView from './components/ManipulationView';
import './reset.css';
import './App.css';
import colors from './colors'

// Constants for the possible view settings
const openingView = Symbol('OPENING_VIEW');
const imagePreviewView = Symbol('IMAGE_PREVIEW_VIEW');
const manipulationView = Symbol('MANIPULATION_VIEW');

const style = {
  width: '100vw',
  height: '100vh',
  background: colors.background
}


class App extends Component {
  constructor(props) {
    super(props);

    // start with opening view
    this.state = {view: openingView};
  }

  // Methods to update the view.
  // This is a very simple router for this prototype, that just shows the
  // current view based on the view state setting
  showImagePreview = () => {
    this.setState({view: imagePreviewView});
  }

  showManipulationView = () => {
    this.setState({view: manipulationView});
  }

  render() {

    const {view} = this.state;

    return (
      <div style={style}>
        {view === openingView ?
          <OpeningView onImageUpload={this.showImagePreview}/>
          : null
        }
        {view === imagePreviewView ?
          <ImagePreview onContinue={this.showManipulationView}/>
          : null
        }
        {view === manipulationView ?
          <ManipulationView onNewImage={this.showImagePreview}/>
          : null
        }
      </div>
    );
  };
}

export default App;
