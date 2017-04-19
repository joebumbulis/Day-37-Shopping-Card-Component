import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CartItems from './cart_items.js'
import addItem from '../actions/add_item.js'

class Cart extends React.Component {
    constructor (props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.addClick = this.addClick.bind(this);
    }

  handleClick (id, price) {
    return ()=>{
        this.props.dispatch({ type: "REMOVE_ITEM", id: id, price: price})
      }
    }

  addClick (id, price) {
    return ()=>{
        this.props.dispatch(addItem(id, price))
      }
    }

  render () {
    return (
      <main>
      <p>Total ${this.props.total}</p>
        {this.props.cartItems.map((item, i)=>{
          return <CartItems  key={i} item={item} removeClick={this.handleClick(item.id, item.price)} addClick={this.addClick(item.id, item.price)}/>
      })}
      </main>
    );
  }
}

export default connect(container.allState)(Cart);
