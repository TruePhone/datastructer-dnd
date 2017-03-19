import React, { Component } from 'react';

const style = {
//   border: '1px dashed gray',
  position: 'absolute',
  background:'transparent',
  backgroundColor: 'white',
  padding: 0,
  top: -30,
 

};

function LineSet(i){

     switch(i){
          case 0: return null;
          break;
          case 1: return (
        <font style={{...style,
                        width:'160px',
                        top: -30,
                        left: 50,
                        transform:'rotate(-20deg)'
                        }} >
            ___________________
        </font>
    );
          break;

          case 2: return (
        <font style={{...style,
                        width:'160px',
                        top: -30,
                        left: -160,
                        transform:'rotate(20deg)'
                        }} >
            ___________________
        </font>
    );
          break;
          case 3: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: 40,
                        transform:'rotate(-30deg)'
                        }} >
            _______
        </font>
    );
          break;
          case 4: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: -55,
                        transform:'rotate(30deg)'
                        }} >
            _______
        </font>
    );
          break;
          case 5: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: 40,
                        transform:'rotate(-30deg)'
                        }} >
            _______
        </font>
    );
          break;
          case 6: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: -55,
                        transform:'rotate(30deg)'
                        }} >
            _______
        </font>
    );
          break;
          case 7: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 30,
                        transform:'rotate(-45deg)'
                        }} >
            ____
        </font>
    );
          break;
          case 8:  return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 0,
                        transform:'rotate(45deg)'
                        }} >
            ____
        </font>
    );
          break;
          case 9: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 30,
                        transform:'rotate(-45deg)'
                        }} >
            ____
        </font>
    );
          break;
          case 10: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 0,
                        transform:'rotate(45deg)'                  }} >
            ____
        </font>
    );
          break;
        case 11: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 25,
                        transform:'rotate(-45deg)'
                        }} >
            ____
        </font>
    );
          break;
          case 12: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: -10,
                        transform:'rotate(45deg)'                  }} >
            ____
        </font>
    );
          break;
        case 13: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: 20,
                        transform:'rotate(-45deg)'
                        }} >
            ____
        </font>
    );
          break;
          case 14: return (
        <font style={{...style,
                        width:'30px',
                        top: -30,
                        left: -15,
                        transform:'rotate(45deg)'                  }} >
            ____
        </font>
    );
          break;
        case 15: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 16: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
          case 17: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 18: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
       case 19: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 20: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
        case 21: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 22: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
       case 23: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 24: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
        case 25: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 26: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
        case 27: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 28: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;
        case 29: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          break;
          case 30: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          break;       
          default:
        }


}

export default class Lines extends Component {


  render() {
    return (
        <div className="Lines">
            {LineSet(this.props.id)}
        </div>
    );
  }
}

