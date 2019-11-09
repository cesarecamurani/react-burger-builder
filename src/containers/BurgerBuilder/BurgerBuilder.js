import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger' 
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  meat: 2,
  bacon: 1,
  salad: 0.5,
  cheese: 1
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5
  }

  addIngredientHandler = (type) => {
    const prevCount = this.state.ingredients[type]
    const updatedCount = prevCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const prevPrice = this.state.totalPrice
    const updatedPrice = prevPrice + priceAddition
    this.setState({
      totalPrice: updatedPrice, 
      ingredients: updatedIngredients
    })
  }

  removeIngredientHandler = (type) => {

  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}/>
      </Aux>
    )
  }
}

export default BurgerBuilder
