import React from 'react'
import classes from './BuildControls.css';
import BuildController from './BuildController/BuildController'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p><b>Total Price: £{props.price.toFixed(2)}</b></p>
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    > ORDER NOW!
    </button>
    <br />
    {controls.map(ctrl => (
      <BuildController 
        key={ctrl.label} 
        label={ctrl.label} 
        more={() => props.ingredientAdded(ctrl.type)}
        less={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
)

export default buildControls