import React, { Component } from 'react';

/**
*
* Component to provide dragging capabilities that control
* the wrapped children's position.
*
* Handles parent element transforms like scale and translate.
*
*/
class Draggable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  static defaultProps = {
     zoom: 1
  };


  componentDidMount () {
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('touchend', this.onMouseUp)
    document.addEventListener('touchmove', this.onMouseMove)
  }

  componentWillUnmount () {
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('touchend', this.onMouseUp)
    document.removeEventListener('touchmove', this.onMouseMove)
  }


  onMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragging: true
    })
  }

    onMouseUp = (e) => {
      // e.preventDefault();
      // e.stopPropagation();
      this.setState({
        dragging: false
      })
    }

    onMouseMove = (e) => {

      const {zoom, handler, parent} = this.props

      if (this.state.dragging) {
        e.preventDefault();
        e.stopPropagation();

        const bb = parent.getBoundingClientRect();

        const x =  (e.pageX - bb.left) / zoom;
        const y = (e.pageY - bb.top) / zoom;
        handler({x: x, y: y})
      }
    }



    render() {

      const {children, position} = this.props;

      const style = {
        position: 'absolute',
        top: position.y,
        left: position.x
      };



    return (
        <div style={style} onTouchStart={this.onMouseDown}
            onMouseDown={this.onMouseDown}>
          {children}
        </div>
    );
  }
};

export default Draggable;
