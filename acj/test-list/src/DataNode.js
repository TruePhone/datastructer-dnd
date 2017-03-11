import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {getDataStructer,flush,getMaxNum} from './Control';



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

    if (dropResult.name ==='BoardSquare'  && item.position ==='WaitingArea') {
      if (getDataStructer().getLength() >= getMaxNum()){
        alert('主数据区已满');
        return;
      }

      if (dropResult.id ===getDataStructer().getLength()){
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
          case 9: style.backgroundColor= 'yellow';
          break;  
          default:
        }
      

        return connectDragSource(
            <div style={ style }><p>D{this.props.id}</p></div>
        );
    }
}
export default DragSource(ItemTypes.DATANODE, dataNodeSource, collect)(dataNode);