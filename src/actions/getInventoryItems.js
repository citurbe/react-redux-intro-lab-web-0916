export function getInventoryItems() {
  const inv = [
  {quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
  ]

  return {type: 'GET_INVENTORY_LIST_ITEMS',
          payload: inv}
}
