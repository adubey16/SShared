import { GET_TRADELISTING } from './actions';

const initialState = {
	tradeList:[]
};
export default (state = initialState, action={}) => {
  switch (action.type) {
    case GET_TRADELISTING:
    return items;
    
	default:
      return state;
  }
};