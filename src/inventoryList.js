import React from 'react'


export const InventoryList = (props) => {

  return (
    <ul className="InventoryList">
    {props.inventoryItems.map((item,i) =>{
      return <li key={i}>item: {item.description}, quantity: {item.quantity} </li>
    })}
    </ul>
  )
}
