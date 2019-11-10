import React from 'react'

import Aux from '../../../hoc/Aux'
import classes from './OrderSummary.css'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      )
    })
  
    return (
      <Aux>
        <div className={classes.OrderSummary}>
          <h3>Your Order:</h3>
          <ul>
            {ingredientSummary}
          </ul>
          <p>Continue to Checkout?</p>
        </div>
      </Aux>
    )
}

export default orderSummary