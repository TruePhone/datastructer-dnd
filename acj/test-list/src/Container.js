import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import MainArea from './MainArea';
import WaitingArea from './WaitingArea'
import DataNode from './DataNode'


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
};

class Container extends Component {

    render(){
        console.log('Container');
        return (<div style={ style }>
        <p>Container</p>
        <MainArea />
        <WaitingArea >
            <DataNode id='1' />
            <DataNode id='2' />
            <DataNode id='3' />
            <DataNode id='4' />
            <DataNode id='5' />
        </WaitingArea>
        
        </div>);
    }

}
export default DragDropContext(HTML5Backend)(Container);