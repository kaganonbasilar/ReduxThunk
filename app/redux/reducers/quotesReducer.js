import * as types from '../actions/actionTypes';

let initialState = {
  quote: 'Breaking Bad Quotes',
  isLoading: false,
  error: null,
};

export default quotes = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_QUOTE_START:
      return Object.assign({}, state, {isLoading: true});
    case types.LOAD_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        quote: action.payload,
        isLoading: false,
      });
    case types.LOAD_QUOTE_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};
