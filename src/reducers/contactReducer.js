import * as actionTypes from '../actions/actionTypes';
 
export default (state = [], action) => {
    switch (action.type){
     
      case actionTypes.STORE_CONTACT_INFORMATION:
      return [
        ...state,
        Object.assign({}, action.contactInformation)
      ];
      case actionTypes.REMOVE_CONTACT_INFORMATION:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };