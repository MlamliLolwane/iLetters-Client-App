import * as actionTypes from '../actions/actionTypes';
 
export default (state = [], action) => {
    switch (action.type){
     
      case actionTypes.STORE_LEARNER_INFORMATION:
      return [
        Object.assign({}, action.learnerInformation)
      ];
      case actionTypes.REMOVE_LEARNER_INFORMATION:
      return [
        []
      ];
      default:
            return state;
    }
  };