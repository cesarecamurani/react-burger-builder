import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
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
          <p><b>Total Price: £{props.price.toFixed(2)}</b></p>
          <p>Continue to Checkout?</p>
          <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
          <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </div>
      </Aux>
    )
}

export default orderSummary