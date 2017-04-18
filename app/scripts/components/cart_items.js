import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class CartItems extends React.Component {

  constructor (props) {
    super(props);
    // this.state = {}

    // this.handleClick = this.handleClick.bind(this)
  }



  render () {
    return (
      <section>
        <table><tbody><tr>
          <th>{this.props.item.itemName} </th>
          <td>{this.props.item.price}</td>
        </tr></tbody></table>
        <button onClick={this.props.removeClick} >remove from cart</button>
        <button onClick={this.props.addClick} >add to cart</button>

      </section>
    )
  }
}

export default CartItems
