import React, {Component,PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {getDataStructer,flush} from './Control';



const dataNodeSource = {
  beginDrag(props, monitor, component) {
    return {
        name:'dataNode',
        id : props.id,
        position : props.position,
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('here')
    console.log(item);
    console.log(dropResult);
    if (dropResult.name ==='BoardSquare'  && item.position ==='WaitingArea') {
      if (dropResult.id ==getDataStructer().getLength()){
        getDataStructer().append(item.id);
        console.log('append');
        flush();
      }else{
        getDataStructer().insert(dropResult.id,item.id);
         console.log('insert');
        flush();
      }
    }

    if (dropResult.name ==='WaitingArea'&& item.position !=='WaitingArea'){
        getDataStructer().remove(item.position);
        flush();
        console.log('delete');
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class dataNode extends Component {
    render(){
        const { connectDragSource, isDragging,id } = this.props;

        let style = {
        border: '1px dashed gray',
        backgroundColor: 'yellow',
        borderRadius : '900px',
        height: '50px',
        width: '50px',
        float:'left',
        opacity: isDragging ? 0.5 : 1,
        margin: '5px',
        };

        return connectDragSource(
            <div style={ style }><p>D{this.props.id}</p></div>
        );
    }
}
export default DragSource(ItemTypes.DATANODE, dataNodeSource, collect)(dataNode);