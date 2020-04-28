import React, {Component} from 'react';
import {DiceBagContext} from '../context/roll-context'

class DiceForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            numSides: 2
        }
    }
    handleInput = (event) => {
        event.preventDefault();
        this.setState({numSides: event.target.value})
    }
    render(){
        return(
            <DiceBagContext.Consumer>
                {({addToDice}) => (
                    <div>
                        Add new Die to collection:
                        <input type="number" onChange={this.handleInput}/>
                        <button
                            onClick={() => addToDice({numSides: this.state.numSides, currentRoll: 0})}
                        >
                            Add Die
                        </button>
                    </div>
                )}
            </DiceBagContext.Consumer>
        )
    }
    
}
export default DiceForm;