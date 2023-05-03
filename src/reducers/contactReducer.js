import * as actionTypes from '../actions/actionTypes';
 
export default (state = [], action) => {
    switch (action.type){
     
      case actionTypes.STORE_CONTACT_INFORMATION:
      return [
        Object.assign({}, action.contactInformation)
      ];
      case actionTypes.REMOVE_CONTACT_INFORMATION:
      return [
        []
      ]
      default:
            return state;
    }
  };