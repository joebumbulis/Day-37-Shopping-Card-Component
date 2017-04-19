import { createStore } from 'redux'
import store from '../store.js'
import addItem from '../actions/add_item.js'

const initialState = {
  items: [
    { id: 1, itemName: "Football", price: 49.99},
    { id: 2, itemName: "Baseball", price: 9.99},
    { id: 3, itemName: "Basketball", price: 39.99},
    { id: 4, itemName: "Soccer Ball", price: 24.99},
    { id: 5, itemName: "Softball", price: 12.99},
    { id: 6, itemName: "La Crosse Ball", price: 9.99},
    { id: 7, itemName: "Golf Balls", price: 14.99}
  ],
  cartItems: [
    { id: 1, itemName: "Football", price: 49.99},
    { id: 2, itemName: "Baseball", price: 9.99},
    { id: 3, itemName: "Basketball", price: 39.99},
    { id: 4, itemName: "Soccer Ball", price: 24.99},
    { id: 5, itemName: "Softball", price: 12.99},
    { id: 6, itemName: "La Crosse Ball", price: 9.99},
    { id: 7, itemName: "Golf Balls", price: 14.99}
  ],
  total: 0
}


export default function AppReducer (state, action) {
  console.log(createStore(function(state = [], action) {
        return state;
    }));

  if (state === undefined) {
    return initialState;
  }

  switch(action.type){
    case "REMOVE_ITEM":
    var newItem = action.price
    var newTotal = {total: state.total - newItem};
    if (state.total <= 0){
      state.total = 0
    } else {

    }
    return Object.assign({}, state, newTotal)


    case "ADD_ITEM":
    var total = parseFloat(state.total);
     var newItem = action.price;
     var newTotal = (total + newItem).toFixed(2);
    return Object.assign({}, state, {total: newTotal});

  };

  console.debug("Unhandled Action!", action.type);
  return state;
};
