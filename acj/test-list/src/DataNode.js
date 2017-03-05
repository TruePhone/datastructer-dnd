import React, {Component,PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';



const dataNodeSource = {
  beginDrag() {
    return {
        id : this.state.id,
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class dataNode extends Component {
    render(){
        const { connectDragSource, isDragging } = this.props;

        let style = {
        border: '1px dashed gray',
        backgroundColor: 'yellow',
        borderRadius : '900px',
        height: '50px',
        width: '50px',
        float:'left',
        opacity: isDragging ? 0.5 : 1
        };

        console.log('data');
        return connectDragSource(
            <div style={ style }><p>D{this.props.id}</p></div>
        );
    }
}
export default DragSource(ItemTypes.DATANODE, dataNodeSource, collect)(dataNode);