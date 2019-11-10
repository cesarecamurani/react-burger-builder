import React from 'react'

import classes from './BuildController.css'

const buildController = (props) => (
  <div className={classes.BuildController}>
    <div className={classes.Label}>{props.label}</div>
    <button 
      className={classes.More} 
      onClick={props.more}> More
    </button>
    <button 
      className={classes.Less} 
      onClick={props.less} 
      disabled={props.disabled}> Less
    </button>
  </div>
)

export default buildController