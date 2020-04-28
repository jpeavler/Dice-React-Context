import React from 'react';
import {DiceBagContext} from '../context/roll-context'

function Die({die, index}){
    return(
        <DiceBagContext.Consumer>
            {({rollOne}) => (
                <div>
                    {die.numSides} : {die.currentRoll}
                    <button
                        onClick={() => rollOne(index)}
                    >
                        Roll
                    </button>
                </div>
            )}
        </DiceBagContext.Consumer>
    )
}
export default Die;