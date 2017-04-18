import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import Cart from './cart.js'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/cart">Cart</NavLink>
      <br />
      <NavLink to="/contact-us">Contact Them</NavLink>
    </nav>
  )
}

class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  onHeaderClicked ({ history }) {
    return <h1 onClick={() => history.push('/contact-us')}>Whoa!</h1>
  }

  render () {
    return (
      <main>
        <section>
          <Cart />
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
