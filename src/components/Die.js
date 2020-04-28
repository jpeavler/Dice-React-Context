import React, {Component} from 'react';
import {RollContext} from './../context/roll-context'

class Die extends Component{
    constructor(props){
        super(props)
        this.state = {
            sides: this.props.sides,
            result: 0
        }
        this.handleRoll = this.handleRoll.bind(this);
    }
    handleRoll(event){
        event.preventDefault();
        let rollResult = Math.ceil(Math.random() * this.state.sides);
        this.setState({result: rollResult});
    }
    render(){
        return(
            <RollContext.Consumer>
                <h3>Number of Sides: {this.state.sides}</h3>
                {this.state.result}
                <button onClick = {this.handleRoll}>Roll Die</button>
            </RollContext.Consumer>
        );
    };
}

export default Die;