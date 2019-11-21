
const defaultList = [
  {
    name: 'iPad',
    count: 3,
    price: 10,
    check: false
  },
  {
    name: 'iPhone',
    count: 3,
    price: 30,
    check: false
  }
]
// state是上一步state
function shopCart(state, action) {
  switch(action.type) {
    case 'TOGGLE_CHECKED': return state.map((good, i) => {
      if(i === action.index) {
        return {
          ...good,
          check: action.checked
        }
      }
      return good;
    })
    case 'DEL': return state.filter((good, i) => {
      return i !== action.index
    })
    default: return defaultList;
  }
  // return defaultList
}
export default shopCart;