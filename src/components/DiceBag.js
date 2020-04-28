import React from 'react';
import RollAll from './RollAll';
import Die from './Die';
import {DiceBagContext} from '../context/roll-context'
class DiceBag extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dice: [ 
                {numSides: 6, currentRoll: 0},
                {numSides: 8, currentRoll: 0},
                {numSides: 10, currentRoll: 0}
            ],
            rollAll: this.rollAll,
            rollOne: this.rollOne
        }
    }
    randomize = (die) => {
        die.currentRoll = Math.ceil(Math.random() * die.numSides);
    }
    rollAll = () => {
        const dice = Array.from(this.state.dice);
        dice.forEach((die) => {
           this.randomize(die);
        });
        this.setState({dice});
    }
    rollOne = (index) => {
        const dice = Array.from(this.state.dice);
        this.randomize(dice[index]);
        this.setState({dice});
    } 
    render() {
        const displayDice = this.state.dice.map((die, index) => {
            return(<Die die={die} index={index}/>)
        })  
        return (
            <DiceBagContext.Provider value={this.state}>
                <div>
                    Roll them dice!
                    <RollAll/>
                    {displayDice}
                </div>
            </DiceBagContext.Provider>
        );
    }    
}

export default DiceBag;