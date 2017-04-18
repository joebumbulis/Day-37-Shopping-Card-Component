import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Cart from './components/cart.js'
import CartItems from './components/cart_items.js'

const FooBar = () => (<div>Hi</div>)

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={AppRoot}/>
          <Route path="/foobar"  component={FooBar} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/cart-tems" component={CartItems} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
