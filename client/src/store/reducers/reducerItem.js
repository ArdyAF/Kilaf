let currentState = {
  items: [],
  item: {},
  detailRefetch: '',
  carts: []
}


function reducerItem(state = currentState, action) {
  switch (action.type) {      
      case 'CREATE_ITEM':          
        return state
      case 'FETCH_ITEM':
        let newState = {
          ...state,
          items: action.payload.items
        }
        return newState
      case 'FETCH_ITEM_DETAIL':        
        let newDetail = {
          ...state,
          item: action.payload
        }

        return newDetail
      case 'ADD_BIDDING':

        // console.log(action.payload)
        return state  
      case 'FETCH_CART':        
      let newCart = {
        ...state,
        carts: action.payload
      }
      return newCart;
      default:
          return state
  }
}

export default reducerItem