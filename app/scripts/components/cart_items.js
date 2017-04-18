import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class CartItems extends React.Component {

  constructor (props) {
    super(props);
    this.state = {}

    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange (e) {
  //   this.setState({
  //     name: e.target.value
  // //   })
  // }

  render () {
    return (
      <section>
        <table><tbody><tr>
          <th>{this.props.item.itemName} </th>
          <td>{this.props.item.price}</td>
        </tr></tbody></table>

      </section>
    )
  }
}

export default CartItems
