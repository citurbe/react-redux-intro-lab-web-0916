import React from 'react'

class NewInventoryItem extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {

    event.preventDefault()
    let quantity = event.target.children[1].value
    let description = event.target.children[3].value
    this.props.addItem(quantity, description)
  }

  render()
  {
    return (
    <form onSubmit={this.handleClick}>
      <label for="">Quantity</label>
       <input type='text' id='quantity' name='quantity' />
       <label for="">Description</label>
       <input type='text' id='description' name='description' />
      <input type='submit' value='submit'  />
    </form>
  )
}
}

module.exports = NewInventoryItem
