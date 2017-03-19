import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Lines from './Lines'
import {getDataStructer,getLevel} from './Control';


class BoardSquare extends Component {




  render() {
    //  console.log(renderSquare());
    // console.log(fuck());
    // let dom = fuck();
      let {position,id} = this.props;
      

      if (this.props.position ==='WaitingArea'){
        let style={
            width: '10%',
        }
        return( 
        <div style={style}>
          {this.props.children}
        </div>)
      }

      let style={
            // backgroundColor: '#3399FF',
            height: '100%',
            width: '52px',
            marginLeft: '0.3rem',
            marginRight: '0.3rem',
            position:'relative',
        }

      switch(getLevel(this.props.id)){
          case 1:  style.marginLeft= '11.5rem';
                   style.marginRight= '11.5rem';
          break;
          case 2:  style.marginLeft= '5rem';
                   style.marginRight= '5rem';
          break;
          case 3:  style.marginLeft= '1.8rem';
                   style.marginRight= '1.8rem';
          break;
          case 4:  style.marginLeft= '0.1rem';
                   style.marginRight= '0.1rem';
          break;
          default:
        }
    const piece = (this.props.children ===null) ?
    null :
    <Lines id={this.props.id}/>;

    return (
      <div style={style}>
       {this.props.children}
       {piece}
      </div>
    );
  }
}
export default BoardSquare;