import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import DataNode from './DataNode';
import BoardSquare from './BoardSquare';
const WaitingAreaTarget = {
    canDrop(props, monitor) {
      if(monitor.getItem().position==="WaitingArea"){
        return false;
      }else{
        return true;
      }
        
    },
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
  height : '50px',
  width:'100%',
  display: 'flex',
  flexDirection: 'row', 
  flexWrap: 'wrap',
  position: 'relative',
};

 class WaitingArea extends Component {

    
    renderSquare(i){
      return (           
          <BoardSquare key={i} position='WaitingArea'>
                <DataNode id={i} position='WaitingArea'/>
          </BoardSquare>
      );
    }

    renderOverlay(color) {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color,
          }}
        />
      );
    }

    render(){
        const { connectDropTarget,canDrop,isOver } = this.props;

        const squares = [];
        for (let i = 0; i <= 9; i += 1) {
            squares.push(this.renderSquare(i));
        }  
   

        return connectDropTarget(
            <div style={ style }>
                {squares}
            {!isOver && canDrop && this.renderOverlay('yellow')}
            {isOver && canDrop && this.renderOverlay('green')}
            </div>
            
        );
    }
}
export default DropTarget(ItemTypes.DATANODE, WaitingAreaTarget, collect)(WaitingArea);