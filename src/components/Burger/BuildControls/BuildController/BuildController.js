import React from 'react'

import classes from './BuildController.css'

const buildController = (props) => (
  <div className={classes.BuildController}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More}>Add Ingredient</button>
    <button className={classes.Less}>Remove Ingredient</button>
  </div>
)

export default buildController