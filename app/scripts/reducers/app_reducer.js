import { createStore } from 'redux'
import store from '../store.js'

const initialState = {
  items: [
    { itemName: "Football", price: "49.99"},
    { itemName: "Baseball", price: "9.99"},
    { itemName: "Basketball", price: "39.99"},
    { itemName: "Soccer Ball", price: "24.99"},
    { itemName: "Softball", price: "12.99"},
    { itemName: "La Crosse Ball", price: "9.99"},
    { itemName: "Golf Balls", price: "14.99"}
  ],
  total: " "
}


export default function AppReducer (state, action) {
  console.log(createStore(function(state = [], action) {
        return state;
    }));

  if (state === undefined) {
    return initialState;
  }

  switch(action.type){
    case "TESTING":
    console.log("Testing reducer");
    console.log(state);
    return state;
  }

  console.debug("Unhandled Action!", action.type);
  return state;
};
