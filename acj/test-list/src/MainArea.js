import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import BoardSquare from './BoardSquare'
import Square from './Square';
import {getDataStructer} from './Control';
import DataNode from './DataNode'

const style = {
  border: '1px dashed red',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '280px'
};




export default class MainArea extends Component {
    constructor(props){
        super(props);
    }

    renderSquare(i) {
        const position = i;
        return (
            <div key={i}
                style={{ width: '12.5%', 
                    height: '40%',
                    float:'left'
            }}>
            <BoardSquare id={i}>
                {this.renderPiece(i)}
            </BoardSquare>
            </div>
        );
    }
    renderPiece(i){
        if (i>=getDataStructer().getLength()){
            return null;
        }else{
            return  <DataNode id={getDataStructer().get(i)} position={i} />
        }
            

    }

    render(){
        let arrayList = getDataStructer()
        const n = arrayList.getLength();
        
        console.log(n);
        const squares = [];
        for (let i = 0; i <= n; i += 1) {
        squares.push(this.renderSquare(i));
        }        
        return (
            <div style={ style }>
                <p>MainArea</p>
                {squares}
            </div>
        );
    }
}