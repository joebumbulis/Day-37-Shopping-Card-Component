import container from '../containers/all.js'
import { connect } from 'react-redux'



export default function addItem (id, price) {
  return function (dispatch) {
    dispatch({ type: "ADD_ITEM", id: id, price: price});

  }
}
