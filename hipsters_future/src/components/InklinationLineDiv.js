import React, { Component } from 'react';
import Draggable from './Draggable';
import colors from '../colors';

const lineStyle = {
  position: 'absolute',
  height: 0,
  width: 5000,
  border: '1px dashed ' + colors.inklinationLine,
  top: '50%'
};

/**
*
* Draws a line at the inklination angle from the teardrop line using a <div>
*
*/
class InklinationLineDiv extends Component {

  constructor(props) {
    super(props);
    this.state = {
      junction: 0.5
    };
  }


    onInklinationDrag = (position) => {

      const {teardrop1, teardrop2, angle} = this.props

      const x1 = teardrop1[0];
      const y1 = teardrop1[1];
      const x2 = teardrop2[0];
      const y2 = teardrop2[1];

      // Equation of a line is y = mx +c

      const mTeardrop = (y2-y1)/(x2-x1);
      const cTeardrop = y1 - mTeardrop * x1;

      const teardropAngle = Math.atan((teardrop2[1] - teardrop1[1]) / (teardrop2[0] - teardrop1[0]));
      const angleInRadians = ((Math.PI / 180)) *  angle;
      const realAngle =  teardropAngle - angleInRadians ;

      const mInklination = Math.tan(realAngle);
      const cInklination = position.y - mInklination * position.x;

      const yj = (mInklination * cTeardrop - mTeardrop * cInklination) / (mInklination - mTeardrop)
      const xj = (yj - cTeardrop) / mTeardrop;

      // length of line from teardrop1 to junction with inklination line
      const lengthToJunction = (xj > x1 ? 1 : -1) * Math.sqrt(((xj - x1) * (xj - x1)) + ((yj - y1) * (yj - y1)));
      const teardropLength = (x2 > x1 ? 1 : -1) * Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
      const inklinationJunction = lengthToJunction / teardropLength;

      this.setState({junction: inklinationJunction})
    }


    render() {
      const {angle, teardrop1, teardrop2, zoom} = this.props;
      const {junction} = this.state

      if (typeof teardrop1 === undefined || typeof teardrop2 === undefined || teardrop1 === undefined || teardrop2 === undefined) {
        return null;
      }

      // percantage of teardrop line for the junction is given by junction
      const x1 = (teardrop2[0] - teardrop1[0]) * junction + teardrop1[0];
      const y1 = (teardrop2[1] - teardrop1[1]) * junction + teardrop1[1];

      // angle of teardrop line
      const teardropAngle = Math.atan((teardrop2[1] - teardrop1[1]) / (teardrop2[0] - teardrop1[0]));
      const angleInRadians = ((Math.PI / 180)) *  angle;
      const realAngle =  teardropAngle - angleInRadians ;


    const wrapperStyle = {
      cursor: 'pointer',
      position: 'absolute',
      height: 50,
      width: 5000,
      transform: `translateY(-25px) rotate(${realAngle}rad)`,
      transformOrigin: '0 50%'
    }

    return (

        <Draggable position={{x: x1, y: y1}} parent={document.getElementById('mainImage')} handler={this.onInklinationDrag} zoom={zoom}>
            <div style={wrapperStyle}>
              <div style={lineStyle} />
            </div>
        </Draggable>
    );
  }
  };

export default InklinationLineDiv;
