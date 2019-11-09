import React from 'react'
import BuildController from './BuildController/BuildController'
import { classes } from 'istanbul-lib-coverage';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' }
]

const buildControls = (props) => (
  <div className={classes.BuildController}>
    {controls.map(ctrl => (
      <BuildController key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
)

export default buildControls