import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';

const style = {
  border: '1px dashed red',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '280px'
};




export default class MainArea extends Component {
    render(){
        console.log('MainArea');
        return (
            <div style={ style }><p>MainArea</p></div>
        );
    }
}