import React from 'react';
import {RollContext} from './roll-context'

function RollAllButton() {
    return(
        <RollContext.Consumer>
        {({ rollAll }) => (
            <button
            onClick={rollAll}
            >Roll All Dice
            </button>
        )}
        </RollContext.Consumer>
    )
}
export default RollAllButton;