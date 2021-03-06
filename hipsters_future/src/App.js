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
  background: colors.background,
  overflow: 'hidden'
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


  onImageLoad = (blob) => {
      this.setState({imageData: blob});
  }

  render() {

    const {view, imageData} = this.state;

    return (
      <div style={style}>
        {view === openingView ?
          <OpeningView onInputImage={this.showImagePreview} onImageLoad={this.onImageLoad}/>
          : null
        }
        {view === imagePreviewView ?
          <ImagePreview imageData={imageData}
            onContinue={this.showManipulationView} onImageLoad={this.onImageLoad}/>
          : null
        }
        {view === manipulationView ?
          <ManipulationView imageData={imageData} onNewImage={this.showImagePreview}/>
          : null
        }
      </div>
    );
  };
}

export default App;
