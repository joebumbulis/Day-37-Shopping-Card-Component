import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CartItems from './cart_items.js'

class Cart extends React.Component {

  render () {
    return (
      <main>
        {this.props.items.map((item, i)=>{
          return <CartItems key={i} item={item}/>
      })}
      </main>
    );
  }
}

export default connect(container.allState)(Cart);
