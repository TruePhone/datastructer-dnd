import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer,getMaxNum} from './Control';
import { DropTarget } from 'react-dnd';
import DataNode from './DataNode';
import ItemTypes from './ItemTypes';


const areaTarget = {
    canDrop(props, monitor) {
      if(monitor.getItem().position==="WaitingArea"){
        return true;
      }
      return false;
    },

  drop(props, monitor, component) {
   return {name:'MainArea'};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const style_block = {
    // backgroundColor:'red',
    flex:1,
    // border: '1px dashed blue',
    height:'100%'
};
const style = {
  border: '1px dashed red',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '360px',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  position:'relative',
};
const style_row ={
    height : '60px',
    width : '100%',
    display: 'flex',
}

class MainArea extends Component {


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

    renderPiece(i){
        if (i>=getDataStructer().getLength()){
            return null;
        }else{
            return  <DataNode id={getDataStructer().get(i)} position={i} />
        }         
    }


    renderLevel(i){
        const level = [];
        //style_block.width =(getMaxNum()-Math.pow(2,i))+"px" ;
        level.push(<div key={100} className="Grid-cell" style={style_block}></div>);
        for(let j=Math.pow(2,i)-1;j<Math.pow(2,i+1)-1;j++){
            level.push(
                <BoardSquare key={j} id={j} position='MainArea'>
                     {this.renderPiece(j)}
                </BoardSquare>);
        }
        level.push(<div key={101} className="Grid-cell" style={style_block}></div>);
        return (
            <div key={i} className="Row" style={style_row}>
            {level}
            </div>
        )
    }

    render(){
        const { connectDropTarget,isOver, canDrop, } = this.props;
        const levels = [];
        for (let i = 0; i < 5; i += 1) {
            levels.push(this.renderLevel(i));
        }        
        return connectDropTarget(
            <div className="Grid" style={style}>
            {levels}
            {!isOver && canDrop && this.renderOverlay('yellow')}
            {isOver && canDrop && this.renderOverlay('green')}
            
            </div>
        );
    }
}
export default DropTarget(ItemTypes.DATANODE, areaTarget, collect)(MainArea);