import React, {Component} from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import MainArea from './MainArea';
import WaitingArea from './WaitingArea';
import { observe } from './Control';


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row', 
  flexWrap:  'wrap',
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
        <h4>堆(Heap):</h4>
        <MainArea fuck={this.state} />
        <WaitingArea >
        </WaitingArea>
        
        </div>);
    }

}
export default DragDropContext(HTML5Backend)(Container);
