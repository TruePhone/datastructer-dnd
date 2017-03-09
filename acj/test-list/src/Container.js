import React, {Component,PropTypes} from 'react';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import MainArea from './MainArea';
import WaitingArea from './WaitingArea';
import DataNode from './DataNode';
import { observe } from './Control';


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
};

class Container extends Component {
    constructor(props){
        super(props);
        this.state={random :Math.random()}
        this.unobserve = observe(this.handleChange.bind(this));
    }

   handleChange() {
    const nextState = { random :Math.random() };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

    render(){
        return (<div style={ style }>
        <p>Container</p>
        <MainArea />
        <WaitingArea >
            <DataNode id='1' position='WaitingArea'/>
            <DataNode id='2' position='WaitingArea'/>
            <DataNode id='3' position='WaitingArea'/>
            <DataNode id='4' position='WaitingArea'/>
            <DataNode id='5' position='WaitingArea'/>
            <DataNode id='6' position='WaitingArea'/>
            <DataNode id='7' position='WaitingArea'/>
            <DataNode id='8' position='WaitingArea'/>
            <DataNode id='9' position='WaitingArea'/>
        </WaitingArea>
        
        </div>);
    }

}
export default DragDropContext(HTML5Backend)(Container);
