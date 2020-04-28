import React from 'react';
import RollAll from './RollAll'
import {DiceBagContext} from '../context/roll-context'
class DiceBag extends React.Component {
    constructor(props){
        super(props);

        this.rollAll = () => {
            const dice = Array.from(this.state.dice);
            dice.forEach((die) => {
               die.currentRoll = Math.ceil(Math.random() * die.numSides);
            });
            this.setState({dice});
        }
        this.state = {
            dice: [ 
                {numSides: 6, currentRoll: 0},
                {numSides: 8, currentRoll: 0},
                {numSides: 10, currentRoll: 0}
            ],
            rollAll: this.rollAll,
        }
    }
    render() {
        const displayDice = this.state.dice.map(die => {
            return(
                <div>
                    {die.numSides} : {die.currentRoll}
                </div>
            )
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

export default DiceBag