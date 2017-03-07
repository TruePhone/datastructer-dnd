import React, { Component, PropTypes } from 'react';
import DataNode from './DataNode';

export default class BoardSquare extends Component {
//   static propTypes = {
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired
//   };

  render() {
    const { position } = this.props;
    let style = {
        border: '1px dashed gray',
        backgroundColor: 'blue',
        height: '50px',
        width: '50px',
        float:'left',
    };

    return (
        
      <div style={style}>
        <p> Square </p>
        {this.props.children}
      </div>
    );
  }
}