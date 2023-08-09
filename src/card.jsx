import React, { Component } from "react";
// import footerline from "./line.svg"
import line from "./lline.svg"

class Card extends Component {
    state = {
      items: {},
    };
  
    componentDidMount() {
      const promise = fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((json) => {
            this.setState({items:json.slip})
           });

    }
  
    render() {
        // console.log(this.state.items.id);
      return (
        <div className="thecard">
    <h1 style={{color:"yellow"}}>
    ADVICE #
        <span style={{color:"yellow"}}>
        {this.state.items.id}
        </span>
    </h1>
    <h1>{this.state.items.advice}</h1>

     <br />
     <br />
     <br />
     <br />
     <br />
     <br />

    

    <img src={line}   alt="" />
    <br />
 

     <button className="dicebutton" onClick={()=>{window.location.reload(true);}}>
    <i className="fa-solid fa-dice" 
    style={{fontSize:"40px"}}></i>
    </button>
    
    </div>
      );
    }
  }
  
  export default Card;
  