import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  height : '130px'
};

export default class WaitingArea extends Component {
    render(){
        console.log('WaitingArea');
        return (<div style={ style }><p>WaitingArea</p>
        {this.props.children}</div>);
    }
}