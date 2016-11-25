export function addInventoryListItem(quantity, description){
  return {type: 'ADD_INVENTORY_LIST_ITEM', payload: {quantity:quantity, description: description}}
}
