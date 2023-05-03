import * as actionTypes from '../actions/actionTypes';
 
export default (state = [], action) => {
    switch (action.type){
     
      case actionTypes.STORE_GRADE_LEARNER_INFORMATION:
      return [
        ...state,
        Object.assign({}, action.gradeLearnerInformation)
      ];
      case actionTypes.REMOVE_GRADE_LEARNER_INFORMATION:
      return [
        []
      ];
      default:
            return state;
    }
  };