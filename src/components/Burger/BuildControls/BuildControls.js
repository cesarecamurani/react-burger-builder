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
    {controls.map(ctrl => (
      <BuildController 
        key={ctrl.label} 
        label={ctrl.label} 
        more={() => props.ingredientAdded(ctrl.type)}/>
    ))}
  </div>
)

export default buildControls