import React, {Component,PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const WaitingAreaTarget = {

  drop(props, monitor, component) {
   return {name:'WaitingArea'};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '130px'
};

 class WaitingArea extends Component {
    render(){
        const { connectDropTarget,position } = this.props;
        return connectDropTarget(
            <div style={ style }>
                <p>WaitingArea</p>
                {this.props.children}
            </div>
        );
    }
}
export default DropTarget(ItemTypes.DATANODE, WaitingAreaTarget, collect)(WaitingArea);