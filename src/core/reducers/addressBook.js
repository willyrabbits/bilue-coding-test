const defaultState = {
  addresses: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "address/add":
      if (state.addresses.findIndex(x => x.id === action.payload.id) !== -1) {
        return state
      }
      return { ...state, addresses: [...state.addresses, action.payload] };
    case "address/remove":
      return { ...state, addresses: state.addresses.filter(st => st.id !== action.payload) };
    case "addresses/add": {
      return { ...state, addresses: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
