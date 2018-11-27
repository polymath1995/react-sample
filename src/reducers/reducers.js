import { combineReducers } from 'redux';

function defaultFunction(state = 'start', action) {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return action.payload
    default:
     return state
   }
}


export default combineReducers({
  defaultFunction
});