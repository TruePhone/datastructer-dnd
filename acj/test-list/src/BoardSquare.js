import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import DataNode from './DataNode';
import ItemTypes from './ItemTypes';

const squareTarget = {
  drop(props, monitor, component) {
   return {name:'BoardSquare',id:props.id};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}


class BoardSquare extends Component {
//   static propTypes = {
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired
//   };

  render() {
    const { connectDropTarget,position } = this.props;

    let style = {
        border: '1px dashed gray',
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        float:'left',
    };

    return connectDropTarget(
        
      <div style={style}>
        <p> {this.props.id} </p>
        {this.props.children}
      </div>
    );
  }
}
export default DropTarget(ItemTypes.DATANODE, squareTarget, collect)(BoardSquare);