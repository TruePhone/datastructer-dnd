import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {getDataStructer,flush,getMaxNum} from './Control';
import Lines from './Lines'



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

    if(!dropResult){
      return;
    }

    if (dropResult.name ==='MainArea'  && item.position ==='WaitingArea') {
      if (getDataStructer().getLength() >= 31){
        alert('主数据区已满');
        return;
      } 
        getDataStructer().append(item.id);
        flush();
        console.log('append:'+item.id);

    }

    if (dropResult.name ==='WaitingArea'&& item.position !=='WaitingArea'){
  
        getDataStructer().remove(item.position);
        flush();
        console.log('delete-position:'+item.position );

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
        const { connectDragSource, isDragging } = this.props;

        let style = {
          border: '1px dashed gray',
          borderRadius : '900px',
          height: '50px',
          width: '50px',
          opacity: isDragging ? 0.4 : 1,
          backgroundColor: 'red',
        };
        
        switch(this.props.id){
          case 1: style.backgroundColor= '#00FFFF';
          break;
          case 2: style.backgroundColor= '#1AFD9C';
          break;
          case 3: style.backgroundColor= '#3333FF';
          break;
          case 4: style.backgroundColor= '#F9F900';
          break;
          case 5: style.backgroundColor= '#7D7DFF';
          break;
          case 6: style.backgroundColor= '#A6A6D2';
          break;
          case 7: style.backgroundColor= '#C07AB8';
          break;
          case 8: style.backgroundColor= '#FFAF60';
          break;
          case 9: style.backgroundColor= '#FF00FF';
          break;  
          default:
        }
      

        return connectDragSource(
            <div style={ style }><p >{this.props.id}</p></div>
        );
    }
}
export default DragSource(ItemTypes.DATANODE, dataNodeSource, collect)(dataNode);