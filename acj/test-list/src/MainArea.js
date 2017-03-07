import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import BoardSquare from './BoardSquare'
import Square from './Square';

const style = {
  border: '1px dashed red',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '280px'
};




export default class MainArea extends Component {

    renderSquare(i) {
    const position = i;
    return (
        <div key={i}
            style={{ width: '12.5%', 
                height: '25%',
                float:'left'
        }}>
        <Square >
            {/*{this.renderPiece(x, y)}*/}
        </Square>
        </div>
    );
    }

    render(){
        const squares = [];
        for (let i = 0; i < 8; i += 1) {
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