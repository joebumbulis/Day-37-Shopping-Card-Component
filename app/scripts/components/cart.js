import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CartItems from './cart_items.js'

class Cart extends React.Component {
    constructor (props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.addClick = this.addClick.bind(this);
    }

  handleClick (id) {
    return ()=>{
        this.props.dispatch({ type: "REMOVE_ITEM", id: id})
      }
    }

  addClick (id) {
    return ()=>{
        this.props.dispatch({ type: "ADD_ITEM", id: id})
      }
    }

  render () {
    return (
      <main>
      <p>Total ${this.props.total}</p>
        {this.props.cartItems.map((item, i)=>{
          return <CartItems  key={i} item={item} removeClick={this.handleClick(item.id)} addClick={this.addClick(item.id)}/>
      })}
      </main>
    );
  }
}

export default connect(container.allState)(Cart);
