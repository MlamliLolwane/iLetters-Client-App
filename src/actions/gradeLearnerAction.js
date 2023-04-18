import * as actionTypes from './actionTypes';

export const storeGradeLearnerInformation = (gradeLearnerInformation) => {
    return {
      type: actionTypes.STORE_GRADE_LEARNER_INFORMATION,
      gradeLearnerInformation: gradeLearnerInformation
    }
};

export const deleteGradeLearnerInformation = (id) => {
    return {
        type: actionTypes.REMOVE_GRADE_LEARNER_INFORMATION,
        id: id
    }
};