import React from 'react';
import {DiceBagContext} from "./../context/roll-context"

function RollAll(){
    return(
        <DiceBagContext.Consumer>
            {({ rollAll}) => (
                <button
                onClick={rollAll}
                >
                    Roll All Dice
                </button>
            )}
        </DiceBagContext.Consumer>
    )
}

export default RollAll