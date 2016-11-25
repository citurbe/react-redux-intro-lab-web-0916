import React, { Component } from 'react';
import {InventoryList} from './inventoryList'
import NewInventoryItem from './newInventoryItem'
import {addInventoryListItem} from './actions/inventoryItemsActions'
import {connect} from 'react-redux'


class App extends Component {

  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
  }

   addItem(quantity, description) {
    this.props.dispatch(addInventoryListItem(quantity, description))
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventoryItems}/>
          <NewInventoryItem addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
