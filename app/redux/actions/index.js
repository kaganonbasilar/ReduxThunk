import axios from 'axios';
import * as types from './actionTypes';

export const loadQuote = () => {
  return (dispatch, getState) => {
    dispatch({type: types.LOAD_QUOTE_START});
    axios
      .get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then(response =>
        dispatch({
          type: types.LOAD_QUOTE_SUCCESS,
          payload: response.data[0].quote,
        }),
      )
      .catch(error =>
        dispatch({type: types.LOAD_QUOTE_FAILURE, payload: error}),
      );
  };
};
