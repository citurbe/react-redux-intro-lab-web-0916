import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import App from './App'
import {getInventoryListItems} from './actions/inventoryItemsActions'
import {addInventoryListItem} from './actions/inventoryItemsActions'

const store = configureStore();

store.dispatch(getInventoryListItems())



const renderApp = () => {ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('container')
);}

renderApp()
